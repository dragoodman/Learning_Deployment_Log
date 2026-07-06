# Lessons Learned

## Project

Learning_Deployment_Log

## Main Takeaway

This project was not primarily about building a polished application. It was about learning the modern development workflow by actually using Git, GitHub, Next.js, Supabase, Vercel, and Codex together.

The most important lesson was that Allan can work directly with Codex inside the AI Systems workspace and does not need to route every step through ChatGPT.

## What Worked Well

The AI Systems folder structure was valuable. The project brief, build plan, checklist, and root `AGENTS.md` file gave Codex useful guardrails and made the work more durable than a normal chat session.

The project confirmed that file-based context matters. Project instructions, goals, and workflow decisions should live in files so they can be reused by Codex, ChatGPT, Claude, or future AI tools.

The GitHub to Vercel workflow became clearer. Once GitHub and Vercel are connected, pushing an update to GitHub can automatically trigger a Vercel redeployment.

Codex became more familiar as a development partner. Allan gained confidence working directly in the Codex app, though there is still more to learn about its features.

## What Was Difficult

The application layer remains the least familiar part of the project. Allan has some superficial understanding of the file structure and code, but does not yet need or expect to become a traditional coder.

The important goal is not to memorize React, Next.js, TypeScript, or Supabase syntax. The goal is to understand the development process well enough to direct work, ask better questions, recognize major problems, and make informed decisions.

The approval process slowed the project down. This was useful for learning and safety, but future projects should use a more efficient approval model when appropriate.

## What Clicked

Codex follows instructions strongly. This means the initial prompt matters. A good project prompt should define both:

- what Codex is allowed to do
- what Codex must not do without approval

The project also showed that guardrails are not only restrictions. Good guardrails can make Codex more useful by reducing ambiguity and keeping the work aligned with the real goal.

## Git and GitHub

Git is the local history system.

GitHub is the remote place where the project is stored and shared.

The basic workflow is:

1. Edit files.
2. Commit changes locally.
3. Push commits to GitHub.
4. Let connected services such as Vercel react to the pushed changes.

## Supabase

Supabase is the database layer.

Allan did not yet develop deep Supabase knowledge, but learned where it fits: it stores persistent application data. It will become more important for future apps involving multiple users, permissions, structured records, or more serious data management.

## Vercel

Vercel is the deployment layer.

The key learning was that Vercel can watch the GitHub repository and redeploy automatically when new commits are pushed.

## Codex

Codex can function as a direct development partner inside the project workspace.

For future projects, Allan should give Codex explicit instructions at the beginning, including:

- the goal
- the scope
- what is out of scope
- what Codex may do without asking
- what Codex must ask before doing

Codex should also point out inefficient workflows, possible best-practice issues, and places where approval requirements can be safely reduced.

## AI Systems Architecture

The most helpful AI Systems elements were:

- root `AGENTS.md` for workspace rules and protected-folder boundaries
- project-specific briefs
- build plans
- setup checklists
- reusable prompt templates
- the practice of promoting useful workflows into reusable assets

The most important architectural lesson is that successful workflows should be captured and reused instead of rediscovered each time.

## Improvements For Future Projects

Future projects should start with clearer completion criteria.

Learning projects should include a dedicated completion document early in the process.

Future projects should consider using Efficient Build Mode to reduce unnecessary approvals while preserving safety around commits, pushes, deployments, secrets, destructive actions, and external account changes.

Codex should proactively identify when Allan is doing something inefficiently or when a safer/better practice exists.

## Advice To Future Allan

Trust that you can work directly with Codex.

Use Mentor ChatGPT when helpful, but do not assume every Codex step needs outside coaching.

Start each project with explicit instructions.

Define the goal, the boundaries, the approval model, and the finish line before building.

Use each project to improve the AI Systems workspace, not just to produce an app.
