from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from slowapi.middleware import SlowAPIMiddleware


from src.core.security import limiter
from src.core import cors

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
print(cors["allowedOrigins"])
app.add_middleware(SlowAPIMiddleware)
app.add_middleware(
    CORSMiddleware,
    allow_origins=cors["allowedOrigins"],
    allow_credentials=True,
    allow_methods=cors["methods"],
    allow_headers=["*"],
)


app.include_router(jokesRouter)
