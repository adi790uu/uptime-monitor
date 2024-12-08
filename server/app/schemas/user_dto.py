from pydantic import BaseModel, UUID4
from app.models.user import User as UserModel


class User(BaseModel):
    uuid: UUID4
    username: str
    hashed_password: str
    is_active: bool


def user_model_to_dto(user_model: UserModel) -> User:
    return User(
        uuid=user_model["uuid"],
        username=user_model["username"],
        hashed_password=user_model["hashed_password"],
        is_active=user_model["is_active"],
    )
