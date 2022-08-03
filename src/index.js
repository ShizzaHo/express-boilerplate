/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

/* -------------------------------------------------------------------------- */
/*                                   Express                                  */
/* -------------------------------------------------------------------------- */
const app = express()
app.use(bodyParser.json()); // body parser
app.use(cors()); // Cross-origin resource sharing
app.set("view engine", "ejs"); // render engine 
app.use(express.static(path.join(__dirname, 'public'))); // public folder
app.set('views', path.join(__dirname, 'public')); // public views folder
app.use('/favicon.ico', express.static('public/favicon.ico')); //favicon

app.listen(3000) //port
console.log('Server started');

/* -------------------------------------------------------------------------- */
/*                                    Main                                    */
/* -------------------------------------------------------------------------- */

app.get('/', (req, res) => {
    res.render('index.html');
})

app.get('/simple-get', (req, res) => {
    res.json({data:"Express boilerplate"});
})

app.post("/simple-post", (req, res) => {
    res.send(req.body.data);
});
