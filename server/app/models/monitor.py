from sqlalchemy import Column, String, Integer, UUID, ForeignKey
from app.models.base import Base
from sqlalchemy.orm import relationship


class Monitor(Base):
    name = Column(String, nullable=True, index=True, unique=True)
    url = Column(String, nullable=False, index=True)
    check_frequency = Column(Integer, default=300)
    max_timeout = Column(Integer, default=10)
    notification_delay = Column(Integer, nullable=True)
    user_id = Column(UUID, ForeignKey("users.uuid"), nullable=False)
    user = relationship("User", lazy="selectin", backref="monitor")
