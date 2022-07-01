import BoardData from "/data/board-data.json";

export default async function handler(req, res) {
    const forReturn = BoardData.forEach(function (item) {
        item.items = []
    })
    return res.send({message: "Deleted"});
  }