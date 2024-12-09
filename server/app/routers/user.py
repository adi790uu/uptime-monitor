from typing import Annotated, Optional
from fastapi import APIRouter, Depends
from pydantic import BaseModel
from app.core.auth import get_current_user
from app.schemas.user_dto import User
from loguru import logger


router = APIRouter()


class Response(BaseModel):
    message: str
    success: bool
    user: Optional[User] = None


@router.get("/me", response_model=Response)
async def get_user(
    current_user: Annotated[User, Depends(get_current_user)],
):
    try:
        return Response(
            message="Got user details successfully!",
            success=True,
            user=current_user,
        )
    except Exception as e:
        logger.error(f"Some error occurred {e}")
