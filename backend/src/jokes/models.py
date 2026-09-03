from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column

from src.db import Base

class Jokes(Base):
    __tablename__ = "jokes_table"
    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    setup: Mapped[str] = mapped_column(nullable=False)
    punchline: Mapped[str] = mapped_column(nullable=False)
    explanation: Mapped[str]
