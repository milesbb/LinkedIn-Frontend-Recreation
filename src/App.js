import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* PUT NAVBAR HERE */}
      <BrowserRouter>
        <Router>{/* ADD ROUTES HERE */}</Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
