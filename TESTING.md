# Movie Management API

This project is a simple API to manage movies. The API allows you to add, update, delete, and retrieve movies.

## Endpoints

- **POST /movies**: Add a new movie.
- **GET /movies**: Get a list of all movies.
- **GET /movies/:id**: Get a movie by ID.
- **PATCH /movies/:id**: Update a movie by ID.
- **DELETE /movies/:id**: Delete a movie by ID.

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/ASCsk/NestjsApp.git
    cd NestjsApp
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the server in development mode:
    ```bash
    npm run start:dev
    ```

The server will run on `http://localhost:3000`.

## Example Usage

### 1. Add Movies (POST /movies)

To add a movie, send a `POST` request with the following payload:

#### Request:
```bash
curl -X POST http://localhost:3000/movies \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Inception",
    "synopsis": "A skilled thief is given a chance to have his criminal history erased if he can successfully perform an inception.",
    "releaseYear": 2010,
    "rating": 8.8
  }'
```
```bash
curl -X POST http://localhost:3000/movies \
  -H "Content-Type: application/json" \
  -d '{
    "title": "The Dark Knight",
    "synopsis": "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
    "releaseYear": 2008,
    "rating": 9.0
  }'
```
You can add multiple movies by repeating the POST request with different movie details.

### 2. Get All Movies (GET /movies)
#### Request:
```bash
curl -X GET http://localhost:3000/movies
```
#### Response:
```json
[
  {
    "id": 1,
    "title": "Inception",
    "synopsis": "A skilled thief is given a chance to have his criminal history erased if he can successfully perform an inception.",
    "releaseYear": 2010,
    "rating": 8.8
  },
  {
    "id": 2,
    "title": "The Dark Knight",
    "synopsis": "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
    "releaseYear": 2008,
    "rating": 9.0
  }
]
```

### 3. Get a Movie by ID (GET /movies/:id)
#### Request:
```bash
curl -X GET http://localhost:3000/movies/1
```
#### Response:
```json
{
  "id": 1,
  "title": "Inception",
  "synopsis": "A skilled thief is given a chance to have his criminal history erased if he can successfully perform an inception.",
  "releaseYear": 2010,
  "rating": 8.8
}
```

### 4. Update a Movie (PATCH /movies/:id)
#### Request:
```bash
curl -X PATCH http://localhost:3000/movies/1 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Inception (Updated)",
    "rating": 9.0
  }'
```
#### Response:
```json
{
  "id": 1,
  "title": "Inception",
  "synopsis": "A skilled thief is given a chance to have his criminal history erased if he can successfully perform an inception.",
  "releaseYear": 2010,
  "rating": 8.8
}
```

### 5. Delete a Movie (DELETE /movies/:id)
#### Request:
```bash
curl -X DELETE http://localhost:3000/movies/1
```
#### Response:
```json
{
  "message": "Movie deleted successfully"
}
```