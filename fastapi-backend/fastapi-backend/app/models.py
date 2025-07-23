from pydantic import BaseModel
from typing import List, Optional

class Service(BaseModel):
    id: int
    name: str
    title: str
    category: str
    price: float
    rating: float
    reviews: int
    location: str
    service: str
    image: str
    gallery: List[str]
    featured: Optional[bool] = False
    dateAdded: str
    description: str
    portfolio: int
    experience: str
    features: List[str]
    packages: List[dict]