from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
api = FastAPI()

origins = ["*"]

api.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TodoEntry(BaseModel):
    id: int
    task: str
    isDone: bool


@api.get("/")
async def root():
    return {"message": "elo kurwy!"}

# Main configuration for todos API
@api.get("/todo/{todo_id}")
async def get_todos(item: TodoEntry):
    return item

@api.post("/todo/{todo_id}")
async def create_todo(item: TodoEntry):
    if item.task == "":
        return {"message": "Task cannot be empty!"}
    return item