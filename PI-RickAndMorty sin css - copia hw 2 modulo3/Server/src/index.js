const server = require("./app");
const PORT = 3001;
const { conn } = require("../DB_connection");

server.listen(PORT, () => {
	conn.sync({ force: true });
	console.log(`server rised on port: ${PORT}`);
});

// const express = require("express");

// const server = express();

// const PORT = 3001;

// const morgan = require("morgan");

// const mainRouter = require("./routes/mainRouter");

// const cors = require("cors");

// server.use((req, res, next) => {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Credentials", "true");
// 	res.header(
// 		"Access-Control-Allow-Headers",
// 		"Origin, X-Requested-With, Content-Type, Accept"
// 	);
// 	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
// 	next();
// });

// server.use(morgan("dev"));

// server.use(express.json());

// server.use("/rickandmorty", mainRouter);

// server.use(cors());

// const http = require("http");
// const getCharById = require("./controllers/getCharById");

// http
// 	.createServer((req, res) => {
// 		res.setHeader("Access-Control-Allow-Origin", "*");

// 		if (req.url.includes("/rickandmorty/character")) {
// 			const params = req.url.split("/");
// 			const id = params[params.length - 1];
// 			getCharById(res, id);
// 		}
// 	})
// 	.listen(3001);
