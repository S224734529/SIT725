var express = require("express")
const mongoose = require('mongoose');

var app = express()
app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const cardList = [
{
title: "Kitten 2",
image: "images/kitten-2.jpg",
link: "About Kitten 2",
desciption: "Demo desciption about kitten 2"
},
{
title: "Kitten 3",
image: "images/kitten-3.jpg",
link: "About Kitten 3",
desciption: "Demo desciption about kitten 3"
}
]
mongoose.connect('mongodb://localhost:27017/SIT725Workshops', {
useNewUrlParser: true,
useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
console.log('Connected to MongoDB!');
});
const projectsRoute = require('./routes/projects');

app.use('/api/projects', projectsRoute);

app.use('/api/food', require('./routes/food'));

//Week 6 calculator add function strat
app.get('/add', (req, res) => {
const a = parseFloat(req.query.a);
const b = parseFloat(req.query.b);
if (isNaN(a) || isNaN(b)) {
return res.status(400).send("Invalid input");
}
const sum = a + b;
res.send(`The sum of ${a} and ${b} is: ${sum}`);
});
//Week 6 calculator add function end

//Week 6 additonal task multiplication start

app.get('/multiply', (req, res) => {
  const c = parseFloat(req.query.c);
  const d = parseFloat(req.query.d);

  if (!Number.isFinite(c) || !Number.isFinite(d)) {
    return res.status(400).send('Invalid input');
  }

  const product = c * d;
  res.send(`The product of ${c} and ${d} is: ${product}`);
});

//Week 6 additonal task multiplication end

// app.get('/api/projects',(req,res) => {
// res.json({statusCode: 200, data: cardList, message:"Success"})
// })
var port = process.env.port || 3000;
app.listen(port,()=>{
console.log("App listening to: "+port)
})

