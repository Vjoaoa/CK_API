import{ createContext, useState } from "react"

export const ThemeContext = createContext({})


const ThemaProvider =({children}) =>{
    const [theme, setTheme] = useState("light")    
    
    const handletheme=()=>{
        if (theme === "ligth") {
            setTheme("dark")
        }else{
            setTheme("light")
        }
    }
    return(
    <ThemaProvider.Provider value={{theme, handletheme}}>
        {children}
    </ThemaProvider.Provider>)
}

export default ThemeContext;
