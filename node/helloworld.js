const express = require('express')
const app = express();
const cors = require("cors")

app.use(cors())
app.use(express.json())

const fs = require('fs');
const { redirect } = require('next/dist/server/api-utils');
const { application } = require('express');

let obj = fs.readFile('./data/board-data.json', 'utf8', function (err, data) {
    if (err) throw err; // we'll not consider error handling for now
    return obj = JSON.parse(data);
});

app.get('/', (req,res) => {
    return res.json(obj)
});

app.post('/moves', (req,res) => {
    const {destination, from, index, fromindex, items, id}= req.body
    console.log({"Destination": destination,"Came from": from, "To index": index, "From index": fromindex})
    obj[from].items.splice(fromindex, 1)
    obj[destination].items.splice(index, 0, items)
    return res.status(201).send(obj);
});

app.delete('/delete', (req,res) => {
    const forReturn = obj.forEach(function (item) {
        item.items = []
    })
    return res.status(204).send({message: "Deleted"});
});

app.put('/put', (req,res)=>{
    const {where, index} = req.body
    obj[where].items.splice(index,1)
    res.send(obj)
})

app.patch('/patch', (req,res) => {
    const {id, name, where, index, hnumber} = req.body
    const data = ({"id": id, "name": name, "feedback": "HIB " + hnumber})
    obj[where].items.splice(index, 1, data)
    res.send(data)
});

app.post('/post', (req,res) => {
    const {where, items} = req.body
    console.log({"Board Number": where, "items": items})
    obj[where].items.push(items)
    res.send(obj)
});


app.listen(3333, () => {
    console.log('listening on http://localhost:3333')
})