Github ID: #6

## Title: Add MDX support #6

## Description

### Summary
Colibri currently supports Markdown (.md) only.

MDX files are not supported. MDX is widely used in developer docs (e.g. Docusaurus, Next.js docs, Storybook).

### Current behavior
- User enters a URL pointing to an MDX file (e.g. `README.mdx`)
- Colibri shows: "MDX files are not supported – Colibri does not support MDX files at the moment. Please use a .md file."
- CTA: Upvote here

### Desired behavior
- Colibri accepts MDX URLs in the same way as Markdown
- Users can open and edit MDX files from GitHub repositories

### User impact
Users with MDX-hosted documentation cannot use Colibri without converting to plain Markdown.

### Acceptance criteria
- [ ] MDX URLs are recognized and parsed
- [ ] MDX files can be loaded from GitHub repositories
- [ ] Editing and sync work for MDX hosted documents
