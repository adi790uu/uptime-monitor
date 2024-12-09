from fastapi import FastAPI
from app.core.config import settings
from .routers.auth import router as auth_router
from .routers.user import router as user_router


app = FastAPI(
    title=settings.APP_NAME,
)


@app.get("/")
def read_root():
    return {"message": "Welcome to the FastAPI server!"}


@app.get("/settings")
def get_settings():
    return {
        "environment": settings.ENVIRONMENT,
        "app_name": settings.APP_NAME,
        "api_prefix": settings.API_PREFIX,
        "host_url": settings.HOST_URL,
    }


app.include_router(auth_router, prefix=settings.API_PREFIX)
app.include_router(user_router, prefix=settings.API_PREFIX)
