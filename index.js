const express = require('express');

const PORT = process.env.PORT || 8080;
const app = express();

// Routes
app.get('/', (req, res) => {
  res.send('<h1>Recetas</h1>');
})

app.listen(PORT, () => {
  console.log("Ready on port => ", PORT);
})
