from fastapi import APIRouter, Request


from src.core.security import limiter

router = APIRouter(prefix="/jokes")


@router.get("/")
@limiter.limit("5/minute")
async def getJoke(request: Request):
    return {
        "text":"this is a test",
        "punchline": "this is the punchline"
    }