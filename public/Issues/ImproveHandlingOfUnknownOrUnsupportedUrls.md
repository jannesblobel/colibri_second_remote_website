Github ID: #5

## Title: Improve handling of unknown or unsupported URLs #5

## Description

### Summary
Colibri currently supports GitHub only. Some URLs are not recognized or supported. Users who enter such URLs see an unhappy-path message and are directed to this issue.

### Current behavior
- User enters an unrecognized or unsupported URL
- Colibri shows: "Unknown URL – Colibri currently supports GitHub only. This URL is not recognized or supported."
- CTA: Open issue

### Desired behavior
- Colibri either recognizes and supports more URL formats or gives clearer feedback on why a URL is invalid
- Users understand what URL formats are supported and how to fix invalid URLs

### Acceptance criteria
- [ ] Unsupported URLs show clear, actionable error messages
- [ ] Where possible, additional URL formats are recognized and supported
