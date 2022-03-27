const ArtistsService = require("../services/artists");

class ArtistsController {
  static async getAll(req, res) {
    const { error, data } = await ArtistsService.getAll(
      req.access_token,
      req.query
    );

    if (error) {
      return res.status(data.status || 500).send({ message: data.message });
    }
    res.send(data);
  }

  static async getSingle(req, res) {
    const { id } = req.params;

    const { error, data } = await ArtistsService.getSingle(
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

module.exports = ArtistsController;
