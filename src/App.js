import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Router } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <div className="App">
      {/* PUT NAVBAR HERE */}
      <BrowserRouter>
        <Router>
          <Route path="/" element={<ProfilePage />} />
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
