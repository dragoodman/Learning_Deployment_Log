# Mac Setup Checklist

Project: Learning_Deployment_Log
Version: 1.0
Date: 2026-07-05

Purpose: Prepare and run the first Mac-based build session for the smallest working GitHub to Vercel to Supabase learning app.

## 1. Open the Correct Codex Project

- [ ] Open Codex on the Mac.
- [ ] Choose this exact folder as its own Codex Project/workspace:

```text
/Users/allanlgoodman/Library/Mobile Documents/com~apple~CloudDocs/AI Systems/02_Active_Projects/Learning_Deployment_Log
```

- [ ] Confirm the visible project files include:
  - `Project_Brief.md`
  - `Build_Plan.md`
  - `Mac_Setup_Checklist.md`
- [ ] Confirm Codex is working only inside this project folder.

## 2. Confirm Local Tools

- [ ] Confirm Node.js is installed:

```bash
node --version
```

- [ ] Confirm npm is installed:

```bash
npm --version
```

- [ ] Confirm Git is installed:

```bash
git --version
```

- [ ] Confirm GitHub CLI is installed or decide to create the GitHub repo through the GitHub website:

```bash
gh --version
```

## 3. Create the Next.js App

- [ ] From inside the project folder, create a minimal Next.js app in the current directory.
- [ ] Use a Vercel-friendly setup.
- [ ] Keep Version 1 minimal:
  - one app page
  - one form
  - one list
  - no authentication
  - no edit or delete features
  - no advanced styling
- [ ] Install dependencies.
- [ ] Start the local dev server.
- [ ] Open the local app in the browser.
- [ ] Confirm the starter app loads locally before adding Supabase behavior.

## 4. Initialize Git

- [ ] Confirm the project folder is the Git root, not the larger `AI Systems` folder.
- [ ] Initialize Git if needed:

```bash
git init
```

- [ ] Confirm `.gitignore` excludes:
  - `node_modules`
  - `.next`
  - `.env.local`
- [ ] Check the initial status:

```bash
git status
```

- [ ] Make the first commit after the app starts locally.

## 5. Create the GitHub Repository

- [ ] Create a GitHub repository named:

```text
Learning_Deployment_Log
```

- [ ] Keep the repository simple for Version 1.
- [ ] Connect the local Git repository to the GitHub remote.
- [ ] Push the initial commit to GitHub.
- [ ] Confirm the repository page shows the pushed files.

## 6. Create the Supabase Project and Table

- [ ] Create a new Supabase project.
- [ ] Create one table named:

```text
learning_entries
```

- [ ] Add the Version 1 fields:
  - `id`
  - `created_at`
  - `title`
  - `tool`
  - `note`
  - `next_step`
- [ ] Use simple field types appropriate for text-based learning entries.
- [ ] Confirm the table exists before connecting the app.

## 7. Set Environment Variables Locally

- [ ] Create `.env.local` in the project folder.
- [ ] Add the Supabase project URL.
- [ ] Add the Supabase public anon key.
- [ ] Confirm `.env.local` is ignored by Git.
- [ ] Restart the local dev server after adding environment variables.
- [ ] Confirm the app can connect to Supabase locally.

## 8. Build the Add/View Loop

- [ ] Display existing `learning_entries` records.
- [ ] Add a simple form with fields for:
  - `title`
  - `tool`
  - `note`
  - `next_step`
- [ ] Save new entries to Supabase.
- [ ] Refresh or update the list after saving.
- [ ] Add one local test entry.
- [ ] Confirm the entry appears in both:
  - the local app
  - the Supabase table

## 9. Deploy to Vercel

- [ ] Connect Vercel to the GitHub repository.
- [ ] Confirm Vercel detects the project as a Next.js app.
- [ ] Add the same Supabase environment variables in Vercel.
- [ ] Deploy the app.
- [ ] Open the deployed URL.
- [ ] Confirm the deployed app loads without errors.

## 10. Verify the First Deployed Entry

- [ ] Add a real learning entry through the deployed Vercel app.
- [ ] Confirm the entry appears in the deployed app list.
- [ ] Confirm the same entry appears in the Supabase `learning_entries` table.
- [ ] Record what was verified:
  - deployed URL works
  - Supabase insert works
  - Supabase read works
  - GitHub to Vercel deployment works

## 11. First Redeployment Practice

- [ ] Make one tiny visible change to the app.
- [ ] Commit the change.
- [ ] Push to GitHub.
- [ ] Confirm Vercel automatically redeploys.
- [ ] Confirm the tiny change appears on the deployed site.

## Stop Point for Version 1

Stop after the deployed add/view loop works. Do not add authentication, editing, deleting, filtering, charts, AI features, or advanced styling during the first build session.
