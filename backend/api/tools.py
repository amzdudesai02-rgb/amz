"""
API endpoint for tools management
Compatible with Vercel serverless functions
"""
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import json
import os

app = FastAPI(title="AMZDudes Platform API", version="1.0.0")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify your domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Tool model
class Tool(BaseModel):
    id: str
    name: str
    description: str
    subdomain: str
    status: str
    features: List[str]
    icon: str
    color: str

class ToolResponse(BaseModel):
    tools: List[Tool]
    total: int
    active: int
    coming_soon: int

# Tools data (can be moved to database later)
TOOLS_DATA = [
    {
        "id": "reimbursement",
        "name": "Reimbursement Automation",
        "description": "Streamline and automate your reimbursement processes with intelligent workflow management.",
        "subdomain": "reimbursement.amzdudes.io",
        "status": "active",
        "features": [
            "Automated expense tracking",
            "Smart approval workflows",
            "Real-time notifications",
            "Comprehensive reporting",
        ],
        "icon": "Receipt",
        "color": "bg-blue-500",
    },
    {
        "id": "crm",
        "name": "CRM Automation",
        "description": "Powerful customer relationship management with automated workflows and intelligent insights.",
        "subdomain": "crm.amzdudes.io",
        "status": "active",
        "features": [
            "Contact management",
            "Sales pipeline automation",
            "Email integration",
            "Analytics dashboard",
        ],
        "icon": "Users",
        "color": "bg-green-500",
    },
    {
        "id": "sop-hub",
        "name": "SOP Hub",
        "description": "Centralized hub for Standard Operating Procedures with version control and collaboration.",
        "subdomain": "sop.amzdudes.io",
        "status": "coming-soon",
        "features": [
            "Document management",
            "Version control",
            "Team collaboration",
            "Compliance tracking",
        ],
        "icon": "FileText",
        "color": "bg-purple-500",
    },
    {
        "id": "automation-4",
        "name": "Automation Tool",
        "description": "Advanced automation capabilities to streamline your business processes.",
        "subdomain": "automation.amzdudes.io",
        "status": "coming-soon",
        "features": [
            "Workflow automation",
            "Integration capabilities",
            "Custom triggers",
            "Performance monitoring",
        ],
        "icon": "Zap",
        "color": "bg-orange-500",
    },
]

@app.get("/")
async def root():
    return {
        "message": "AMZDudes Platform API",
        "version": "1.0.0",
        "endpoints": {
            "tools": "/api/tools",
            "tool_by_id": "/api/tools/{tool_id}",
            "health": "/api/health",
        }
    }

@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "service": "amzdudes-platform-api"}

@app.get("/api/tools", response_model=ToolResponse)
async def get_tools(status: Optional[str] = None):
    """
    Get all tools, optionally filtered by status
    """
    tools = TOOLS_DATA.copy()
    
    if status:
        tools = [tool for tool in tools if tool["status"] == status]
    
    tool_objects = [Tool(**tool) for tool in tools]
    active_count = len([t for t in TOOLS_DATA if t["status"] == "active"])
    coming_soon_count = len([t for t in TOOLS_DATA if t["status"] == "coming-soon"])
    
    return ToolResponse(
        tools=tool_objects,
        total=len(TOOLS_DATA),
        active=active_count,
        coming_soon=coming_soon_count,
    )

@app.get("/api/tools/{tool_id}", response_model=Tool)
async def get_tool(tool_id: str):
    """
    Get a specific tool by ID
    """
    tool = next((t for t in TOOLS_DATA if t["id"] == tool_id), None)
    if not tool:
        raise HTTPException(status_code=404, detail="Tool not found")
    return Tool(**tool)

@app.get("/api/stats")
async def get_stats():
    """
    Get platform statistics
    """
    return {
        "total_tools": len(TOOLS_DATA),
        "active_tools": len([t for t in TOOLS_DATA if t["status"] == "active"]),
        "coming_soon_tools": len([t for t in TOOLS_DATA if t["status"] == "coming-soon"]),
    }

# Vercel serverless function handler
def handler(request):
    """
    Vercel serverless function handler
    """
    from mangum import Mangum
    handler = Mangum(app)
    return handler(request)

