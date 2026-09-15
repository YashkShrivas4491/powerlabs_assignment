# Agent Project Guide

## Project

This is a React 19 and Vite Airbnb-style property listing UI.

## Development

- Use reusable React components for page sections and interactions.
- Keep static listing content in `src/data/listingData.js`.
- Keep shared behavior in `src/hooks/`.
- Keep responsive styles in `src/App.css` and global styles in `src/index.css`.
- Do not commit `node_modules/` or build output.

## Validation

Run these commands before committing UI changes:

```bash
npm run lint
npm run build
```

## Commit convention

Use Conventional Commits, for example:

- `feat: add booking interaction`
- `fix: repair calendar selection`
- `docs: improve project README`
- `chore: update project tooling`
