This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Blog Publishing Protocol (AI Studio)

When creating blog articles for this project, follow this default workflow:

1. Publish in batches of **exactly 3 articles per day**.
2. Set the correct `date` in frontmatter for each scheduled batch day.
3. Ensure each article is added under `content/blog/`.
4. Run `npm run build` before deployment and fix any MDX/frontmatter issues.
5. Deploy to production on Vercel.
6. Verify live URLs on `https://frankhoubre.com/blog` and direct post slugs.
7. Confirm the custom domain aliases (`frankhoubre.com` and `www.frankhoubre.com`) point to the latest production deployment.

This is the expected default behavior unless explicitly overridden.

For the full mandatory writing and publishing ruleset, see:

- `BLOG_WORKFLOW.md`
