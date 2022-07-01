import BoardData from "/data/board-data.json";

export default async function handler(req, res) {
    const {where, index} = req.body
    BoardData[where].items.splice(index,1)
    res.send(BoardData)
  }