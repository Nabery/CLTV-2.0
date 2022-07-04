const fs = require('fs')

export default function updates(req,res) {
  let obj = req.body
  fs.writeFileSync('./data/board-data.json', JSON.stringify(obj))
  res.send(obj)
}


export default async function handler(req, res) {
  let obj = req.body
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'data');
  //Read the json data file data.json
  fs.writeFileSync(jsonDirectory + '/board-data.json', JSON.stringify(obj))
  //Return the content of the data file in json format
  res.status(200).json(obj);
}