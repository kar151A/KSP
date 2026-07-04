def authenticate_user(email: str, password: str) -> bool:
    return bool(email and password)
