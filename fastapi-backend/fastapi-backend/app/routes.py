from fastapi import APIRouter
from .models import Service  # Assuming Service is a Pydantic model defined in models.py

router = APIRouter()

@router.get("/")
def read_root():
    return {"Hello": "Backend is running"}

@router.get("/services")
def get_services():
    return services  # Assuming services is defined in main.py or imported appropriately

# Additional routes can be added here as needed.