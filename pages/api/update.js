const fs = require('fs')

let data = fs.readFileSync('./data/board-data.json', {flag:'r'} )

export default function updates(req,res) {
  let obj = req.body
  fs.writeFileSync('/data/board-data.json', JSON.stringify(obj))
  res.send(obj)
}