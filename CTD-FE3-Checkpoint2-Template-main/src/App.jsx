import DetailProvider from "./Components/contests/detail";
import { SaveStorage } from "./Components/contests/SaveStorage";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ThemeContext from "./Components/ThemeContext";
import AppRoutes from "./Routes";


function App() {

  return (
    <ThemeContext>
    <BrowserRouter>
      <SaveStorage>
        <Navbar/>
        {/* //Na linha seguinte deverá ser feito um teste se a aplicação
          // está em dark mode e deverá utilizar a classe dark ou light */}
        <div className={`app light}`}>
          <Navbar />
          <main>
            <DetailProvider>
            <AppRoutes />
            </DetailProvider>
            <Outlet />
          </main>
          <Footer />
        </div>
      </SaveStorage>
    </BrowserRouter>
    </ThemeContext>
  );
}

export default App;
