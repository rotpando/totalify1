const axios = require("axios");

const spotifyAPI = "https://api.spotify.com/v1";


class AlbumService {

    static async getAlbum(authorization, id, options) {
      console.log("====>", id)
      if (!options.market) options.market = "AR"; 
      
      try {
        const album = await axios.get(`${spotifyAPI}/albums/${id}/tracks`, {
          headers: {
            Authorization: `Bearer ${authorization}`,
          },
        });
  
        return {
          error: false,
          data: { ...album.data },
        };
      } catch ({ response }) {
        const { error } = response.data;
        console.error(error);
        return { error: true, data: error };
      }
    }
  
    
  }
  
module.exports = AlbumService;
  