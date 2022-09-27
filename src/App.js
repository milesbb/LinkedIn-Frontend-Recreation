import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import { BrowserRouter, Router } from "react-router-dom";
import NavFunction from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <NavFunction/>
    </div>
  );
}

export default App;
