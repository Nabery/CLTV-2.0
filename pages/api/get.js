import { response } from "express";
import BoardData from "/data/board-data.json";

export default async function handler(req, res) {
    let obj = BoardData

    response.setHeader('Cache-Control', 's-maxage=10', 'stale-while-revalidate');
    
    return res.send(obj);
  }