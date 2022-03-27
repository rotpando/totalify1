import { useEffect, useState } from "react";

import axios from "axios";

import Header from "../commons/Header";
import Albums from "../commons/Albums";


import { useHistory, useParams } from "react-router";
import { capitalize } from "../utils/functions";


const Content = () => {
  const history = useHistory();
  const { type, id } = useParams();
  const [data, setData] = useState({});
 
  
  

  function handleSubmit(e){
    e.preventDefault();
    

}
  useEffect(() => {
    axios
    .get(`/api/${type}/${id}`)
    .then((res) => res.data)
    .then((data) => setData(data))
    .catch(() => {
      history.push("/404")
    })
  }, [id]);

  if (!data.id) return <p>No hay datos</p>;

  return (
    <section className="layout">
      <Header {...data} type={capitalize(type)} />
      <Albums {...data.albums} />
    
    </section>
  );
};

export default Content; 


