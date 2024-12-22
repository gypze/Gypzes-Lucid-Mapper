
# E-Commerce Back End: ORM Challenge

## Description

This project implements the back end for an e-commerce site, utilizing modern technologies such as Express.js, Sequelize, and PostgreSQL. The application provides a functional API that manages categories, products, and tags within the e-commerce database. Designed for internet retail businesses, this back-end solution demonstrates the power of Object-Relational Mapping (ORM) and the importance of creating efficient and scalable APIs.

## Table of Contents

- [Description](#description)
- [About the Developer](#about-the-developer)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Walkthrough Video](#walkthrough-video)
- [Screenshots](#screenshots)
- [License](#license)



## About the Developer

Hi, I’m Gypze, a dedicated and enthusiastic junior developer currently building a solid foundation in web development technologies. My journey into coding is fueled by a passion for continuous learning and creating impactful projects. I thrive on challenges and enjoy exploring modern frameworks like React and technologies like PostgreSQL. When I'm not coding, you’ll find me gaming, making jewelry, or hanging out with my cats. Let’s connect and build something amazing together!

## Features

- Connects to a PostgreSQL database using Sequelize.
- Allows database schema creation and seeding with test data.
- Provides API routes for managing categories, products, and tags.
- Supports CRUD operations (Create, Read, Update, Delete) via API endpoints.
- Returns formatted JSON data for easy integration.

## Technologies Used

- Node.js
- Express.js
- Sequelize ORM
- PostgreSQL
- dotenv

## Installation

1. Clone this repository:
   ```bash
   git clone <your-repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd ecommerce-backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory with the following content:
   ```env
   DB_NAME=your_database_name
   DB_USER=your_postgresql_username
   DB_PASSWORD=your_postgresql_password
   ```

5. Seed the database with test data:
   ```bash
   npm run seed
   ```

## Usage

1. Start the server:
   ```bash
   npm start
   ```
2. Use Insomnia Core or Postman to test the API routes:
   - **GET** routes for categories, products, and tags
   - **POST** routes to create new data
   - **PUT** routes to update existing data
   - **DELETE** routes to delete data

## Walkthrough Video

[![Walkthrough Video](#)](#)

This video demonstrates the functionality of the application, including:

- Connecting to the database
- Running schema and seed commands
- Testing API routes using Insomnia Core 



[https://youtu.be/KZwEG2n59cE](https://youtu.be/2ZdT0bZ7GYc)](https://youtu.be/2ZdT0bZ7GYc)

## Screenshots

![Screenshot 2024-12-22 135501](https://github.com/user-attachments/assets/4dccf3f5-e2df-4054-b1ed-3dd6bf518ad0)



## License

This project is licensed under the MIT License. See the LICENSE file for details.




