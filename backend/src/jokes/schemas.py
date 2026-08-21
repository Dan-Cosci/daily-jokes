from pydantic import BaseModel

class jokeModel(BaseModel):
    setup: str
    punchline: str
    explanation: str

class jokeResModel(jokeModel):
    id: int