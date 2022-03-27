const AlbumService = require("../services/album");

class AlbumController {
  static async getAll(req, res) {
    const { error, data } = await AlbumService.getAll(
      req.access_token,
      req.query
    );

    if (error) {
      return res.status(data.status || 500).send({ message: data.message });
    }
    res.send(data);
  }

  static async getAlbum(req, res) {
    const { id } = req.params;

    const { error, data } = await AlbumService.getAlbum(
      req.access_token,
      id,
      req.body
    );

    if (error) {
      return res.status(data.status || 500).send({ message: data.message });
    }

    res.send(data);
  }

  
}

module.exports = AlbumController;
