# Airbnb Listing UI

A polished React + Vite property listing experience inspired by Airbnb. The page includes an interactive gallery, booking flow, reviews, amenities, host information, map controls, and nearby stays.

## Features

- Responsive Airbnb-style listing layout
- Full-screen photo gallery viewer
- Two-month date picker with range selection
- Guest selector and reservation summary
- Expandable amenities list
- Guest testimonials and rating breakdown
- Interactive map zoom controls
- Host profile, co-hosts, and message action
- Nearby-stay carousel with arrow navigation
- Desktop, tablet, and mobile layouts

## Tech Stack

- React 19
- Vite 8
- JavaScript
- Custom CSS
- Oxlint

## Getting Started

Requirements: Node.js 18 or newer and npm.

```bash
npm install
npm run dev
```

The development server runs at `http://localhost:5173` by default.

## Available Scripts

```bash
npm run dev      # Start the development server
npm run lint     # Run Oxlint
npm run build    # Create a production build
npm run preview  # Preview the production build locally
```

## Project Structure

```text
src/
  components/       Reusable UI sections
  data/             Listing content and display data
  hooks/            Shared React hooks
  App.jsx           Page composition and interaction state
  App.css           Component and responsive styling
```

## Deploy with Vercel

1. Import `YashkShrivas4491/powerlabs_assignment` into Vercel.
2. Select the Vite framework preset.
3. Use these build settings:

- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

Vercel will deploy new changes automatically whenever they are pushed to `main`.

## Validation

Run these commands before deploying:

```bash
npm run lint
npm run build
```
