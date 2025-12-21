from datetime import datetime, timedelta, timezone
import jwt
import os
from pwdlib import PasswordHash
from app.models.user import Token

password_hash = PasswordHash.recommended()


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
