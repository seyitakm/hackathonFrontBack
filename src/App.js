import AuthContextProvider from "./contexts/AuthContextProvider";
import MainRoutes from "./MainRoutes";
import Navbar from "./components/Navbar";
import ProductContextProvider from "./contexts/ProductContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <ProductContextProvider>
          <Navbar />
          <MainRoutes />
        </ProductContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
