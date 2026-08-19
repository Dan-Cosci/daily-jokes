from dotenv import load_dotenv
import os

load_dotenv(".env.local")

db = {
    "user":str(os.getenv("NEON_USER")),
    "password":str(os.getenv("NEON_PASSWORD")),
    "hostname":str(os.getenv("NEON_HOSTNAME")),
    "dbName":str(os.getenv("NEON_DB_NAME")),
}