from passlib.context import CryptContext
from typing import Annotated
from app.schemas.user_dto import user_model_to_dto
import jwt
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jwt.exceptions import InvalidTokenError
from loguru import logger
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.deps import get_db
from app.core.config import settings
from app.services.user import UserService


pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


def hash_password(password: str) -> str:
    return pwd_context.hash(password)


def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)


async def get_current_user(
    token: Annotated[str, Depends(oauth2_scheme)],
    db: AsyncSession = Depends(get_db),
):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        user_service = UserService(db)
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms="HS256")
        user_uuid: str = payload.get("sub")
        user_model = await user_service.get_user_by_user_uuid(
            user_uuid=user_uuid,
        )
        if not user_model:
            raise credentials_exception
        user = user_model_to_dto(user_model=user_model)
    except InvalidTokenError:
        pass
    except Exception as ex:
        logger.error(f"Error authenticating user. Error: {ex}")
        raise credentials_exception
    return user
