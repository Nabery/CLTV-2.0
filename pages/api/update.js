const fs = require('fs')
import boardData from './data/board-data.json'

export default function updates(req,res) {
  let obj = req.body
  //fs.writeFileSync('./data/board-data.json', JSON.stringify(obj))
  console.log(boardData)
  res.send(obj)

}