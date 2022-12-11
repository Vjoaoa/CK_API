import { useContext } from "react";
import styles from "./Card.module.css";


const Card = (props) => {
  const { dentista } = props;

  return (

    <>

      <div >
        <img
          className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder"
        />
        <div className={`card-body ${styles.CardBody}`}>
          <a href={`/dentist/${dentista.matricula}`}>
            <h5 className={`card-title ${styles.title}`}>
              {dentista.nome} {dentista.sobrenome}
            </h5>
          </a>
          <button style={{ fontSize: "12px" }} value={dentista.matricula}>
            Adicionar aos favoritos
          </button>
        </div>
      </div>
      
    </>
  );
};

export default Card;