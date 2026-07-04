import os

class Settings:
    PROJECT_NAME: str = "KSP Crime Intelligence Assistant"
    API_V1_STR: str = "/api/v1"
    
    # FUTURE INTEGRATION: Replace these placeholders with actual environment variables
    # POSTGRES_URI = os.getenv("DATABASE_URL", "postgresql://user:pass@localhost:5432/ksp")
    # GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "mock-key")
    # JWT_SECRET = os.getenv("JWT_SECRET", "super-secret-key")

settings = Settings()