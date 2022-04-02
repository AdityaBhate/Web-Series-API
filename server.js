const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

const database = require("./db/conn");
const router = require("./router/series");

//parsing json
app.use(express.json());

//handling requests
app.use(router);

app.listen(port, () => {
	console.log(`Listening at port ${port}...`);
});
