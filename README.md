# GitHub Issues Viewer

## Overview
This application allows users to retrieve and search GitHub issues using the GitHub API. It is built with ReactJS, Tailwind CSS, and TypeScript.

## Technologies Used
- ReactJS
- Tailwind CSS
- TypeScript
- GitHub API

## How to Run the App
1. Clone the project repository.
2. Navigate to the project directory.
3. Install dependencies with `npm install`.
4. Start the application with `npm start`.

## Packages Used

```json
{
  "name": "github_issues",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^27.5.2",
    "@types/node": "^16.18.77",
    "@types/react": "^18.2.48",
    "@types/react-dom": "^18.2.18",
    "date-fns": "^3.3.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-paginate": "^8.2.0",
    "react-scripts": "5.0.1",
    "react-spinners": "^0.13.8",
    "typescript": "^4.9.5",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "tailwindcss": "^3.4.1"
  }
}
