const axios = require("axios");

const spotifyAPI = "https://api.spotify.com/v1";

class ArtistsService {

  static async getSingle(authorization, id, options) {
    if (!options.market) options.market = "AR";


    const params = new URLSearchParams(options);
    try {
      const artist = await axios.get(`${spotifyAPI}/artists/${id}`, {
        headers: {
          Authorization: `Bearer ${authorization}`,
        },
      });

      const albums = await axios.get(`${spotifyAPI}/artists/${id}/albums`, {
        headers: {
          Authorization: `Bearer ${authorization}`,
        },
        params,
      });

      return {
        error: false,
        data: { ...artist.data, albums: albums.data.items },
      };
    } catch ({ response }) {
      const { error } = response.data;
      console.error(error);
      return { error: true, data: error };
    }
  }

  
}

module.exports = ArtistsService;
