# AI Workflow Rules — Junaid Home Interiors

## Development Approach

Build this project using a spec-driven, highly-disciplined workflow. Refer to the files in `contexts/` as the single source of truth for the application's vision, design guidelines, and code conventions. Write code incrementally, validating individual components before building depending systems. Do not assume or guess requirements.

## Scoping Rules

- Implement one discrete user interface page, component block, or action handler at a time.
- Make targeted, reviewable code modifications instead of sweeping files updates.
- Keep UI styling changes isolated from server processing logic or database model extensions.

## Split Thresholds

Divide a task into separate implementation steps if the proposed edit bundles:
- UI style overrides and form Server Action submission pathways.
- Configuration settings (e.g. Next.js setups) and page layout rendering code.
- Multiple separate service category definitions.

*If an interface view cannot be manually tested or built cleanly right away, the task scope is too broad — split it.*

## Handling Missing & Ambiguous Requirements

- Never introduce speculative features or styling details not documented in `project-overview.md` or `DESIGN.md`.
- If a parameter (e.g. specific service pricing or team members names) is undefined, write to the client to confirm, and add it to the **Open Questions** list in `progress-tracker.md`.
- Do not make styling decisions that conflict with the colors, typography, or spacing tokens in `ui-context.md`.

## Protected Workspace Files

Do not modify or delete these files unless specifically instructed:
- `next.config.ts` or `tsconfig.json` — Core compiler configuration rules.
- `package.json` / `package-lock.json` — Dependency management manifests.
- Installed library modules inside `node_modules/`.

## Keeping Context Files Synchronized

Update the corresponding markdown file in `contexts/` immediately if an implementation step:
- Adjusts the layout structures, spacing parameters, or design tokens.
- Introduces new local data structures or Server Action integrations.
- Changes build plan paths or feature definitions.

## Delivery & Quality Checklist

Before finalizing a step or declaring a unit complete:
1. Ensure the code compiles without errors or TypeScript warning alerts.
2. Confirm the component displays and behaves correctly at both 360px and 1280px widths.
3. Validate that forms reject incorrect phone structures and protect against duplicate submits.
4. Verify that `progress-tracker.md` records the completed files and next milestones.
5. Run `npm run build` locally to guarantee the Next.js bundle compiles successfully.
