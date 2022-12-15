import { useEffect, useReducer, useState } from "react";
import { createContext} from "react";

export const SaveStorage = createContext({});

const SaveStorageProvider =( {Children} )=>{

    const [dataStorage, setDataStorage] = useState({});

    function saveStorageData({ token }){
        localStorage.setItem("@dentista-token", JSON.sttringify({token}))

       setDataStorage({...dataStorage, token})
       
    }

    useEffect(()=>{
        const response = localStorage.getItem("@dentista-token")

        let  dentista;

        if (response) {
            dentista = JSON.parse(dentista)

            saveStorageData({ token: useReducer.token })
        }

    },[])

    // function saveStorageData (dataStorage){
    //     if(resp.dataStorage.token){
    //         localStorage.setItem("@dentista-token", dataStorage)
    //     console.log(resp);
    //     }
    // }
    
    return(
        <SaveStorage.Provider
        value={{saveStorageData}}
        >
            {Children}
        </SaveStorage.Provider>
    )

}

export default SaveStorageProvider