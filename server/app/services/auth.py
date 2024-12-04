import jwt
from datetime import datetime, timedelta
from app.core.auth import hash_password, verify_password
from app.core.config import settings
from app.repositories.user import UserRepository


class AuthService:
    def __init__(self, db):
        self.user_repo = UserRepository(db)

    async def register(self, username: str, password: str) -> bool:
        hashed_password = hash_password(password)
        existing_user = await self.user_repo.find_user_by_username(
            username=username,
        )
        if existing_user:
            return False
        await self.user_repo.create_user(
            {"username": username, "password": hashed_password}
        )
        return True

    async def login(self, username: str, password: str):
        user = await self.user_repo.find_user_by_username(username)
        if not user or not verify_password(password, user["password"]):
            raise ValueError("Invalid credentials")
        return self._create_token(user["username"])

    def _create_token(self, email: str):
        payload = {"sub": email, "exp": datetime.now() + timedelta(hours=1)}
        return jwt.encode(payload, settings.SECRET_KEY, algorithm="HS256")
