# Anythink Market

This project contains a Node.js server with Express. It provides two routes for managing a task list.

## Project Structure

The project has the following files and directories:

- `node-server/src/index.js`: This file contains the implementation of the Express server with two routes. It handles adding a task to a list and retrieving the list.

- `node-server/package.json`: This file lists the dependencies required for the Express server.

- `python-server/`: This directory contains the original Python server.

- `docker-compose.yml`: This file is used to define and run multi-container Docker applications. It specifies the services to run, their configurations, and any dependencies between them.

## Getting Started

To run the Node.js server, follow these steps:

1.  Navigate to the `node-server` directory:
    ```shell
    cd node-server
    ```
2.  Install the dependencies:
    ```shell
    npm install
    ```
3.  Start the server:
    ```shell
    npm start
    ```
The Express server should now be running. You can access it at port `3000`.

## API Routes

The Express server provides the following API routes:

- `POST /tasks`: Adds a task to the task list. The request body should contain the task details.

- `GET /tasks`: Retrieves the task list.
