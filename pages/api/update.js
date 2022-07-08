const fs = require('fs');
const path = require('path');


export default function createJson (req, res){
	const data = JSON.stringify(req.body)
	fs.writeFile("/data/board-data.json", 	data, (err) => {
		if (err)
		  console.log(err);
		else {
		  console.log("File written successfully\n");
		  console.log("The written has the following contents:");
		  console.log(fs.readFileSync("/data/board-data.json", "utf8"));
		}
	  });
	res.send(data)
}