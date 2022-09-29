import AuthContextProvider from "./contexts/AuthContextProvider";
import MainRoutes from "./MainRoutes";
import Navbar from "./components/Navbar";
import SpecialtiesContextProvider from "./contexts/SpecialtiesContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";

import ContactUsContext from "./contexts/ContactUsContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <SpecialtiesContextProvider>
          <ContactUsContext>
            <CartContextProvider>
              <Navbar />
              <MainRoutes />
            </CartContextProvider>
          </ContactUsContext>
        </SpecialtiesContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
