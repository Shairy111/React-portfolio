import "./App.css";
import { BrowserRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Nav from "./components/Nav";
import Router from "./components/router";
import { AuthContextProvider } from "./context/AuthContext";
function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Nav />
        <Router />
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
