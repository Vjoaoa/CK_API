import styles from "./Card.module.css";
import {useEffect, useState} from "react";
import api from "../services/api";

const Card = () => {

  const [cardDentists, setcardDentists] = useState([]);
  
  useEffect(() => {
    api.get("/dentista")
    .then((response) => {setcardDentists(response.data);
    console.log(response.data);
    })
  }, []);


  return (
    <>
      <div className={`card`}>
        <img
          className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder"
        />
        <div className={`card-body ${styles.CardBody}`}>

        {cardDentists.map((dentist) =>
          <a href={`/dentist/MatriculaDoDentista`}>
            <h5 className="card-title" key="id">{dentist.nome}</h5>
            <h5 className="card-title" key="id">{dentist.sobrenome}</h5>
          </a>
          )};
        </div>  
      </div>
    </>
  );
};

export default Card;
