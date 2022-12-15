import home from "../Routes/Home";
import api from "../services/api";
import styles from "./Form.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
 import { SaveStorage} from "./contests/SaveStorage"; 
import { useContext } from "react";



const Auth = () => {
 
    const {saveStorageData} = useContext(SaveStorage)

    const [username, setUsername] = useState("dentistaAdmin");
    
    const [password, setPassword] = useState("admin123");
    const navigate = useNavigate();

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
      
      saveStorageData({
        token: response.data.token
      })
      
      navigate("/home");

      }catch(error){
        
      alert("Erro ao fazer login, tente novamente "+ error);

      }
    
  }

    return (
      <>
        {/* //Na linha seguinte deverá ser feito um teste se a aplicação
          // está em dark mode e deverá utilizar o css correto */}
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
              <button 
              className="btn btn-primary" type="submit">
                Entrar
              </button>
            </form>
          </div>
        </div>
      </>
    );

    //Nesse handlesubmit você deverá usar o preventDefault,
    //enviar os dados do formulário e enviá-los no corpo da requisição 
    //para a rota da api que faz o login /auth
    //lembre-se que essa rota vai retornar um Bearer Token e o mesmo deve ser salvo
    //no localstorage para ser usado em chamadas futuras
    //Com tudo ocorrendo corretamente, o usuário deve ser redirecionado a página principal,com react-router
    //Lembre-se de usar um alerta para dizer se foi bem sucedido ou ocorreu um erro
  };

export default Auth;
