from sqlalchemy import Column, String, Integer
from app.models.base import Base


class Monitor(Base):
    name = Column(String, nullable=False, index=True, unique=True)
    url = Column(String, nullable=False, index=True)
    check_frequency = Column(Integer, default=300)
    max_timeout = Column(Integer, default=10)
    notification_delay = Column(Integer, nullable=True)
