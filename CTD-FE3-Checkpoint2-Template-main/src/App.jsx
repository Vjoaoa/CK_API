import DetailProvider from "./Components/contests/detail";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ThemeContext from "./Components/ThemeContext";
import AppRoutes from "./Routes";


function App() {

  return (
    <ThemeContext>
    <BrowserRouter>
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
    </BrowserRouter>
    </ThemeContext>
  );
}

export default App;
