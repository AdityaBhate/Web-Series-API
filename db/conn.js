const mongoose = require("mongoose");

mongoose
	.connect("mongodb://localhost:27017/anime")
	.then(() => {
		console.log("Connection to database established");
	})
	.catch((err) => {
		console.log(err);
	});
