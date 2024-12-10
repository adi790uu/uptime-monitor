from sqlalchemy.ext.asyncio import AsyncSession
from app.models.monitor import Monitor
from pydantic import UUID4
from sqlalchemy import select


class MonitorRepository:
    def __init__(self, db: AsyncSession):
        self.db = db

    async def create_monitor(self, monitor: Monitor):
        self.db.add(monitor)
        await self.db.commit(monitor)
        await self.db.refresh(monitor)
        return monitor

    async def get_monitors_by_user_uuid(self, user_uuid: UUID4):
        stmt = select(Monitor).where(Monitor.user_id == user_uuid)
        result = await self.db.execute(stmt)
        monitors = result.scalars().all()
        if not monitors:
            return False, None
        return True, monitors
