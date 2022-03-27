const express = require("express");

const ArtistsController = require("../controllers/artists");

const router = express.Router();


router.get("/:id", ArtistsController.getSingle);

module.exports = router;
