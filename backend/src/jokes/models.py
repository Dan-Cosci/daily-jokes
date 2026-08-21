from sqlalchemy import ForeignKey, false, null
from sqlalchemy import String
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import relationship

from src.db import Base

class Jokes(Base):
    __tablename__ = "jokes_table"
    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    setup: Mapped[str] = mapped_column(nullable=False)
    punchline: Mapped[str] = mapped_column(nullable=False)
    explanation: Mapped[str]

