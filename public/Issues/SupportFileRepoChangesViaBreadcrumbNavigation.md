Github ID: #2

## Title: Support file/repo changes via breadcrumb navigation #2

## Description

### Summary
Colibri currently does not support changing the file or repository via the breadcrumb navigation (Org → Repo → Filename.md). Clicking Org or Repo in the breadcrumb shows an unhappy-path message instead of navigating.

### Current behavior
- Breadcrumb shows: **Org** › **Repo** › **my-markdown-file.md**
- Clicking **Org** or **Repo** opens a modal explaining that this is not supported
- Users are told to go back to the landing page and paste the correct URL to the other file

### Desired behavior
- Clicking **Org** navigates to an org-level view (e.g. list of repos)
- Clicking **Repo** navigates to a repo-level view (e.g. list of files)
- Clicking **Foldername** navigates to a folder-level view (e.g. list of files)
- Users can switch context without leaving the editor and re-entering a URL

### User impact
Users who want to open another file or repo must:
1. Leave the editor
2. Return to the landing page
3. Paste the new URL
4. Reload the document

This breaks the flow when working across multiple files or repos.

### Proposed solution (optional)
- Implement org-level and repo-level routes/views
- Make breadcrumb links navigate to these views
- Or: add a file/repo picker in the editor header as an alternative

### Acceptance criteria
- [ ] Clicking **Org** in the breadcrumb navigates to an org view
- [ ] Clicking **Repo** in the breadcrumb navigates to a repo view
- [ ] Users can switch files/repos without returning to the landing page
