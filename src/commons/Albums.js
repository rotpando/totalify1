import React from "react";
import { Link } from "react-router-dom";

import "../estilos/estilos.css"

const Albums = (albums) => {
  console.log(albums);
 
  const discos = Object.keys(albums).map((num) => {
    return (
      <Link to={"/albums/" + albums[num].id} style={{color:"black"}}>
        <div className="is-flex menu-list hoverdiv">
          <img
            src={albums[num].images[0].url}
            style={{ width: "100px", height: "100px", borderRadius: 5 }}
          ></img>
          <div
            key={albums[num].id + "nombre"}
            className="p-4 is-flex is-flex-direction-column is-justify-content-space-around"
          
          >
            {albums[num].name}
          </div>
          <div
            key={albums[num].id + "temas"}
            className="p-4 is-flex is-flex-direction-column is-justify-content-space-around"
          >
            {albums[num].total_tracks} temas
          </div>
          <div
            key={albums[num].id + "tipo"}
            className="p-4 is-flex is-flex-direction-column is-justify-content-space-around"
          >
            Tipo: {albums[num].type}
          </div>
        </div>
      </Link>
    );
  });

  return (
    <>
      <div className="container columns">
        <div></div>
        <div key="discos44">
          <p className="menu-label">discos</p>
          {discos}
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default Albums;
