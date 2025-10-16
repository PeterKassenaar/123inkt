# Usage

This document explains how to run the Angular application with the WebSocket server.

## 1. Start the WebSocket Server

Open a terminal and navigate to the `server` directory:

```bash
cd server
```

Install the dependencies:

```bash
npm install
```

Start the server:

```bash
node server.js
```

The server will now be running and listening on ports 3005 (chat) and 3006 (random numbers).

## 2. Start the Angular Application

Open another terminal and navigate to the root of the project.

Install the dependencies:

```bash
npm install
```

Start the Angular development server:

```bash
npm start
```

Open your browser and navigate to `http://localhost:4200`.

## 3. Using the Application

-   **Chat:** Type a message in the input field and click "Send" or press Enter. The message will be sent to all connected clients.
-   **Random Numbers:** The random number display will update every second with a new number from the server.
