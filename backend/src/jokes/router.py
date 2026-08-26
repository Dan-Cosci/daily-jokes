from fastapi import APIRouter, Request

from src.core.security import limiter
from src.core.config import rate

from src.jokes import newJoke

router = APIRouter(prefix="/jokes")

@router.get("/")
@limiter.limit(f"{rate}/minute")
async def getJoke(request: Request):
    return {
        "text":"this is a test",
        "punchline": "this is the punchline"
    }

@router.get("/random")
@limiter.limit(f"{rate}/minute")
async def getRandomJoke(request: Request):
    return ...


@router.post("/")
@limiter.limit(f"{rate}/minute")
async def postJoke(request: Request):
    
    await newJoke()

    return ...
