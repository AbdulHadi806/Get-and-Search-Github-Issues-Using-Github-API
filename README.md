# GitHub Issues Viewer

## Overview
GitHub Issues Viewer is a web application that enables users to retrieve and search GitHub issues using the GitHub API. It is built with ReactJS, Tailwind CSS, and TypeScript.

## Technologies Used
- [ReactJS](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [GitHub API](https://api.github.com)

## How to Run the App
To run the application locally, follow these steps:

1. Clone the project repository:
    ```bash
    git clone https://github.com/AbdulHadi806/get-and-search-github-issues-using-github-api.git
    ```

2. Install dependencies with npm:
    ```bash
    npm install
    ```

3. Start the application:
    ```bash
    npm start
    ```
4. Open Browser and search 
    ```bash
    http://localhost:3000
    ```
    
## UI
![GitHub Issues Viewer UI](https://github.com/AbdulHadi806/get-and-search-github-issues-using-github-api/assets/113926529/2e867888-ea44-405e-a3ae-f02877e3b713)

## How the App Works

The GitHub Issues Viewer application is designed to facilitate the retrieval and search of GitHub issues through the GitHub API. Below is an overview of how the application functions:

### Data Fetching from GitHub API

The core functionality of fetching GitHub issues is implemented through the `fetchIssues` function located in the GithubProvider.ts file. Here's a breakdown of its functionality:

- The function takes two parameters: `page`, which represents the page number of the issues to fetch, and `search`, which represents the search query.
- Upon invocation, it sets the loading state to `true` to indicate that data fetching is in progress.
- If the search query has changed (`prevSearch !== search`), it resets the current page and total pages to ensure accurate pagination.
- It then performs a preliminary fetch to determine the total number of issues matching the search query to calculate the total number of pages.
- Subsequently, it fetches the issues for the specified page from the GitHub API.
- Upon successful fetching of data, it updates the application state with the fetched issues, current page, and search query, and sets the loading state to `false`.
- In case of an error during data fetching, it logs the error and sets the error state accordingly, resetting the current page and total pages.

<img width="472" alt="image" src="https://github.com/AbdulHadi806/Get-and-Search-Github-Issues-Using-Github-API/assets/113926529/426261ea-7a71-4028-a922-c1e8314bbfbe">

### Using Data
We are exporting the data from GitHubProvider.tsx and using it in respected Components,

<img width="472" alt="image" src="https://github.com/AbdulHadi806/Get-and-Search-Github-Issues-Using-Github-API/assets/113926529/9667f80d-2a17-4e72-a9d1-b89e73ecc556">

### API Rate Limit Handling
Due to using unauthenticated API there is a rate limit set on our API.

## Package.json
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
