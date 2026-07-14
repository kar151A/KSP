import asyncio
import sys
import os

# Add parent directory to path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from app.database.connection import query_db, is_rds_available

async def test():
    print("Testing RDS database connection in user profile backend...")
    avail = await is_rds_available()
    print("Is RDS pool initialized?", avail)
    try:
        res = await query_db("SELECT count(*) as count FROM fir_details")
        print("Result:", res)
    except Exception as e:
        print("Query failed:", e)

asyncio.run(test())
