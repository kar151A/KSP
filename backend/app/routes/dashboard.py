from fastapi import APIRouter

router = APIRouter()

@router.get("/metrics")
async def get_dashboard_metrics():
    return {
        "stats": {
            "totalCrimes": 14230,
            "openCases": 842,
            "closedCases": 13388,
            "activeCriminals": 312,
            "policeStations": 45,
            "districtsCovered": 31
        },
        "recentActivities": [
            {"id": "1", "time": "10 mins ago", "type": "System", "text": "AI generated risk profile for case #KA-2026-09"},
            {"id": "2", "time": "1 hour ago", "type": "Alert", "text": "High theft probability predicted in Whitefield Sector 3"},
            {"id": "3", "time": "3 hours ago", "type": "Case", "text": "Inspector Patil closed Cyber Fraud Case #CY-882"}
        ],
        "aiInsights": [
            {"id": "i1", "severity": "High", "text": "M.O. match detected between recent Mysuru robbery and 2024 Hubli case."},
            {"id": "i2", "severity": "Medium", "text": "30% surge in night-time property thefts predicted near outer ring road."}
        ]
    }