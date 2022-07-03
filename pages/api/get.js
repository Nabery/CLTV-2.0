import { response } from "express";
import BoardData from "/data/board-data.json";

export default async function handler(req, res) {

    response.setHeader('Cache-Control', 's-maxage=01', 'stale-while-revalidate = true');

    return res.send(BoardData);
  }