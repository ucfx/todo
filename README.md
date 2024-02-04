<h1 align="center">Todo App</h1>

This is a simple Todo app that allows you to keep track of your tasks. :pencil:

## :rocket: Features

- Add new tasks :heavy_plus_sign:
- Mark tasks as completed :white_check_mark:
- Delete tasks :x:
- View all tasks :eyes:

## :book: Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ucfx/todo.git
   ```

2. Navigate to the project directory:

   ```bash
   cd todo
   ```

3. Install the dependencies for both client and server folders:

   ```bash
   cd client && npm i && cd ../server && npm i && cd ..
   ```

4. Create a `.env` file in the `server` directory and add your environment variables. You can use the `.env.example` file as a template:

   ```bash
   cp server/.env.example server/.env
   ```

   Modify the `.env` file with your environment-specific variables.

5. Start the client:

   ```bash
   cd client && npm start
   ```

6. Open another terminal, navigate to the project directory, and start the server:

   ```bash
   cd server && npm start
   ```

7. Open your browser and visit [http://localhost:5173](http://localhost:5173).

8. Start managing your tasks! :wink:

## :handshake: Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## :page_with_curl: License

This project is licensed under the [MIT License](LICENSE).
