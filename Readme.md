# HOBBIES TRACKER

This API allows you to add users and its hobbies


## Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    ```

2. Install dependencies:
    ```bash
    cd <folder-name>
    npm install
    ```
3. Add .env file:

    Key example is in env.example file. Please add key and value accordingly

## Usage

To start the server, you have two options:

1. Development Mode:
    ```bash
    npm run dev
    ```

2. Production Mode:
    ```bash
    npm run build
    npm start
    ```

   The development mode will start the server using `ts-node-dev`, which enables hot-reloading for a better development experience. The production mode builds the TypeScript code into JavaScript and then starts the server using the compiled JavaScript files.

   The server will start running on `http://localhost:3000`.

## API Documentation

The API is documented using Swagger UI. You can access the API documentation by navigating to `http://localhost:3000/api-docs` in your browser.