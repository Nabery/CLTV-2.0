// api/hello.js

import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

export default function handler(req, res) {
  let obj = req.body;
  let data = JSON.stringify(obj)
  const file = path.join(process.cwd(), 'data', 'board-data.json');
  const stringified = readFileSync(file, 'utf8');

  fs.writeFileSync(file, data)
  res.setHeader('Content-Type', 'application/json');
  return res.end(stringified);
}
