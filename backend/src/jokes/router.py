from fastapi import APIRouter

router = APIRouter(prefix="/jokes")


@router.get("/")
async def getJoke():
    return {
        "text":"this is a test",
        "punchline": "this is the punchline"
    }