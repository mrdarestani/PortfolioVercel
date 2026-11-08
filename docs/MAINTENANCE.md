# Portfolio Maintenance Guide

This guide explains where portfolio content lives and how to run, validate, and deploy the site. The current website is a Next.js App Router application. The homepage is a scrolling portfolio, and project detail pages live under `/projects/<slug>`.

## Where to Find Things

| Path                           | Purpose                                                                                   |
| ------------------------------ | ----------------------------------------------------------------------------------------- |
| `app/page.tsx`                 | Homepage section order.                                                                   |
| `app/projects/<slug>/page.tsx` | Project detail pages. The folder name becomes the URL slug.                               |
| `components/`                  | Homepage sections and reusable UI.                                                        |
| `components/header.tsx`        | Main navigation UI.                                                                       |
| `lib/data.ts`                  | Navigation links, experience entries, featured project summaries, and skills.             |
| `lib/project-skills.ts`        | Project-specific skill lists.                                                             |
| `public/`                      | Public assets, including the current `CV.pdf` and existing root-level project images.     |
| `public/projects/`             | Project photos, publication images, and award media. Public URLs start with `/projects/`. |
| `actions/sendEmail.ts`         | Contact form server action and Resend email request.                                      |
| `email/contact-form-email.tsx` | Contact email template.                                                                   |
| `context/`                     | Theme and active-section state.                                                           |
| `docs/PORTFOLIO_CONTENT.md`    | Content inventory and source links for future updates.                                    |
| `CommandsForGit-Revised.txt`   | Historical command notes; use this guide for the current recommended workflow.            |

When replacing or renaming an image, update its import/reference in the project data or page at the same time. Keep new project media together in a clearly named folder under `public/projects/`; do not move existing assets without updating their imports.

## Local Development

Requirements: Node.js and npm. The repository includes `package-lock.json`; use it to install the versions already resolved for this project.

```powershell
npm ci
npm run dev
```

Open http://localhost:3000. Put local secrets in `.env.local`, which is ignored by Git. The contact form requires `RESEND_API_KEY`; configure it in the local environment and in the deployment provider. Never commit API keys.

## Validation

```powershell
npm run lint
npm run build
```

There is no dedicated test script in `package.json` at this time. A successful production build checks that Next.js can compile the application; it is not a substitute for testing the form in a configured environment. `npm run start` serves the production build locally after `npm run build`.

Avoid deleting `package-lock.json` or running `npm audit fix --force` as routine setup steps. The lockfile makes installs reproducible, and forced dependency upgrades can introduce unrelated breaking changes. Review dependency updates separately.

## Updating the CV

Use `public/CV.pdf` as the canonical current CV. `public/CV2025.pdf` is not the canonical download. Update the canonical file, inspect the Git diff/status, and create a focused commit and annotated tag for each approved CV revision. Do not include unrelated working-tree files in that commit.

The current recovery tag is `cv-2026-11-08`, and it has been pushed to `origin`. Inspect the tagged commit metadata with:

```powershell
git show --no-patch --format=fuller cv-2026-11-08
```

Restore only the CV from that tag with:

```powershell
git restore --source=cv-2026-11-08 -- public/CV.pdf
```

New tags are local until pushed. To keep a future recovery point on the configured remote, push that tag explicitly:

```powershell
git push origin cv-2026-11-08
```

For a later CV revision, use a new date-based tag (for example, `cv-2027-01-15`) rather than moving the existing tag. Keep the tag name and revision date in this guide current.

## Deployment

The recommended flow is to connect the Git repository to the existing Vercel project and deploy through its normal Git integration. Push the reviewed commit to the deployment branch; Vercel will build and deploy it according to the project's settings. Confirm required environment variables, especially `RESEND_API_KEY`, in the Vercel project settings for each needed environment.

For a manual production deployment with the Vercel CLI, from the repository root:

```powershell
vercel login
vercel link
vercel --prod
```

Use the existing Vercel project when linking. Do not create a replacement project unless that is intentional. After deployment, check the homepage, project routes, CV download, publication links, and contact form.

## Updating Portfolio Content

The current featured-project list and experience data are in `lib/data.ts`; project detail copy is in each route's `page.tsx`. Keep the home page selective: feature the strongest projects there and link to full details. Use `docs/PORTFOLIO_CONTENT.md` as the working inventory for material not yet represented cleanly in the UI. When implementing the dedicated publications, achievements, Karate, or miscellaneous-project areas, keep their content data separate from presentation components so future edits do not require rebuilding page markup by hand.
