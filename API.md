# API Documentation

## Overview
T### Get all tasks
```bash
curl http://localhost:8000/tasks
```project provides a task management API with both Python (FastAPI) and Node.js (Express) implementations.

## Servers
- **Python Server**: FastAPI server running on port 8000
- **Node.js Server**: Express server running on port 3000

## API Endpoints

### Common Endpoints (Both Servers)
- `GET /` - Returns "Hello World"
- `GET /tasks` - Returns list of all tasks
- `POST /tasks` - Adds a new task

### Node.js Server Additional Endpoints
- `PUT /tasks/:index` - Updates a task at specific index
- `DELETE /tasks/:index` - Deletes a task at specific index
- `GET /health` - Returns server health status

## Data Models

### Task
- **text** (string): The task description

### Response Models
- **TaskListResponse**: `{ "tasks": string[] }`
- **MessageResponse**: `{ "message": string }`
- **ErrorResponse**: `{ "error": string }`
- **HealthResponse**: `{ "status": string, "timestamp": string, "tasksCount": number }`

## Example Usage

### Get all tasks
```bash
curl http://localhost:3000/tasks
```

### Add a new task
```bash
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"text": "Complete the migration"}'
```

### Update a task
```bash
curl -X PUT http://localhost:3000/tasks/0 \
  -H "Content-Type: application/json" \
  -d '{"text": "Updated task description"}'
```

### Delete a task
```bash
curl -X DELETE http://localhost:3000/tasks/0
```
