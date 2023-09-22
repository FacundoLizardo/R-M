const axios = require("axios");

async function getCharById(req, res) {
	try {
		const { id } = req.params;
		await axios
			.get(`https://rickandmortyapi.com/api/character/${id}`)
			.then((response) => {
				const { id, status, name, species, origin, image, gender } =
					response.data;
				name
					? res
							.status(200)
							.json({ id, status, name, species, origin, image, gender })
					: res.status(404).send("Not Found amigo"); // send solo sirve para strings
			})
			.catch((error) => {
				res.status(500).json({ message: error.message }); // el objeto error tine una propiedad message
			});
	} catch (error) {
		console.error(error);
		res.status(500).send({ message: error.message });
	}
}
module.exports = getCharById;

// Hacer la solicitud a la API
// 	axios
// 		.get(`https://rickandmortyapi.com/api/character/${id}`)
// 		.then((response) => {
// 			// Resolver la promesa con los datos de la respuesta
// 			const { name, gender, species, origin, image, status } = response.data;

// 			const character = {
// 				name,
// 				gender,
// 				species,
// 				origin: origin.name,
// 				image,
// 				status,
// 			};

// 			res.writeHead(200, { "content-type": "application/json" });
// 			res.end(JSON.stringify(character));
// 		})
// 		.catch((error) => {
// 			res.writeHead(500, { "content-type": "text/plain" });
// 			res.end(error.message);
// 		});
// }
