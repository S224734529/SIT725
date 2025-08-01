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

app.get('/api/projects',(req,res) => {
res.json({statusCode: 200, data: cardList, message:"Success"})
})
var port = process.env.port || 3000;
app.listen(port,()=>{
console.log("App listening to: "+port)
})

