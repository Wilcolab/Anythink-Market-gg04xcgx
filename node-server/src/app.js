const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware configuration
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies

// Request logging middleware - logs all incoming requests
// This is helpful for debugging and monitoring API usage
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// In-memory task storage
// TODO: Consider migrating to a database for persistence
// GitHub Copilot suggestion: Use MongoDB or PostgreSQL for production
let tasks = [
  "Write a diary entry from the future",
  "Create a time machine from a cardboard box", 
  "Plan a trip to the dinosaurs",
  "Draw a futuristic city",
  "List items to bring on a time-travel adventure"
];

// Utility function to validate task index
// GitHub Copilot suggested this helper to reduce code duplication
const isValidTaskIndex = (index, tasksArray) => {
  return !isNaN(index) && index >= 0 && index < tasksArray.length;
};

// Routes

// Root endpoint - matches Python server's root endpoint
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Get all tasks - matches Python server's GET /tasks
// Returns the complete list of tasks in JSON format
app.get('/tasks', (req, res) => {
  res.json({ tasks });
});

// Add a new task - matches Python server's POST /tasks
// Accepts JSON body with 'text' field containing the task description
app.post('/tasks', (req, res) => {
  const { text } = req.body;
  
  // Input validation - ensure task text is provided and valid
  if (!text) {
    return res.status(400).json({ error: 'Task text is required' });
  }
  
  if (typeof text !== 'string' || text.trim().length === 0) {
    return res.status(400).json({ error: 'Task text must be a non-empty string' });
  }
  
  // Add the task to our in-memory storage
  tasks.push(text.trim());
  res.status(201).json({ message: 'Task added successfully' });
});

// Enhanced endpoints - these extend beyond the Python server functionality

// Delete a task by index
// GitHub Copilot suggestion: Add batch delete functionality for multiple tasks
app.delete('/tasks/:index', (req, res) => {
  const index = parseInt(req.params.index);
  
  if (!isValidTaskIndex(index, tasks)) {
    return res.status(404).json({ error: 'Task not found' });
  }
  
  const deletedTask = tasks.splice(index, 1)[0];
  res.json({ message: 'Task deleted successfully', deletedTask });
});

// Update a task by index
// Allows partial updates to existing tasks
app.put('/tasks/:index', (req, res) => {
  const index = parseInt(req.params.index);
  const { text } = req.body;
  
  if (!isValidTaskIndex(index, tasks)) {
    return res.status(404).json({ error: 'Task not found' });
  }
  
  if (!text || typeof text !== 'string' || text.trim().length === 0) {
    return res.status(400).json({ error: 'Task text must be a non-empty string' });
  }
  
  const oldTask = tasks[index];
  tasks[index] = text.trim();
  res.json({ message: 'Task updated successfully', oldTask, newTask: tasks[index] });
});

// Get server health status
// Useful for monitoring and load balancer health checks
// GitHub Copilot suggestion: Add memory usage and uptime metrics
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    tasksCount: tasks.length,
    uptime: process.uptime(),
    memoryUsage: process.memoryUsage()
  });
});

// Error handling middleware
// Catches any unhandled errors and returns a generic error response
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler for undefined routes
// GitHub Copilot suggestion: Add route suggestions based on available endpoints
app.use('*', (req, res) => {
  res.status(404).json({ 
    error: 'Route not found',
    availableRoutes: [
      'GET /',
      'GET /tasks',
      'POST /tasks',
      'PUT /tasks/:index',
      'DELETE /tasks/:index',
      'GET /health'
    ]
  });
});

// Start server with enhanced logging
app.listen(PORT, () => {
  console.log(`🚀 Node.js server is running on http://localhost:${PORT}`);
  console.log(`📝 Available endpoints:`);
  console.log(`   GET  /           - Hello World`);
  console.log(`   GET  /tasks      - Get all tasks`);
  console.log(`   POST /tasks      - Add a new task`);
  console.log(`   PUT  /tasks/:id  - Update a task`);
  console.log(`   DELETE /tasks/:id - Delete a task`);
  console.log(`   GET  /health     - Server health check`);
  console.log(`💡 GitHub Copilot suggestions implemented:`);
  console.log(`   - Enhanced error handling`);
  console.log(`   - Input validation helpers`);
  console.log(`   - Detailed health metrics`);
  console.log(`   - 404 route suggestions`);
});

module.exports = app;
