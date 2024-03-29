README
Description

This project is a CRUD API for user registration, developed using Node.js, Fastify, Prisma, and MongoDB. It provides endpoints to manage user data stored in a MongoDB database, integrating Fastify for efficient routing and Prisma for ORM operations.
Features

    User CRUD Operations: Supports Create, Read, Update, and Delete operations for managing user resources.
    Fastify Integration: Utilizes Fastify framework for handling HTTP requests and routing efficiently.
    Prisma ORM: Integrates Prisma for object-relational mapping, simplifying database operations and ensuring data integrity.
    MongoDB Integration: Interacts with MongoDB for data storage and retrieval.
    Error Handling: Implements error handling mechanisms to ensure robustness and reliability.
    Dependency Management: Uses npm for package management and dependency installation.

Requirements

    Node.js
    npm (Node Package Manager)
    MongoDB
    Prisma CLI
    Fastify

Installation

    Clone the repository:

    bash

git clone https://github.com/seu-usuario/seu-projeto.git

Navigate to the project directory:

bash

cd seu-projeto

Install dependencies:

    npm install

Configuration

    MongoDB Setup:
        Ensure MongoDB is installed and running on your system.
        Configure MongoDB connection settings in the config.ts file.
    Prisma Setup:
        Install the Prisma CLI globally:

        css

        npm install prisma --save-dev

        Set up Prisma by following the instructions on the Prisma documentation.

Usage

    Start the server:

    sql

    npm start

    The server will start running at http://localhost:3000 by default.

Endpoints

    GET /api/users: Retrieve all users.
    GET /api/users/:id: Retrieve a specific user by ID.
    POST /api/users: Create a new user.
    PUT /api/users/:id: Update an existing user by ID.
    DELETE /api/users/:id: Delete a user by ID.

Contributors

    Luizhnrs
  

License

This project is licensed under the MIT License.
Acknowledgments

    Node.js
    Fastify
    Prisma
    MongoDB

Feel free to contribute to this project by submitting issues or pull requests. Thank you for using our API!
