const fs = require('fs')

export default function updates(req,res) {
  let obj = req.body
  const test = fs.writeFileSync('./data/board-data.json', JSON.stringify(obj))
  res.send(test.toString())
}
