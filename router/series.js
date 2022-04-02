const express = require("express");
const router = new express.Router();

//using model
const Anime = require("../models/anime");

//handling requests
router.post("/animeSeries", async (req, res) => {
	try {
		const addSeries = new Anime(req.body);
		const insert = await addSeries.save();
		res.status(201).send(insert);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
});

router.get("/animeSeries", async (req, res) => {
	try {
		const getAllSeries = await Anime.find({}).sort({ rating: 1 });
		res.status(200).send(getAllSeries);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

router.get("/animeSeries/:id", async (req, res) => {
	try {
		const _id = req.params.id;
		const getSeries = await Anime.findById({ _id });
		res.status(200).send(getSeries);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

router.patch("/animeSeries/:id", async (req, res) => {
	try {
		const _id = req.params.id;
		const patchSeries = await Anime.findByIdAndUpdate(_id, req.body, {
			new: true,
		});
		res.status(200).send(patchSeries);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

router.delete("/animeSeries/:id", async (req, res) => {
	try {
		const _id = req.params.id;
		const deleteSeries = await Anime.findOneAndDelete(_id);
		res.status(200).send(deleteSeries);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

module.exports = router;
