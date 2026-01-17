# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# GitHub Organization Dashboard

A simple React application that allows users to search for GitHub organizations and view their repositories using the GitHub public API.

## Features

- Search GitHub organizations by name
- Fetch repositories using GitHub REST API
- Input debouncing using a custom hook
- Loading, error, and empty states handled gracefully
- Clean dark-themed UI
- Pagination-friendly API usage (`per_page=10`)

## Tech Stack

- React (Vite)
- JavaScript (ES6+)
- GitHub REST API

## Project Structure

src/
├── api/ # GitHub API helper functions
├── components/ # Reusable UI components
├── hooks/ # Custom hooks (useDebounce)
├── App.jsx
└── main.jsx


## Input Debouncing

A custom `useDebounce` hook is implemented to delay search execution while typing.  
This helps reduce unnecessary API calls and improves performance.

## Error Handling

The app handles:
- Invalid organization names (404)
- Empty repository lists
- Network or fetch errors

## How to Run Locally

```bash
npm install
npm run dev

then open 
http://localhost:5173

in SearhBar search- "google", "facebook","github"