
from sqlalchemy import select

from src.db.db import getDb
from src.jokes.models import Jokes
from src.jokes.schemas import jokeModel, jokeResModel



async def getJoke() :
    db = getDb()

    try:
        data = db.execute(select(Jokes)).scalars().all()
        return [jokeResModel.model_validate(r, from_attributes=True) for r in data]
    except Exception as e:
        print(e)
    finally:
        db.close()

async def createJoke(joke : jokeModel) -> bool:
    db = getDb()

    try:
        new_joke = Jokes(
            setup=joke.setup,
            punchline=joke.punchline,
            explanation=joke.explanation
        )

        db.add(new_joke)
        db.commit()
    except Exception as e:
        print(e)
        db.rollback()
        return False
    finally:
        db.close()


    return True
