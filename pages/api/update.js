const fs = require('fs')

const boardData = require('./data/board-data.json')

export default async function updates(req,res) {
  let obj = req.body
  fs.writeFile('./data/board-data.json', JSON.stringify(obj))
  res.send(boardData)
}
