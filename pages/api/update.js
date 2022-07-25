

export default async function createJson (req, res){
	 const data = req.body.map(board=> board.items.map(item=> ({name: item.title, value: item.feedback})))
	 const d = new Date()
	 let hour = d.getHours()
	 console.log(hour)
	 await fetch(
		'https://discord.com/api/webhooks/1000757256075354182/1z8UUMZLYSzSslDGdKBrsIh2jE9Ra0JL7l3ZawRgSuKplxGjE9O5jownq1R03GoNZ_ap',
		{
		  method: 'post',
		  headers: {
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
			// the username to be displayed
			username: 'Anúncios',

			embeds: [{

				"description": Date(),
				"title":`Jornal: ${hour <10 ? 'BDC': 'TN'}`,

			 fields : data.flat()
			}

		    ]
		 })
	    }
	  ).then(res => console.log(res.status));
	  res.send("OK")
	}