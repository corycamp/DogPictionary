from pydantic import BaseModel



class User(BaseModel):
    email: str
    username: str
    

class Token(BaseModel):
    access_token: str
    token_type: str