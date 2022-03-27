const express = require("express");

const AlbumController = require("../controllers/album");

const router = express.Router();


router.get("/:id", AlbumController.getAlbum);

module.exports = router;