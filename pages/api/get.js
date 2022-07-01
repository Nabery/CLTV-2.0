import BoardData from "/data/board-data.json";

export default async function handler(req, res) {
    let obj = BoardData
    return res.send(obj);
  }