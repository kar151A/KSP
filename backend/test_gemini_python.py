import asyncio
import sys
import os

sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from app.services.ai_service import generate_insight_with_context

async def test():
    print("Testing AI insight generation in original backend...")
    try:
        res = await generate_insight_with_context("Show me the top districts by FIR count")
        print("Success! AI Response:", res)
    except Exception as e:
        print("Failed to run AI:", e)

asyncio.run(test())
