import asyncio
import sys
import os

sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from app.database.connection import get_db_connection, db_manager

async def test():
    print("Testing RDS database connection in original backend...")
    try:
        await db_manager.initialize_pool()
    except Exception as e:
        # Print exception details with ASCII encoding to prevent Windows terminal crash
        clean_msg = str(e).encode('ascii', 'ignore').decode('ascii')
        print("Connection failed with message:", clean_msg)

asyncio.run(test())
