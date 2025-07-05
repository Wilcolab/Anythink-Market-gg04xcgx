const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const tasks = ["Write a diary entry from the future", "Create a time machine from a cardboard box", "Plan a trip to the dinosaurs", "Draw a futuristic city", "List items to bring on a time-travel adventure"];

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/tasks', (req, res) => {
  res.json({ tasks });
});

app.post('/tasks', (req, res) => {
  const { text } = req.body;
  tasks.push(text);
  res.json({ message: 'Task added successfully' });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
