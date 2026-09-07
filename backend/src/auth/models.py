from sqlalchemy.orm import mapped_column
from sqlalchemy.orm.base import Mapped
from sqlalchemy.orm.mapper import validates
from email_validator import EmailNotValidError, validate_email

from src.db import Base

class Users(Base):
    __tablename__ = "user_table"
    id: Mapped[int] = mapped_column(
        primary_key=True, index=True,
    )
    username: Mapped[str]
    email: Mapped[str]
    hashedPassword: Mapped[str]


    @validates("email")
    def validate_email(self, key, address):
        try:
            return validate_email(address, check_deliverability=False).email
        except EmailNotValidError as e:
            raise ValueError(str(e))
