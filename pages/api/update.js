const fs = require('fs')

export default function updates(req,res) {
  let obj = req.body
  fs.writeFileSync('../data/board-data.json', JSON.stringify(obj))
  res.send(obj)
}