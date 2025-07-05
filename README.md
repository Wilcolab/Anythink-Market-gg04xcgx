# Task Management Servers

This project contains both Python FastAPI and Node.js Express implementations of a task management API. It demonstrates server migration from Python to Node.js while maintaining feature parity and adding enhancements.

## Project Structure

The project has the following files and directories:

### Python Server (FastAPI)
- `python-server/src/main.py`: FastAPI server implementation with basic task management routes
- `python-server/src/__init__.py`: Python package marker file
- `python-server/requirements.txt`: Python dependencies (uvicorn, fastapi)
- `python-server/Dockerfile`: Docker configuration for Python server

### Node.js Server (Express)
- `node-server/src/app.js`: Express server implementation with enhanced task management features
- `node-server/package.json`: Node.js dependencies and scripts
- `node-server/Dockerfile`: Docker configuration for Node.js server

### Configuration & Documentation
- `docker-compose.yml`: Multi-container Docker configuration for both servers
- `API.md`: Comprehensive API documentation for both servers
- `MIGRATION.md`: Migration guide and feature comparison

## Getting Started

To run both servers using Docker, follow these steps:

### Run Both Servers
```shell
docker compose up --build
```

This command will build and start both servers:
- **Python FastAPI Server**: Available at http://localhost:8001
- **Node.js Express Server**: Available at http://localhost:3000

### Run Individual Servers
```shell
# Python server only
docker compose up python-server

# Node.js server only  
docker compose up node-server
```

## API Routes

### Python Server (Port 8001)
- `GET /` - Returns "Hello World"
- `POST /tasks` - Adds a task to the task list
- `GET /tasks` - Retrieves the task list

### Node.js Server (Port 3000)
**Core Routes (matching Python server):**
- `GET /` - Returns "Hello World"
- `POST /tasks` - Adds a task to the task list
- `GET /tasks` - Retrieves the task list

**Enhanced Routes (Node.js only):**
- `PUT /tasks/:index` - Updates a task at the specified index
- `DELETE /tasks/:index` - Deletes a task at the specified index
- `GET /health` - Returns server health status and metrics

## Testing the APIs

### Test Python Server
```bash
# Get all tasks
curl http://localhost:8001/tasks

# Add a new task
curl -X POST http://localhost:8001/tasks \
  -H "Content-Type: application/json" \
  -d '{"text": "Learn FastAPI"}'
```

### Test Node.js Server
```bash
# Get all tasks
curl http://localhost:3000/tasks

# Add a new task
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"text": "Learn Express.js"}'

# Update a task
curl -X PUT http://localhost:3000/tasks/0 \
  -H "Content-Type: application/json" \
  -d '{"text": "Master Express.js"}'

# Delete a task
curl -X DELETE http://localhost:3000/tasks/0

# Check server health
curl http://localhost:3000/health
```

## Migration Benefits

The Node.js implementation provides several enhancements over the Python version:

- ✅ **Full CRUD Operations**: Complete Create, Read, Update, Delete functionality
- ✅ **Enhanced Error Handling**: Comprehensive error middleware and validation
- ✅ **Request Logging**: Built-in logging for debugging and monitoring
- ✅ **Health Monitoring**: Dedicated health check endpoint
- ✅ **Input Validation**: Robust validation for all user inputs
- ✅ **Better Code Organization**: Modular structure with middleware

## Technology Stack

| Component | Python Server | Node.js Server |
|-----------|---------------|----------------|
| **Framework** | FastAPI | Express.js |
| **Runtime** | Python 3.9 | Node.js 18 |
| **Package Manager** | pip | npm |
| **Server** | uvicorn | node |
| **Port** | 8001 | 3000 |

For more detailed information, see:
- [API Documentation](./API.md)
- [Migration Guide](./MIGRATION.md)
