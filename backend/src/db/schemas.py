from pydantic import BaseModel
from typing import Generic, TypeVar

T = TypeVar('T')

class responseModel(BaseModel, Generic[T]):
    success: bool
    message: str
    status: int
    data : T | None = None
