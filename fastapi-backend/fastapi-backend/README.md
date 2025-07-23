# FastAPI Backend Project

This project is a backend application built using FastAPI. It serves as an API for managing services, specifically focusing on food photography.

## Project Structure

```
fastapi-backend
├── app
│   ├── main.py          # Entry point of the FastAPI application
│   ├── models.py        # Data models for the application
│   ├── routes.py        # API route definitions
│   └── __init__.py      # Package initialization
├── requirements.txt      # Project dependencies
├── README.md             # Project documentation
└── .gitignore            # Git ignore file
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd fastapi-backend
   ```

2. **Create a virtual environment:**
   ```
   python -m venv venv
   ```

3. **Activate the virtual environment:**
   - On Windows:
     ```
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```
     source venv/bin/activate
     ```

4. **Install the required dependencies:**
   ```
   pip install -r requirements.txt
   ```

## Usage

To run the FastAPI application, execute the following command:

```
uvicorn app.main:app --reload
```

This will start the server at `http://127.0.0.1:8000`. You can access the API documentation at `http://127.0.0.1:8000/docs`.

## Endpoints

- **GET /**: Returns a simple greeting message.
- **GET /services**: Retrieves a list of available services.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.