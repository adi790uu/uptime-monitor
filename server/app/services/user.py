from sqlalchemy.ext.asyncio import AsyncSession
from pydantic import UUID4
from app.repositories.user import UserRepository
from app.schemas.user_dto import user_model_to_dto


class UserService:
    def __init__(self, db: AsyncSession):
        self.user_repo = UserRepository(db)

    async def get_user_by_username(self, username: str):
        user = await self.user_repo.find_user_by_username(username=username)
        return user_model_to_dto(user_model=user)

    async def get_user_by_user_uuid(self, user_uuid: UUID4):
        user = await self.user_repo.get_user_by_user_uuid(user_uuid=user_uuid)
        return user_model_to_dto(user_model=user)
