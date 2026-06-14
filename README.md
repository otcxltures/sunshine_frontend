# Sunshine School Frontend

A React + Vite frontend for the Sunshine School course portal. This app provides public course browsing, student application flow, and admin management support.

## Features

- Course listing and detail pages
- Searchable and responsive course catalog
- Student application workflow
- Authentication-ready routes with protected pages
- Admin dashboard for course and application management
- Tailwind CSS styling with custom UI components

### Install Dependencies

```bash
npm install
``

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


## Notes

- The app expects authenticated endpoints at `/auth/login`, `/auth/register`, and `/auth/me` if login is enabled.
- Tailwind CSS is configured via `postcss.config.js` and `tailwind.config.js`.
- Remove any temporary CDN or Firebase helpers if they are not part of your final setup.

## Contributors
* Enock Kibet 
* Glenn Wahome
* John King'oo
* Immanuel Okoth
* Emmanuel Torris

## License

This project is private and intended for internal use only.
