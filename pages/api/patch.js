import BoardData from "/data/board-data.json";

export default async function handler(req, res) {
    const {id, name, where, index, hnumber} = req.body
    const data = ({"id": id, "name": name, "feedback": "HIB " + hnumber})
    BoardData[where].items.splice(index, 1, data)
    const obj = BoardData
    res.send(obj)
  }