import jwt
from datetime import datetime, timedelta
from app.core.auth import hash_password, verify_password
from app.core.config import settings
from app.repositories.user import UserRepository
from app.models.user import User as UserModel
import uuid
from pydantic import UUID4


class AuthService:
    def __init__(self, db):
        self.user_repo = UserRepository(db)

    async def register(self, username: str, password: str) -> bool:
        hashed_password = hash_password(password)
        user = await self.user_repo.find_user_by_username(
            username=username,
        )
        if user:
            return False

        user = UserModel(
            uuid=uuid.uuid4(),
            username=username,
            hashed_password=hashed_password,
        )
        await self.user_repo.create_user(user_info=user)
        return True

    async def login(self, username: str, password: str):
        user = await self.user_repo.find_user_by_username(username)
        if not user or not verify_password(password, user.hashed_password):
            raise ValueError("Invalid credentials")
        return self._create_token(user.uuid)

    def _create_token(self, uuid: UUID4):
        payload = {"sub": uuid.hex, "exp": datetime.now() + timedelta(hours=1)}
        return jwt.encode(payload, settings.SECRET_KEY, algorithm="HS256")
