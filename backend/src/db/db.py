from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase, sessionmaker
from sqlalchemy.engine import URL

from src.core import db_config

database_url = URL.create(
    drivername="postgresql",
    username=db_config["user"],
    password=db_config["password"],
    host=db_config["hostname"],
    database=db_config["dbName"],
)

# engine = create_engine(database_url)

# testdb
engine = create_engine("sqlite:///./test.db", echo=True)

localSession = sessionmaker(bind=engine, autoflush=False, autocommit=False)

class Base(DeclarativeBase):
    pass

def getDb():
    db = localSession()
    try:
        yield db
    finally:
        db.close()
