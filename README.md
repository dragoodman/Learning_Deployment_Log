# Learning Deployment Log

A small Next.js app for recording hands-on learning milestones while practicing GitHub, Vercel, and Supabase deployment.

## Learning Scope

This project is primarily a workflow-learning project, not a production application. Version 2 completion is defined in `Version_2_Goals_and_Completion_Criteria.md`.

Success is measured by Allan's understanding of the development lifecycle: local development, Git, GitHub, Supabase, Vercel deployment, redeployment, and Codex collaboration.

## Current App Behavior

- Add a learning entry.
- View saved learning entries.
- Deploy through GitHub and Vercel.
- Delete a saved learning entry.

The delete feature exists as a simple practice feature, but it is not required for Version 2 completion.

## Deployment Notes

- GitHub repository: `dragoodman/Learning_Deployment_Log`
- Vercel project: `learning-deployment-log`
- Production site: `https://learning-deployment-log.vercel.app`
- Supabase table: `learning_entries`

## Supabase Table

The app expects a public table named `learning_entries` with these columns:

- `id` as `uuid`, primary key, default `gen_random_uuid()`
- `created_at` as `timestamp`, default `now()`
- `title` as `text`
- `tool` as `text`
- `note` as `text`
- `next_step` as `text`

For this learning version, Row Level Security is disabled so the deployed app can add, view, and delete entries.

## Local Commands Practiced

```bash
pnpm dev
pnpm lint
pnpm build
```

## Workflow Practiced

1. Make a small app change.
2. Check it locally with lint and build.
3. Commit the change to Git.
4. Push the commit to GitHub.
5. Let Vercel redeploy the live site.
