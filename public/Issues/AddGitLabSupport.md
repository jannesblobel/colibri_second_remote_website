Github ID: #3

## Title: Add GitLab support #3

## Description

### Summary
Colibri currently supports GitHub only. GitLab URLs are not supported. Users with GitLab repositories see an unhappy-path message and are directed to this issue.

### Current behavior
- User enters a GitLab URL (e.g. `https://gitlab.com/org/repo/-/blob/main/README.md`)
- Colibri shows: "GitLab is not supported – Colibri currently supports GitHub only. GitLab URLs are not yet supported."
- CTA: Upvote here

### Desired behavior
- Colibri accepts GitLab URLs in the same way as GitHub
- Users can open and edit Markdown files from GitLab repositories

### User impact
Users with GitLab-hosted documentation cannot use Colibri

### Acceptance criteria
- [ ] GitLab URLs are recognized and parsed
- [ ] Markdown files can be loaded from GitLab repositories
- [ ] Editing and sync work for GitLab hosted markdowns
