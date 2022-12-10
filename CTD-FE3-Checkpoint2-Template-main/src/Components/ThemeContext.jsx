import{ createContext } from "react"

export const ThemeContext = createContext({})

const ThemaProvider =({children}) =>{
    <ThemaProvider.Provider value={{thme: "light"}}>
        {children}
    </ThemaProvider.Provider>
}

export default ThemeContext;
