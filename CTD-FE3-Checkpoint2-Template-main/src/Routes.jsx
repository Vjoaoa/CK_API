import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Routes/Home";
import Detail from "./Routes/Details/Detail";
import Login from "./Routes/Login/Login";
import ThemeContext from "./Components/ThemeContext";

const AppRoutes = () => {
    return (
      
        <BrowserRouter>
            
        <Routes>
            <Route path="" element={<Home />}>

                <Route path="/detail" element={<Detail />} />
                <Route path="/login" element={<Login />} />

            </Route>
        </Routes>
    
    </BrowserRouter>
    )
}

export default AppRoutes