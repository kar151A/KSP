import pandas as pd
from sqlalchemy import create_engine

df = pd.read_csv(r"C:\Users\nandish\Downloads\FIR_Details_Data.csv\FIR_Details_Data.csv")

engine = create_engine(
    "postgresql://postgres:Nandish2006@database-1.c1w840c0utmf.eu-north-1.rds.amazonaws.com:5432/ksp_crime_db"
)

df.to_sql(
    "fir_details",
    engine,
    if_exists="replace",
    index=False,
    chunksize=5000
)

print("Import completed.")