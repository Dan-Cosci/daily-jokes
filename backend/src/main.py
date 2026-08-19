from fastapi import FastAPI

import src.core.config
import src.db


from src.jokes import jokesRouter

app = FastAPI()


app.include_router(jokesRouter)
