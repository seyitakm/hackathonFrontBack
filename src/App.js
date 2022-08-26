import AuthContextProvider from "./contexts/AuthContextProvider";
import MainRoutes from "./MainRoutes";
import Navbar from "./components/Navbar";
import SpecialtiesContextProvider from "./contexts/SpecialtiesContextProvider";

function App() {
  return (
    <>
      <AuthContextProvider>
        <SpecialtiesContextProvider>
          <Navbar />
          <MainRoutes />
        </SpecialtiesContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
