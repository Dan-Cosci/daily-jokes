
from fastapi import APIRouter, Request

from src.core.security import limiter
from src.core.config import rate

from src.db.db import getDb
from src.db.schemas import responseModel
from src.jokes.service import createJoke, getJoke, getRandomJoke
from src.jokes.schemas import jokeModel

router = APIRouter(prefix="/jokes")

@router.get("/", response_model=responseModel, status_code=200)
@limiter.limit(f"{rate}/minute")
async def joke(request: Request):
    jokes = await getJoke()

    return responseModel(
        success=True,
        message="Jokes Gathered",
        status=200,
        data=jokes
    )

@router.get("/random", response_model=responseModel, status_code=200)
@limiter.limit(f"{rate}/minute")
async def getRandom(request: Request):

    joke = await getRandomJoke()

    return responseModel(
        success=True,
        message="Jokes Gathered",
        status=200,
        data=joke
    )




@router.post("/",response_model=responseModel, status_code=201)
@limiter.limit(f"{rate}/minute")
async def postJoke(request: Request, joke: jokeModel):

    if await createJoke(joke):

        return responseModel(
            success=True,
            status=201,
            message="Jokes Created successfully",
            data=joke
        )

    else:
        return responseModel(
            success=False,
            status=400,
            message="Failed to create joke"
        )
