from fastapi import FastAPI

from slowapi import _rate_limit_exceeded_handler
from slowapi.errors import RateLimitExceeded
from slowapi.middleware import SlowAPIMiddleware
from src.core.security import limiter

# models
from src.jokes import model


from src.db import Base, engine

Base.metadata.create_all(bind=engine)

# routers
from src.jokes import jokesRouter

app = FastAPI()
app.state.limiter = limiter

# error handlers
# app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)


# middlewares
app.add_middleware(SlowAPIMiddleware)


app.include_router(jokesRouter)
