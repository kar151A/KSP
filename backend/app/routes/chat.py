from fastapi import APIRouter, HTTPException
from app.schemas.chat import ChatMessage
import uuid
from datetime import datetime

router = APIRouter()

@router.post("/query", response_model=ChatMessage)
async def process_chat_query(message: ChatMessage):
    # FUTURE INTEGRATION: Inject Gemini API analysis and RAG vector searches here.
    text = message.text.lower()
    timestamp = datetime.now().strftime("%I:%M %p")
    
    response_msg = {
        "id": str(uuid.uuid4()),
        "role": "ai",
        "timestamp": timestamp,
        "text": "Processing request across Karnataka Crime Database...",
        "cardType": "text",
        "cardData": {}
    }

    if "robbery" in text and "bengaluru" in text:
        response_msg.update({
            "text": "Here is the layout and statistical synthesis of robbery cases across Bengaluru for the trailing 30 days.",
            "cardType": "table",
            "cardData": {
                "headers": ["Case ID", "Location", "Date", "Status", "Stolen Value"],
                "rows": [
                    ["KA-BLR-01", "Indiranagar", "2026-06-12", "Open", "₹4,50,000"],
                    ["KA-BLR-04", "Jayanagar", "2026-06-18", "Under Investigation", "₹12,00,000"],
                    ["KA-BLR-09", "Whitefield", "2026-06-28", "Arrest Made", "₹1,20,000"]
                ],
                "riskLevel": "High"
            }
        })
    elif "hotspot" in text:
        response_msg.update({
            "text": "Geospatial coordinate cluster computation pinpointed high intensity coordinates around Whitefield.",
            "cardType": "heatmap",
            "cardData": {
                "center": [12.9698, 77.7500],
                "intensity": "Critical",
                "radius": "500m",
                "recommendedPatrols": 4
            }
        })
    elif "network" in text or "connected" in text:
        response_msg.update({
            "text": "Relational linkages mapped via phone records and known associates.",
            "cardType": "network",
            "cardData": {
                "nodes": ["Kiran Kumar (Suspect)", "Ravi Morgan (Associate)", "KA-03-HA-9921 (Vehicle)"],
                "edges": [["Kiran Kumar", "Ravi Morgan", "Call Record"], ["Kiran Kumar", "KA-03-HA-9921", "Ownership"]]
            }
        })
    else:
        response_msg.update({
            "text": "Command compiled. I am ready to process intelligence regarding cases, trends, networks, or summaries across Karnataka jurisdictions.",
            "cardType": "text"
        })

    return response_msg