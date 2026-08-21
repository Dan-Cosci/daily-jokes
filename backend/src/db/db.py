from sqlalchemy import create_engine
from sqlalchemy.engine import URL

from src.core import db_config

database_url = URL.create(
    drivername="postgresql",
    username=db_config["user"],
    password=db_config["password"],
    host=db_config["hostname"],
    database=db_config["dbName"],
)

engine = create_engine(database_url)
