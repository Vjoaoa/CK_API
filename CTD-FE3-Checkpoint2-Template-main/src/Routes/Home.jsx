import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Card from "../Components/Card";
import api from "../services/api";

const Home = () => {

  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    api.get("/dentista")
    .then((response) => {setDentists(response.data);
    console.log(response.data);
    })
  });
;

  return (
    <>
      <h1>Home</h1>
        <div className="card-grid container">
        {dentists.map((dentist) => {
          return <Card dentista={dentist} key={dentist.matricula}/>;
        })}
      </div>
    </>
  );
};

export default Home;
