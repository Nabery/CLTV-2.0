import BoardData from "/data/board-data.json";

export default async function handler(req, res) {
    const {destination, from, index, fromindex, items, id}= req.body
    console.log({"Destination": destination,"Came from": from, "To index": index, "From index": fromindex})
    BoardData[from].items.splice(fromindex, 1)
    BoardData[destination].items.splice(index, 0, items)
    return res.status(201).send(BoardData);
  }