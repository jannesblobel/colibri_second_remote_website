Github ID: #7 

## Title: Add support for private repositories #7

## Description

### Summary
Colibri currently supports public GitHub repositories only. Private repositories are not supported.

### Current behavior
- User enters a URL pointing to a Markdown file in a private repository
- Colibri shows: "Private repos are not supported – Colibri does not support private repositories at the moment. Please use a public repo."
- CTA: Upvote here

### Desired behavior
- Colibri accepts URLs for private repositories
- Users need to login to their Github Account
- Users can open and edit Markdown files from private repos (with appropriate authentication)

### User impact
Users with private repositories cannot use Colibri without making repos public.

### Acceptance criteria
- [ ] Private repository URLs are recognized and parsed
- [ ] Authentication flow for private repos is implemented
- [ ] Markdown files can be loaded from private repositories
- [ ] Editing and sync work for private repo documents