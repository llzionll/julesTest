# Babylon.js and Colyseus.js Basic Game Setup

This project is a basic setup for a multiplayer game using Babylon.js for the frontend and Colyseus.js for the backend. Both client and server are set up using Vite.

## Project Structure

- `/client`: Contains the Babylon.js frontend application (JavaScript).
- `/server`: Contains the Colyseus.js backend application (TypeScript).

## Prerequisites

- Node.js (v18.x or higher recommended, v20.x for Colyseus server is ideal)
- npm (or yarn)

## Running the Project

You need to run two separate processes: one for the client and one for the server.

### 1. Run the Server

Navigate to the `server` directory and follow the instructions in `server/README.md`.

### 2. Run the Client

Navigate to the `client` directory and follow the instructions in `client/README.md`.

Once both are running:
- The Colyseus server will be accessible at `ws://localhost:2567`.
- The Babylon.js client will be accessible in your browser, typically at `http://localhost:5173` (Vite's default).

The client will automatically attempt to connect to the server. Check your browser's developer console and the server's terminal output for connection logs.
