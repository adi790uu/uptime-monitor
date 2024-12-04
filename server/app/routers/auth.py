from fastapi import APIRouter, Depends
from pydantic import BaseModel
from app.db.dependencies import get_database
from app.services.auth import AuthService

router = APIRouter()


class RegisterRequest(BaseModel):
    username: str
    password: str


class LoginRequest(BaseModel):
    username: str
    password: str


class RegisterResponse(BaseModel):
    message: str
    success: bool


class LoginResponse(BaseModel):
    message: str
    success: bool
    access_token: str


@router.get("/users")
async def get_users(db=Depends(get_database)):
    users = await db.users.find().to_list(100)
    return users


@router.post("/register", response_model=RegisterResponse)
async def register(
    request: RegisterRequest,
    db=Depends(get_database),
):
    auth_service = AuthService(db)
    result = await auth_service.register(
        username=request.username,
        password=request.password,
    )

    if result:
        return RegisterResponse(
            message="User registered successfully!",
            success=True,
        )
    return RegisterResponse(
        message="User already exists!",
        success=False,
    )


@router.post("/login", response_model=LoginResponse)
async def login(
    request: LoginRequest,
    db=Depends(get_database),
):
    auth_service = AuthService(db)
    access_token = await auth_service.login(
        username=request.username, password=request.password
    )
    return LoginResponse(
        message="Logged in successfully!",
        success=True,
        access_token=access_token,
    )
