const http = require('http')
const URL = require('url')
const fs = require('fs')

const content = fs.readFileSync('../data/board-data.json', 'utf8');
console.log(content);

http.createServer((req, res)=>{
    res.end(JSON.stringify(content));
}).listen(4000,() => console.log('listening on 4000'))



