// api/hello.js

import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

export default function handler(req, res) {
  let obj = req.body;
  const file = path.join(process.cwd(), 'data', 'board-data.json');
  const stringified = readFileSync(file, 'utf8');
  
  fs.writeFileSync(file, obj)
  res.setHeader('Content-Type', 'application/json');
  return res.end(stringified);
}
