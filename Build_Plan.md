# Build Plan

Project: Learning_Deployment_Log
Version: 1.0
Date: 2026-07-05

## Version 1 Goal

Create the smallest deployed app that can add a learning entry, view learning entries, and prove the GitHub to Vercel to Supabase workflow works.

## Phase 1: Project Setup

1. Confirm Allan is ready to start implementation.
2. Create the app locally inside `02_Active_Projects/Learning_Deployment_Log`.
3. Use a simple Next.js setup suitable for Vercel.
4. Keep the initial page minimal.

Done when:

- The local app starts successfully.
- The project has only the files needed for the app and planning.

## Phase 2: GitHub

1. Initialize Git if needed.
2. Create a GitHub repository for `Learning_Deployment_Log`.
3. Commit the initial app.
4. Push the initial commit to GitHub.

Done when:

- The project exists on GitHub.
- The local project and GitHub repository are connected.

## Phase 3: Supabase

1. Create a Supabase project.
2. Create one table named `learning_entries`.
3. Add only the fields needed for Version 1.
4. Store Supabase connection values as local environment variables.

Done when:

- The table exists.
- The local app can connect to Supabase.

## Phase 4: App Functionality

1. Display existing learning entries.
2. Add a simple form for a new entry.
3. Save the new entry to Supabase.
4. Refresh or update the list after saving.

Done when:

- Allan can add an entry locally.
- Allan can view saved entries locally.

## Phase 5: Vercel Deployment

1. Connect the GitHub repository to Vercel.
2. Add Supabase environment variables in Vercel.
3. Deploy the app.
4. Open the deployed URL and test add/view behavior.

Done when:

- The deployed app works.
- A real learning entry can be added and viewed from the deployed app.

## Phase 6: Learning Loop Check

1. Make one tiny change to the app.
2. Commit and push the change.
3. Confirm Vercel redeploys from GitHub.
4. Record what Allan learned.

Done when:

- Allan has completed one full edit, commit, push, deploy cycle.

## Deferred Until After Version 1

- Authentication.
- Edit entries.
- Delete entries.
- Filters or search.
- Charts or dashboards.
- AI-generated summaries.
- More tables.
- Advanced styling.

