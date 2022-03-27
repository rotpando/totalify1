// server
const express = require("express");

// autorizacion
const auth = require("./auth");

// artistas
const artists = require("./artists");
// disco
const album = require("./album");

const { checkAuth } = require("../middlewares/auth");

const router = express.Router();

// rutas

router.use("/", auth);
router.use("/artists", checkAuth, artists);
router.use("/album", checkAuth, album);

module.exports = router;
