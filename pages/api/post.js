import BoardData from "/data/board-data.json";

export default async function handler(req, res) {
   const {where, items} = req.body
   console.log({"Board Number": where, "items": items})
   BoardData[where].items.push(items)
   res.send(BoardData)
  }