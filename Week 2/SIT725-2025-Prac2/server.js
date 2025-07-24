// const express = require('express');
// const { console } = require('inspector');
// const path = require('path');
// const app = express();
// const PORT = process.env.PORT || 3000;
// // Middleware to parse JSON bodies (for POST requests)
// app.use(express.json());
// // Serve static files from the "public" folder
// app.use(express.static(path.join(__dirname, 'public')));
// // In-memory array to store quotes
// let quotes = [
// "The best way to predict the future is to invent it.",
// "Life is 10% what happens to us and 90% how we react to it.",
// "The only limit to our realization of tomorrow is our doubts of today.",
// "Do not wait to strike till the iron is hot; but make it hot by striking."
// ];
// // GET endpoint to retrieve a random quote
// // Usage example: http://localhost:3000/api/quote
// app.get('/api/quote', (req, res) => {
// const randomIndex = Math.floor(Math.random() * quotes.length);
// res.json({ quote: quotes[randomIndex] });
// });
// // app.get('/health',(req,res)=>{
// //     res.json({'Your Server is stable':PORT})
// // })
// app.listen(PORT,()=>{
//     console.log('App is listening to user requests');
//     console.log('Access this service at http://localhost:'+ PORT)
// });
// // Optional: POST endpoint to add a new quote

// // var express = require("express")
// // var app = express()
// // var port = process.env.port || 3000;
// // app.listen(port,()=>{
// // console.log("App listening to: "+port)
// // })
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public')); // Serve index.html

// Simple in-memory data
let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

// REST API endpoints
app.get('/api/users', (req, res) => {
  res.json(users);
});

app.post('/api/users', (req, res) => {
  const newUser = { id: users.length + 1, name: req.body.name };
  users.push(newUser);
  res.status(201).json(newUser);
});

//GET: Add two numbers via query string
app.get('/add', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: 'Invalid numbers provided' });
  }
  res.json({ result: a + b });
});

// GET: Subtract two numbers
app.get('/subtract', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  res.json({ result: a - b });
});

// GET: Multiply
app.get('/multiply', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  res.json({ result: a * b });
});

// GET: Divide
app.get('/divide', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  if (b === 0) return res.status(400).json({ error: 'Cannot divide by zero' });
  res.json({ result: a / b });
});

// POST: Add using JSON body
app.post('/add', (req, res) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ error: 'Please send numbers in JSON body' });
  }
  res.json({ result: a + b });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});