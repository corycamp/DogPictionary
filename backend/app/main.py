from fastapi import FastAPI
from app.api.routes import dog_bread
from contextlib import asynccontextmanager


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup code can go here
    
    yield
    # Shutdown code can go here

app = FastAPI(lifespan=lifespan)
app.include_router(dog_bread.router)