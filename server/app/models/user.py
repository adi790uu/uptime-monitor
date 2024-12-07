from sqlalchemy import UUID, Column, String, Boolean
from app.models.base import Base


class User(Base):
    uuid = Column(UUID(as_uuid=True), unique=True, index=True, nullable=False)
    username = Column(String, unique=True, nullable=False, index=True)
    hashed_password = Column(String, nullable=True)
    is_active = Column(Boolean, default=True)
