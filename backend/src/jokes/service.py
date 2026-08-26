from src.db.db import getDb
from src.jokes.schemas import jokeModel

db = getDb()


async def resJoke():
    return ...

async def newJoke(joke : jokeModel):
    ...
