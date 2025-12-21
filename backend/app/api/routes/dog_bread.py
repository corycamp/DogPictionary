from fastapi import APIRouter, Depends
from app.services.dog_bread import DogBreedService
import json


router = APIRouter(prefix="/api/v1", tags=["breeds"])

#Return a list of dog breeds, with api success and failure handling
@router.get("/dog_breeds")
async def get_dog_breeds(service: DogBreedService = Depends(DogBreedService)) -> dict:
    try:
        breeds = await service.get_dog_breeds()
        return {"success": True, "data": breeds}
    except Exception as e:
        return {"success": False, "data": [] , "message": str(e)}
        