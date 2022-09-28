import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import PostsPage from "./components/PostsPage";
import NavFunction from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <NavFunction />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PostsPage />} />
          <Route path="/profiles/me" element={<ProfilePage />} />
          <Route path="/profiles/:userId" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
