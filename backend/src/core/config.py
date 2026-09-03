from dotenv import load_dotenv
import os

load_dotenv(".env.local")

db = {
    "user":str(os.getenv("NEON_USER")),
    "password":str(os.getenv("NEON_PASSWORD")),
    "hostname":str(os.getenv("NEON_HOSTNAME")),
    "dbName":str(os.getenv("NEON_DB_NAME")),
}

rate = os.getenv("RATE_LIMIT")

cors = {
    "allowedOrigins": str(os.getenv("CORS_ALLOWED_ORIGINS")),
    "methods": str(os.getenv("CORS_METHODS")).split(","),
}
