const express = require('express')
const app = express();
const cors = require("cors")

app.use(cors())
app.use(express.json())

const fs = require('fs');

let obj = fs.readFile('./data/board-data.json', 'utf8', function (err, data) {
    if (err) throw err; // we'll not consider error handling for now
    return obj = JSON.parse(data);
});

app.get('/', (req,res) => {
    return res.json(obj)
});

app.post('/', (req,res) => {
    const {out, index, items}= req.body
    obj[out].items.splice(index, 0, items)
    return res.status(201).send(obj);
});

app.delete('/', (req,res) => {
    const {out, index, items}= req.body
    const forReturn = obj.forEach(function (item) {
        item.items = []
    })
    return res.status(204).send({message: "Deleted"});
});


app.listen(3333, () => {
    console.log('listening on http://localhost:3333')
})