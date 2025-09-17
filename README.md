# React + Vite + TypeScript Chatbot UI

This project is a modern React application using Vite for fast builds and development, written entirely in TypeScript. It is structured for scalability with clear separation of components, configurations, services, types, and pages.

## Project Structure

- **src/assets/** - Static assets (images, fonts, etc.)
- **src/components/** - Reusable React components (e.g., `Chatbot.tsx`)
- **src/configs/** - Environment configurations (e.g., `envConfigs.ts`)
- **src/functions/** - API and utility functions (e.g., `apiFunctions.ts`)
- **src/pages/** - Page-level components (e.g., `ChatbotPage.tsx`)
- **src/service/** - Business/service logic
- **src/types/** - TypeScript type definitions (e.g., `paramTypes.ts`, `responseTypes.ts`)
- **src/App.tsx** - Root app component
- **src/main.tsx** - Main entry point
- **vite-env.d.ts** - Vite-specific TypeScript declarations

## Prerequisites

- Node.js (v16 or higher)
- npm

## Installation

Clone the repository:

git clone https://github.com/AjithNair-cyber/rag_chatbot_ui.git
cd your-repo-name

Install dependencies:

npm install

## Development

Start the development server with hot module replacement:

npm run dev

The app will be available at [http://localhost:5173].

## Building for Production

Build the optimized production files:

npm run build

Preview the production build locally:

npm run preview

## Deployment

This project is deployed on **Vercel**, leveraging GitHub Actions for continuous integration and continuous deployment (CI/CD). Every push to the main branch triggers an automated workflow that builds and deploys the latest version to Vercel.

### Vercel

- Hosting platform for frontend static and serverless apps
- Automatic deployment from GitHub repository
- Custom domain and HTTPS support
- The app frontend url is https://rag-chatbot-ui.vercel.app/

### GitHub Actions

- Workflow configured to install dependencies, run tests (if any), build the project, and deploy to Vercel
- Ensures smooth, automatic deployment pipeline after each commit

## Environment Variables

Configure environment variables in a `.env` file at the root.
Example:

VITE_API_URL=https://api.yourdomain.com

Variables prefixed with `VITE_` are exposed to the frontend via Vite.

Happy coding and building with React, Vite, and TypeScript!
