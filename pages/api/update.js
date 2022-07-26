
const axios = require('axios')

export default function createJson(req, res) {
	let data = req.body
	const config = {
		method: 'post',
		mode: 'cors',
		url: 'https://getpantry.cloud/apiv1/pantry/0e12a1da-6eeb-4bd9-985c-28217a25f86c/basket/finaldatajson',
		headers: {
			'Content-Type': 'application/json'
		},
		data: { data }
	};
	
	axios(config)
		.then(function (response) {
			console.log(JSON.stringify(response.data));
			res.send(response.data)
		})
}