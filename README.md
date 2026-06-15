# Sunshine School Frontend

A React + Vite frontend for the Sunshine School course portal. This app provides public course browsing, student application flow, and admin management support.

## Features

- Course listing and detail pages
- Searchable and responsive course catalog
- Student application workflow
- Firebase login support via email/password
- Admin pages protected by authentication
- Tailwind CSS styling with custom layout components

## Getting Started

### Prerequisites

- Node.js 18+ or compatible
- npm 10+ (or yarn/pnpm equivalent)
- A backend API for courses and application data
- A Firebase project for authentication

### Install Dependencies

```bash
npm install
```


### Run the App

```bash
npm run dev
```

Then open the local development URL shown in the terminal.

## Available Scripts

- `npm run dev` — start the Vite development server
- `npm run build` — create a production build
- `npm run preview` — preview the production build locally
- `npm test` — run tests once
- `npm run test:watch` — run tests in watch mode
- `npm run lint` — lint source files with ESLint

## Project Structure

- `src/` — application source code
  - `src/App.jsx` — route configuration
  - `src/main.jsx` — app entry point
  - `src/pages/` — page views
  - `src/components/` — reusable UI components
  - `src/context/` — auth and global state providers
  - `src/services/` — API wrappers
  - `src/firebase.js` — Firebase configuration
  - `src/index.css` — Tailwind and layout styles

## Notes

- Login now uses Firebase email/password authentication.
- The app stores the Firebase ID token in `localStorage` as `ss_token`.
- Protected routes use auth state from `AuthContext`.

## License

This project is private and intended for internal use only.
