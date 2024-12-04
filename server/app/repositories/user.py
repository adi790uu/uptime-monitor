from motor.motor_asyncio import AsyncIOMotorDatabase


class UserRepository:
    def __init__(self, db: AsyncIOMotorDatabase) -> None:
        self.collection = db["users"]

    async def find_user_by_username(self, username: str):
        return await self.collection.find_one({"username": username})

    async def create_user(self, user_info):
        await self.collection.insert_one(user_info)
