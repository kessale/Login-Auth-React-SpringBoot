# Full Stack Login Authentication Application

This repository contains a full stack application developed as a learning project. It demonstrates a simple login authentication system using a React frontend and a Spring Boot backend. The application allows users to register, view, edit, and delete user profiles.

## Project Structure

The project is divided into two main directories:

- `fullstack-backend`: Contains the Spring Boot application with REST API endpoints to manage users.
- `fullstack-front`: Contains the React application that provides the user interface for interacting with the backend.

## Getting Started

Follow these instructions to get the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Java Development Kit (JDK) 11 or later
- Node.js and npm
- Maven
- MySQL

### Backend Setup

Before starting the backend, ensure you have MySQL installed and running on your machine. You will need to create a database named `fullstack`.

1. Navigate to the `fullstack-backend` directory.
2. **Environment Variables:** The application requires certain environment variables to connect to the MySQL database. Create a `.env` file in the root of the `fullstack-backend` directory and add the following lines:
   
   ```env
   DB_USER=yourDatabaseUsername
   DB_PASSWORD=yourDatabasePassword
Replace yourDatabaseUsername and yourDatabasePassword with your actual MySQL credentials.

Application Properties: Open the src/main/resources/application.properties file and ensure the following configurations are set:

properties
Copy code
spring.jpa.hibernate.ddl-auto=update
spring.datasource.url=jdbc:mysql://localhost:3306/fullstack
spring.datasource.username=${DB_USER}
spring.datasource.password=${DB_PASSWORD}
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
These settings configure Hibernate to update the database schema automatically and set up the connection to your MySQL database.

Run mvnw spring-boot:run on Windows or ./mvnw spring-boot:run on Mac/Linux to start the Spring Boot application.

The backend server will start on http://localhost:8080.

### Frontend Setup
Navigate to the fullstack-front directory.
Run npm install to install all required dependencies.
Run npm start to start the React application.
The frontend will be available on http://localhost:3000.

## Using the Application
Navigate to http://localhost:3000 in your web browser to access the application.
Use the "Add User" button to register a new user.
The home page lists all registered users, where you can view, edit, or delete user profiles.
## Built With
Spring Boot - The backend framework used
React - The frontend library used
Maven - Dependency Management for Java
## Author
Alexander Kessel - Initial work
## Acknowledgments
This project was created as part of a coding exercise to learn full stack development.
Thanks to all the open source projects and tutorials that made this possible.
