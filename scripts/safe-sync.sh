#!/usr/bin/env bash
set -euo pipefail

branch="${1:-main}"
remote="${2:-origin}"

current_branch="$(git rev-parse --abbrev-ref HEAD)"
has_changes="$(git status --porcelain)"

if [[ "$current_branch" != "$branch" ]]; then
  echo "Error: checkout '$branch' before syncing (current: '$current_branch')."
  exit 1
fi

if [[ -n "$has_changes" ]]; then
  echo "Error: working tree is not clean. Commit/stash first."
  exit 1
fi

echo "Fetching $remote..."
git fetch --tags "$remote"

echo "Checking common ancestor with $remote/$branch..."
if ! git merge-base HEAD "$remote/$branch" >/dev/null 2>&1; then
  echo "Error: unrelated histories detected with $remote/$branch."
  echo "Stop here to avoid a broken pull. Resolve manually once."
  exit 2
fi

echo "Rebasing $branch on $remote/$branch..."
git rebase "$remote/$branch"

echo "Done. Status:"
git status -sb
