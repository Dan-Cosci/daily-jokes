
from fastapi import APIRouter, Request

from src.core.security import limiter
from src.core.config import rate

from src.jokes.service import createJoke, getJoke
from src.jokes.schemas import jokeModel

router = APIRouter(prefix="/jokes")

@router.get("/", status_code=200)
@limiter.limit(f"{rate}/minute")
async def joke(request: Request):
    jokes = await getJoke()

    return {
        "success" : True,
        "message" : "Jokes gathered",
        "jokes" : jokes
    }

@router.get("/random")
@limiter.limit(f"{rate}/minute")
async def getRandomJoke(request: Request):
    return ...


@router.post("/",response_model=jokeModel, status_code=201)
@limiter.limit(f"{rate}/minute")
async def postJoke(request: Request, joke: jokeModel):

    await createJoke(joke)

    return joke
