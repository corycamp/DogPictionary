from datetime import datetime, timedelta, timezone
from fastapi import Depends, HTTPException
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
import jwt
import os
from pwdlib import PasswordHash
from app.models.user import Token, User

password_hash = PasswordHash.recommended()

security = HTTPBearer()

fake_user = {
    "email": "test@test.com",
    "username": "testuser",
    "password": "$argon2id$v=19$m=65536,t=3,p=4$Ne4nKzda8ZjzkoyyHwWjYQ$ObVqWX8toQYZcZ+KDN02YzjDwvvLXp4aHTO71eFunP8"
}

#returns hashed password
def hash_password(password: str) -> str:
    return password_hash.hash(password)

#verifies password against hashed password
def verify_password(password: str, hashed_password: str) -> bool:
    return password_hash.verify(password, hashed_password)

def create_jwt_token(data: dict) -> Token:
    try:
        default_expiry = datetime.now(timezone.utc) + timedelta(minutes=30)
        secret_key = os.getenv("SECRET_KEY")
        algorithm = os.getenv("ALGORITHM")
        return Token(access_token=jwt.encode({**data, "exp": default_expiry}, secret_key, algorithm=algorithm), token_type="bearer")
    except Exception as e:
        raise ValueError("Failed to create JWT token") from e

#decode jwt token
def verify_jwt_token(credentials: HTTPAuthorizationCredentials = Depends(security)) -> dict:
    try:
        secret_key = os.getenv("SECRET_KEY")
        algorithm = os.getenv("ALGORITHM")
        payload = jwt.decode(credentials.credentials, secret_key, algorithms=[algorithm])
        return payload
    except jwt.ExpiredSignatureError:
        raise ValueError("Token has expired")
    except jwt.InvalidTokenError:
        raise ValueError("Invalid token")
    
#authenticate user
def authenticate_user(userDetails:User) -> Token | None:
    if userDetails.email != fake_user["email"] or not verify_password(userDetails.password, fake_user["password"]):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    return create_jwt_token({"sub": userDetails.email})