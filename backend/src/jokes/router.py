from fastapi import APIRouter
from fastapi.param_functions import Depends

from src.core.security import Limiter

router = APIRouter(prefix="/jokes")


@router.get("/")
async def getJoke():
    return {
        "text":"this is a test",
        "punchline": "this is the punchline"
    }