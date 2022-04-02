const mongoose = require("mongoose");

//defining a schema
const animeSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: false,
		unique: true,
	},
	episode: {
		type: Number,
		required: true,
		trim: true,
	},
	genre: {
		type: String,
		required: true,
		trim: true,
	},
	rating: {
		type: Number,
		required: true,
		trim: true,
	},
	Ended: {
		type: Boolean,
		required: true,
		trim: true,
		default: true,
	},
});

//creating a collection
const Anime = new mongoose.model("animeSeries", animeSchema);

module.exports = Anime;

// {
//     "name": "naruto",
//     "episode": 200,
//     "genre": "shounen",
//     "rating": 8,
//     "Ended": true,
// }
