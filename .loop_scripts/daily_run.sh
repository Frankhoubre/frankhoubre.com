#!/bin/bash
#
# Daily growth-loop runner for frankhoubre.com.
#
# Triggered by a launchd LaunchAgent at login and once a day (see
# ~/Library/LaunchAgents/com.frankhoubre.growthloop.plist). Idempotent: it runs
# the daily content + SEO loop at most once per calendar day. If today is
# already done it just reports. On a real run it invokes Claude Code headless to
# execute .loop_scripts/daily_content_loop.md (write 2 news + 1 evergreen, SEO
# audit + safe fixes, build, push to main), then notifies you.
#
# Modes:
#   daily_run.sh            run today's loop if not already done, then notify
#   daily_run.sh --status   just report today's status, never run
#   daily_run.sh --force    run even if already done today
#
# Manual use is fine too: just run it from a terminal.

set -uo pipefail

REPO="/Users/frankhoubre/frankhoubre.com"
LOGDIR="$HOME/Library/Logs/frankhoubre-growthloop"
STATE="$LOGDIR/last_run_date"
TODAY="$(date +%F)"
NOWLOG="$LOGDIR/run-$TODAY.log"

# launchd gives a minimal PATH; make node/claude/git reachable.
export PATH="$HOME/.nvm/versions/node/v22.17.1/bin:/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"

mkdir -p "$LOGDIR"

# Auth for the headless CLI. `claude -p` does NOT inherit the desktop app login;
# it needs a long-lived token (from `claude setup-token`) in CLAUDE_CODE_OAUTH_TOKEN,
# or an ANTHROPIC_API_KEY. Keep it in a gitignored file, chmod 600, never in the
# repo. The secret never passes through the assistant.
AUTH_ENV="$HOME/.config/frankhoubre-loop/auth.env"
[ -f "$AUTH_ENV" ] && . "$AUTH_ENV"

notify() { # title, message
  /usr/bin/osascript -e "display notification \"$2\" with title \"$1\"" >/dev/null 2>&1 || true
}

# Count FR/EN article files added (git) since midnight today.
count_today_articles() {
  cd "$REPO" 2>/dev/null || { echo 0; return; }
  git log --since="$TODAY 00:00:00" --diff-filter=A --name-only --pretty=format: \
    -- content/blog content/blog-en 2>/dev/null | grep -c '\.md$'
}

report_done() {
  local n; n="$(count_today_articles)"
  local msg="Boucle déjà faite le $TODAY : $n article(s) publié(s)."
  echo "$msg"
  notify "frankhoubre.com — boucle quotidienne" "$msg"
}

MODE="${1:-run}"

case "$MODE" in
  --status)
    if [ -f "$STATE" ] && [ "$(cat "$STATE")" = "$TODAY" ]; then
      report_done
    else
      echo "Boucle PAS encore faite aujourd'hui ($TODAY)."
      notify "frankhoubre.com — boucle quotidienne" "Pas encore faite aujourd'hui ($TODAY)."
    fi
    exit 0
    ;;
  --force) : ;; # fall through and run
  run)
    if [ -f "$STATE" ] && [ "$(cat "$STATE")" = "$TODAY" ]; then
      report_done
      exit 0
    fi
    ;;
esac

cd "$REPO" || { notify "frankhoubre.com — ERREUR" "Repo introuvable"; exit 1; }

echo "=== Daily growth loop $TODAY $(date +%H:%M:%S) ===" | tee -a "$NOWLOG"
notify "frankhoubre.com — boucle quotidienne" "Démarrage de la boucle du $TODAY…"

PROMPT="Tu es la boucle de croissance quotidienne de frankhoubre.com. \
Lis d'abord tout .loop_memory/ (surtout PROGRESS.md, ERRORS_AND_BLOCKERS.md, \
CONTENT_LEDGER.md, KEYWORD_MAP.md, STYLE_GUIDE.md), puis exécute le playbook \
.loop_scripts/daily_content_loop.md pour aujourd'hui ($TODAY). \
Objectif : 2 actualités (catégorie actualite, sources réelles vérifiées des \
dernières 24-72h, jamais d'info inventée) + 1 evergreen sans cannibalisation, \
TOUS rédigés par toi en français, voix de Frank Houbre, jamais de tiret \
cadratin. Génère une image hero par article via le script Imagen \
(.loop_scripts puis render_blog_queue_gemini.py, clé Gemini = images \
uniquement). Lance l'audit SEO (node .loop_scripts/seo_audit.mjs), corrige les \
problèmes sûrs. Travaille dans un worktree git isolé, build, merge sur main, \
push origin main, vérifie les URLs en live. Mets à jour TOUTE la mémoire \
.loop_memory et DAILY_REPORT.md. Si une condition d'arrêt du playbook est \
atteinte, logge dans ERRORS_AND_BLOCKERS.md et arrête proprement. Termine en \
écrivant une derniere ligne: RESULT: <n> articles publies le $TODAY."

# Headless, unattended run. --dangerously-skip-permissions is required for an
# unattended job (no human to approve tool calls). Scope is the daily playbook.
# --dangerously-skip-permissions: required for an unattended job (no human to
#   approve tool calls). Scope is the daily playbook, in a directory you trust.
# --max-budget-usd: hard cost ceiling per day (a mid-run cutoff just means no
#   push that day, which is safe). Tune to taste.
claude -p "$PROMPT" \
  --dangerously-skip-permissions \
  --max-budget-usd 30 \
  >> "$NOWLOG" 2>&1
STATUS=$?

# The launchd CLI does not inherit the desktop app login. If the CLI is not
# authenticated, tell the user the one-time fix instead of silently failing.
if grep -qiE "not logged in|please run /login|invalid api key|authentication" "$NOWLOG"; then
  MSG="CLI non connecté. Lance 'claude setup-token', copie le token sk-ant-oat..., et mets-le dans ~/.config/frankhoubre-loop/auth.env (voir SETUP_LOOP.md)."
  echo "AUTH MISSING — $MSG" | tee -a "$NOWLOG"
  notify "frankhoubre.com — action requise 🔑" "$MSG"
  exit 3
fi

N="$(count_today_articles)"
if [ "$STATUS" -eq 0 ]; then
  echo "$TODAY" > "$STATE"
  MSG="Boucle OK le $TODAY : $N article(s) publié(s) et poussé(s) sur main."
  echo "$MSG" | tee -a "$NOWLOG"
  notify "frankhoubre.com — boucle quotidienne ✅" "$MSG"
else
  MSG="Boucle en échec le $TODAY (code $STATUS). Voir $NOWLOG. $N article(s) ajouté(s)."
  echo "$MSG" | tee -a "$NOWLOG"
  notify "frankhoubre.com — boucle ⚠️" "$MSG"
fi

exit "$STATUS"
