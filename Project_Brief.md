# Project Brief

Project Name: Learning_Deployment_Log
Version: 1.0
Date: 2026-07-05

## Project Goal

Build a very small personally useful web app that helps Allan learn GitHub, Vercel, and Supabase by recording hands-on learning milestones.

## Intended User

Allan is the only intended user for Version 1.

## Desired Output

Version 1 should produce a minimal deployed web app that can:

- Add a learning entry.
- View saved learning entries.
- Deploy successfully through GitHub and Vercel.

## Important Context

This project exists primarily as a learning project. Its purpose is not to build a large product, but to force practical experience with:

- GitHub repository creation, commits, pushes, and basic project history.
- Vercel deployment from GitHub.
- Supabase as the database for saved learning entries.

## Version 1 Scope

Include only:

- One simple app page.
- One Supabase table for learning entries.
- One form for adding entries.
- One list for viewing entries.
- One successful Vercel deployment connected to GitHub.

Do not include in Version 1:

- User accounts or authentication.
- Editing entries.
- Deleting entries.
- File uploads.
- AI features.
- Payment, roles, teams, or admin dashboards.
- Complex styling or layout work.

## Suggested Data Fields

The first Supabase table should likely be called `learning_entries`.

Initial fields:

- `id`
- `created_at`
- `title`
- `tool`
- `note`
- `next_step`

## Files to Reference

- Root workspace instructions: `AI Systems/AGENTS.md`
- Local project files in this folder

## Constraints

- Keep the project small enough to finish the first working deployment quickly.
- Do not create advanced features before the basic add-entry and view-entry loop works.
- Do not modify protected `00_Master_Reference` files.
- Do not create reusable templates from this project unless Allan explicitly asks later.

## Success Criteria

This project is successful when:

- A GitHub repository exists for the project.
- The app is deployed on Vercel from that GitHub repository.
- A Supabase database stores learning entries.
- Allan can add an entry through the deployed app.
- Allan can view saved entries through the deployed app.
- Allan has practiced at least one small code change and redeployment.

## Notes for Codex

Use the instructions in the root `AGENTS.md`.

Keep the build incremental. When in doubt, choose the smallest working step that teaches GitHub, Vercel, or Supabase.

