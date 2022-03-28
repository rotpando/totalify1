import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";
import "../estilos/estilos.css";

// player

import SpotifyWebApi from "spotify-web-api-js";
const spotifyApi = new SpotifyWebApi();


export default function Album() {
  const album = useParams().id;
  const ruta = "/api/album/" + album;

  const [temas, setTemas] = useState([]);

  console.log(ruta);
  useEffect(() => {
    axios
      .get(ruta)
      .then((res) => res.data)
      .then(
        (temas) => {
          console.log(temas);
          let nombretema = [];
          Object.keys(temas.items).map((num) => {
            nombretema.push({nombre:temas.items[num].name,numero:temas.items[num].track_number,duracion:temas.items[num].duration_ms});
          });
          setTemas(nombretema);
        },
        [ruta]
      )
      .catch((err) => console.log(err));
  },[]);

  const listaTemas = temas.map((tema) => {
    return (
      <div>
        <li className="p-4 is-flex is-flex-direction-column is-justify-content-space-around hoverdiv"
          >{tema.numero} - {tema.nombre} - {(tema.duracion*(1/1000)*(1/60)).toFixed(1)} minutos</li>{" "}
      </div>
    );
  });

  return (
    <div className="is-justify-content-space-between">
      <p className="menu-label">Lista de temas</p>
      <ul>{listaTemas}</ul>
    </div>
  );
}
