from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from app.models.user import User


class UserRepository:
    def __init__(self, db: AsyncSession) -> None:
        self.db = db

    async def find_user_by_username(self, username: str):
        stmt = select(User).where(User.username == username)
        result = await self.db.execute(stmt)
        user = result.scalars().first()
        if not user:
            return False, None
        return True, user

    async def create_user(self, user_info: User):
        self.db.add(user_info)
        await self.db.commit()
        await self.db.refresh(user_info)
        return user_info
