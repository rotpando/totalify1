import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Album from "./commons/Album";
import Footer from "./components/Footer";

import "./App.css";

import axios from "axios";
import { Route, Switch, Redirect } from "react-router-dom";

const App = () => {
  
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [theme, setTheme] = useState("");

  
  useEffect(() => {
    axios
      .get("/api/artists")
      .then((res) => res.data)
      .then((artists) => setArtists(artists.items));
    axios
      .get("/api/albums")
      .then((res) => res.data)
      .then((albums) => setAlbums(albums.items));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container is-fluid columns">
        <Sidebar artists={artists} />
        <Switch>
          
          <Route
            exact
            path="/"
            render={() => <p>¡Bienvenidos a Totalify!</p>}
          />
          <Route path="/404" render={() => <p>error 404</p>} />
          <Route path="/single/:type/:id">
            <Content />
          </Route>
          <Route path="/albums/:id" render={() => <Album/>}>
          </Route>
          
          
          <Route path="*">
            <Redirect to="/404" />
          </Route>
        </Switch>
        
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
