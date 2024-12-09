from sqlalchemy.ext.asyncio import AsyncSession
from pydantic import UUID4
from server.app.models.monitor import Monitor
from server.app.repositories.monitor import MonitorRepository


class MonitorService:
    def __init__(self, db: AsyncSession):
        self.monitor_repo = MonitorRepository(db)

    async def create_monitor(self, url: str, user_uuid: UUID4):
        monitor = Monitor(
            url=url,
            user_id=user_uuid,
        )
        monitor = await self.monitor_repo.create_monitor(monitor=monitor)
        return monitor

    async def get_monitors(self, user_uuid: UUID4):
        exists, monitors = await self.monitor_repo.get_monitors_by_user_uuid(
            user_uuid=user_uuid
        )
        return exists, monitors
