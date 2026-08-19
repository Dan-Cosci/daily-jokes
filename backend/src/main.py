from fastapi import FastAPI

from src.jokes import jokesRouter

app = FastAPI()

app.include_router(jokesRouter)

@app.get("/hello")
async def hello():
    return "<h1>Hello, World!</h1>"


@app.get("/")
async def root():
    return {"message" : "Hello world"}