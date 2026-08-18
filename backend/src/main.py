from fastapi import FastAPI

from dotenv import load_dotenv
import os

load_dotenv(dotenv_path=".local.env")

print(os.getenv("test"))
app = FastAPI()

@app.get("/hello")
async def hello():
    return "<h1>Hello, World!</h1>"


@app.get("/")
async def root():
    return {"message" : "Hello world"}