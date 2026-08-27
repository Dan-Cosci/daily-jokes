
from sqlalchemy import select

from src.db.db import getDb
from src.jokes.models import Jokes
from src.jokes.schemas import jokeModel



async def getJoke() :
    db = getDb()

    try:
        return db.execute(select(Jokes)).scalars().all()
    except Exception as e:
        print(e)
    finally:
        db.close()

async def createJoke(joke : jokeModel) -> bool:
    db = getDb()

    try:
        pass
        db.add(joke)
        db.commit()
    except Exception as e:
        print(e)
        db.rollback()
    finally:
        db.close()


    return True
