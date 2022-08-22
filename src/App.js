import AuthContextProvider from "./contexts/AuthContextProvider";
import MainRoutes from "./MainRoutes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <MainRoutes />
      </AuthContextProvider>
    </>
  );
}

export default App;
