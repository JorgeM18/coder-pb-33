const express = require('express');

const PORT = process.env.PORT || 8080;
const app = express();

// Routes
app.get('/', (req, res) => {
  res.send('<h1>Recetas</h1>');
})

app.get('/tarea2', (req, res) => {
  res.send('<h2>Tarea 2</h2>');
})

app.listen(PORT, () => {
  console.log("Ready on port => ", PORT);
})
