// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

let counter = 0;

app.get('/', (req, res) => {
  console.log(req)
  counter++;
  res.json({ counter });
});

app.post('/status', (req, res) => {
  res.json({ counter });
});

app.post('/increment', (req, res) => {
  counter++;
  res.json({ counter });
});

app.post('/decrement', (req, res) => {
  counter--;
  res.json({ counter });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
