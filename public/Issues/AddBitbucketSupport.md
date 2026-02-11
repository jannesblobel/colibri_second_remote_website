Github ID: #4

## Title: Add Bitbucket support #4

## Description

### Summary
Colibri currently supports GitHub only. Bitbucket URLs are not supported. Users with Bitbucket repositories see an unhappy-path message and are directed to this issue.

### Current behavior
- User enters a Bitbucket URL (e.g. `https://bitbucket.org/org/repo/src/main/README.md`)
- Colibri shows: "Bitbucket is not supported – Colibri currently supports GitHub only. Bitbucket URLs are not yet supported."
- CTA: Upvote here

### Desired behavior
- Colibri accepts Bitbucket URLs in the same way as GitHub
- Users can open and edit Markdown files from Bitbucket repositories

### User impact
Users with Bitbucket-hosted documentation cannot use Colibri

### Acceptance criteria
- [ ] Bitbucket URLs are recognized and parsed
- [ ] Markdown files can be loaded from Bitbucket repositories
- [ ] Editing and sync work for Bitbucket hosted markdowns
