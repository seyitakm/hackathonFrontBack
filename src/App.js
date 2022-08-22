import AuthContextProvider from "./contexts/AuthContextProvider";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <>
      <AuthContextProvider>
        <MainRoutes />
      </AuthContextProvider>
    </>
  );
}

export default App;
