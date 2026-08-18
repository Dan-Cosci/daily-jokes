
# Joke API

A REST API built with FastAPI that provides jokes through HTTP endpoints.

This project is primarily a learning and proof-of-concept project for building scalable web backends with Python and FastAPI.

## Tech Stack

- Python
- FastAPI
- Uvicorn
- Pydantic
- SQLAlchemy
- PostgreSQL
- Neon PostgreSQL

## Project Structure

```text
joke-api/
├── src/
│   └── app/
│       ├── core/
│       ├── db/
│       ├── jokes/
│       ├── users/
│       ├── auth/
│       └── main.py
│
├── tests/
│
├── .env
├── .gitignore
├── requirements.txt
└── README.md
````

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd joke-api
```

### 2. Create a virtual environment

```bash
python -m venv .venv
```

Activate it:

#### Linux / macOS

```bash
source .venv/bin/activate
```

#### Windows

```bash
.venv\Scripts\activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Configure environment variables

Create a `.env` file in the project root.

```env
DATABASE_URL=your_neon_database_url
```

### 5. Run the development server

```bash
uvicorn src.app.main:app --reload
```

The API will be available at:

```text
http://127.0.0.1:8000
```

## API Documentation

FastAPI automatically provides interactive API documentation.

Swagger UI:

```text
http://127.0.0.1:8000/docs
```

ReDoc:

```text
http://127.0.0.1:8000/redoc
```

## API

The API will provide endpoints for managing and retrieving jokes.

Planned endpoints:

```text
GET    /api/v1/jokes
GET    /api/v1/jokes/{joke_id}
GET    /api/v1/jokes/random
POST   /api/v1/jokes
DELETE /api/v1/jokes/{joke_id}
```

## Development Goals

This project is being developed to learn and practice:

* REST API design
* FastAPI
* Pydantic validation
* SQLAlchemy
* PostgreSQL
* Database design
* Dependency injection
* API versioning
* Automated testing
* Authentication
* API security
* Production deployment

## Clients

The API is designed to be consumed by multiple clients.

Planned clients include:

* Web application built with React
* Mobile proof-of-concept built with React Native

The clients communicate with the FastAPI backend through HTTP requests.

