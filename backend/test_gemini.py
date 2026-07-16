import os
import sys
sys.path.append(os.path.dirname(os.path.abspath(__file__)))
from app.services.ai.sql_generator import SQLGenerator

sql_gen = SQLGenerator()
schema = 'TABLE "fir_details" ("District_Name" TEXT, "FIR_YEAR" INT);'
try:
    sql = sql_gen.generate_query_string("Show crime trend from 2016 to 2024", schema)
    print("Success! Generated SQL:", sql)
except Exception as e:
    import traceback
    traceback.print_exc()
