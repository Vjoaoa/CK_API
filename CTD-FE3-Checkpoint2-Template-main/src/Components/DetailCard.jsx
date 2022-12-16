

import api from "../services/api";
import styles from "./Form.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";



const Auth = () => {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function submitForm(event){
    event.preventDefault();


    auth();

  }

  async function auth(){
    try{
      const response = await api.post("/auth", {
        username, 
        password,
      });
      navigate("/home");

      console.log(response);
    }catch(error){
      alert("Erro ao fazer login, tente novamente");
    }
  }

    return (
      <>

    
        <div
          className={`text-center card container ${styles.card}`}
        >
          <div className={`card-body ${styles.CardBody}`}>
            <form onSubmit={submitForm}>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={`form-control ${styles.inputSpacing}`}
                placeholder="Usuário"
                name="username"
                required
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`form-control ${styles.inputSpacing}`}
                placeholder="Senha"
                name="password"
                type="password"
                required
              />
              <button className="btn btn-primary" type="submit">
                Entrar
              </button>
            </form>
          </div>
        </div>
      </>
    );
 };

export default Auth;

