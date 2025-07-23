from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from app.routes import router as services_router

app = FastAPI()

app.mount("/static", StaticFiles(directory="path/to/static"), name="static")
app.include_router(services_router)

@app.get("/")
def read_root():
    return {"Hello": "Backend is running"}

# Additional endpoints can be defined here if needed.