# from typing import Annotated
# from fastapi import APIRouter, Depends
# from app.core.deps import get_db
# from app.core.auth import get_current_user
# from server.app.schemas.user_dto import User
# from server.app.services.user import UserService

# router = APIRouter()


# @router.get("/me")
# async def get_user(
#     db=Depends(get_db),
#     current_user=Annotated[User, Depends(get_current_user)],
# ):
#     user_service = UserService(db)
#     user = user_service.get_user_by_user_uuid(user_uuid=current_user.uuid)
