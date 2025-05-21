# Colyseus.js Server

This directory contains the backend application built with Colyseus.js, TypeScript, and Vite for the build process (though Vite is not used for running the server in development, `ts-node` is).

## Setup

1.  Navigate to the `server` directory:
    ```bash
    cd server
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```

## Running the Server

To start the development server:
```bash
npm run dev
```
This will start the Colyseus server, typically listening on `ws://localhost:2567`.

The server has a basic room named `my_room` defined in `src/MyRoom.ts`.
It also has a health check endpoint at `http://localhost:2567/health`.
