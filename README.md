
# MovieBee Server-Side API

## Objective

This project aims to build the server-side component of a “movies” web application. This web application will allow users to access information about movies, directors, and genres. Users can also sign up, update their personal information, and manage a list of their favorite movies.

---

## Context

This project is part of a full-stack JavaScript development initiative. It focuses on creating a REST API using **Node.js** and **Express**, connected to a **MongoDB** database, to serve as the backend for the "MovieBee" web application.  

A client-side application will be developed using **React** to interact with this API. The project will demonstrate proficiency in the MERN (MongoDB, Express, React, Node.js) stack, covering APIs, web server frameworks, databases, authentication, data security, and more.  

By the end of this project, you will have a complete server-side API ready for deployment and integration into a portfolio.

---

## User Stories

- As a user, I want to receive information about movies, directors, and genres so that I can learn more about movies I’ve watched or am interested in.
- As a user, I want to create a profile so I can save data about my favorite movies.

---

## Features and Requirements

### Essential Features
1. **Movies**
   - Return a list of all movies.
   - Return details (description, genre, director, image URL, and featured status) about a specific movie by title.

2. **Genres**
   - Return information (e.g., description) about a specific genre by name.

3. **Directors**
   - Return information (e.g., bio, birth year, death year) about a director by name.

4. **User Management**
   - Allow new users to register.
   - Allow users to update their information (username, password, email, date of birth).
   - Allow users to deregister.

5. **Favorites Management**
   - Allow users to add movies to their list of favorites.
   - Allow users to remove movies from their list of favorites.

### Optional Features
- Allow users to view information about actors and the movies they star in.
- Include additional details about movies, such as release dates and ratings.
- Enable users to create a "To Watch" list in addition to their "Favorite Movies" list.

---

## Technical Requirements

- **Architecture**: The API must follow RESTful design principles.
- **Backend Framework**: The server must be built using **Node.js** and **Express**.
- **Database**: Use **MongoDB** to store data, modeled using **Mongoose**.
- **Middleware**: Incorporate at least three middleware modules, such as:
  - `body-parser` for handling incoming request data.
  - `morgan` for request logging.
- **API Responses**: Data must be provided in JSON format.
- **Authentication**: Implement user authentication and authorization.
- **Validation**: Include data validation logic to ensure reliable operations.
- **Error Handling**: The JavaScript code must be error-free.
- **Testing**: Test the API endpoints using **Postman**.
- **Security**: Ensure compliance with data security regulations.
- **Deployment**:
  - Source code must be hosted on GitHub.
  - The API must be deployed to **Heroku**.

---

## Getting Started

### Prerequisites
- **Node.js** and **npm** installed on your machine.
- **MongoDB** installed locally or a cloud-based MongoDB instance.
- **Postman** or a similar tool for testing API endpoints.

### Installation
1. Clone the repository:  
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:  
   ```bash
   npm install
   ```

3. Start the server:  
   ```bash
   npm start
   ```

4. Test the endpoints using Postman or similar tools.

---

## Endpoints Overview

| HTTP Method | Endpoint                   | Description                                     |
|-------------|----------------------------|------------------------------------------------|
| `GET`       | `/allMovies`                  | Get a list of all movies.                      |
| `GET`       | `/allMovies/:movieTitle`           | Get details about a specific movie by title.   |
| `GET`       | `/allMovies/:genreName`            | Get information about a specific genre.        |
| `GET`       | `/allMovies/:directorName`         | Get information about a specific director.     |
| `POST`      | `/users`                   | Register a new user.                           |
| `PUT`       | `/users/:username`         | Update user information.                       |
| `DELETE`    | `/users/:username`         | Deregister an existing user.                   |
| `POST`      | `/users/:username/favorites/` | Add a movie to a user's favorites.    |
| `DELETE`    | `/users/:username/favorites/` | Remove a movie from a user's favorites. |


---

## Deployment
- The API will be deployed to **Heroku**. Follow [this guide](https://devcenter.heroku.com/articles/deploying-nodejs) for deployment steps.

---

## License
This project is licensed under the [MIT License](LICENSE).

---
