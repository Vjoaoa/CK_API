import { Children, useState } from "react";
import { useEffect } from "react";
import { createContext} from "react";

import api from "../../services/api";

export const DetailContext = createContext({});

const DetailProvider =({Children})=>{
    const [detista, setDentista] = useState([])
  
    async function getDentista() {
        try {
          const response = await api.get("/dentista");
          setDentista(response.data);
        } catch (error) {
          console.log("Error" + error);
        }  
      }

    useEffect(()=>{
        getDentista
    },[])

    return(
        <DetailProvider.Provider value={{detista}}>
            {{Children}}
        </DetailProvider.Provider>
    )

;
}
export default DetailProvider