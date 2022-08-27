import AuthContextProvider from "./contexts/AuthContextProvider";
import MainRoutes from "./MainRoutes";
import Navbar from "./components/Navbar";
import SpecialtiesContextProvider from "./contexts/SpecialtiesContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";

function App() {
  return (
    <>
      <AuthContextProvider>
        <SpecialtiesContextProvider>
          <CartContextProvider>
            <Navbar />
            <MainRoutes />
          </CartContextProvider>
        </SpecialtiesContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
