# Grint

A practice web client built to test and demonstrate integration with AuthForge, a custom authentication API.

##  Current Features

- Basic user signup form
- Username, email, and password collection
- AuthForge API integration
- API key authentication
- Environment variable configuration
- Vite-based development setup
- Test connection with AuthForge

##  Technologies

- HTML
- CSS
- JavaScript
- Vite
- AuthForge API

##  Project Purpose

Grint is a practice project created to test the integration between an external web application and AuthForge.

The current implementation focuses on configuring an AuthForge API key through environment variables and sending signup data to the AuthForge server.

##  Status

 Work in Progress

More features and deeper AuthForge integration will be added as development continues.

## Local Setup

Clone the repository and install the dependencies:

npm install

Create a `.env` file in the project root:

VITE_AUTHFORGE_API_KEY=your_api_key_here

Start the development server:

npx vite

Then open the local Vite URL in your browser.

## Security

The `.env` file is excluded from Git using `.gitignore`.

Never commit API keys, passwords, or other sensitive information to the repository.
