
const axios = require('axios')

export default function createJson (req, res){
     let data = req.body
	 const config = {
	  method: 'post',
	  mode: 'cors',
	  url: 'https://discord.com/api/webhooks/1000757256075354182/1z8UUMZLYSzSslDGdKBrsIh2jE9Ra0JL7l3ZawRgSuKplxGjE9O5jownq1R03GoNZ_ap',
	  headers: { 
		'Content-Type': 'application/json'
	  },
	  content : {data}
	 };
	
	 axios(config)
	 .then(function (response) {
	  console.log(JSON.stringify(response.data));
	  res.send(response.data)
	 })
	}