// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

let counter = 0;
let lastRequestBody;
let lastSuccessBody;

app.post('/', (req, res) => {
  counter++;
  lastRequestBody = req.body;
  console.log(lastRequestBody);
  res.json({ counter });
});

app.post('/success', (req, res) => {
  counter++;
  lastRequestBody = req.body;
  lastSuccessBody = req.body;
  console.log(lastRequestBody);
  res.json({ counter, lastRequestBody});
});

app.get('/last-success-body', (req, res) => {
  console.log(lastRequestBody);
  res.json({ counter, lastSuccessBody});
});

app.get('/status', (req, res) => {
  console.log(lastRequestBody);
  res.json({ counter, lastRequestBody});
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
