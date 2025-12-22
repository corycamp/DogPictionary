from fastapi import APIRouter, HTTPException, Depends

from app.models.user import User
from app.util.util import authenticate_user


router = APIRouter(prefix="/auth", tags=["auth"])

@router.post("/login")
async def login(user: User)-> dict:
    authenticated_user = authenticate_user(user)
    return {"success": True, "data": authenticated_user} if authenticated_user else HTTPException(status_code=401, detail="Invalid email or password")