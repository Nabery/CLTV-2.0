const express = require('express')
const app = express();
const cors = require("cors")
const fs = require('fs');

app.use(cors())
app.use(express.json())

let obj = fs.readFile('./data/board-data.json', 'utf8', function (err, data) {
    if (err) throw err; // we'll not consider error handling for now
    return obj = JSON.parse(data);
});

app.get('/', (req,res) => {
    return res.json(obj)
});

