import { useState } from "react";
import { createContext } from "react";

export const DetailContext = createContext({});

import api from "../../services/api";

const DetailProvider =({children})=>{
    const [detail, setDetail] = useState([])

    const [error, setError ] = useState(false)

    const[loading, setLoading] = useState(false)

   async function getDetail() {
    setLoading(true)
    try {
       const response = await api.get("/detail")

       setDetail(response.data)
    } catch (error) {
        setError(true)
    }finally{
        setLoading(false)
    }
   } 


    useEffect(() => {
        //Nesse useEffect, você vai fazer um fetch na api passando o 
        //id do dentista que está vindo do react-router e carregar os dados em algum estado
        getDetail({id});
      }, []);


    return(
        <DetailContext.Provider value={{detail, error, loading}}>
            {children}
        </DetailContext.Provider>
    )
};

export default DetailProvider;