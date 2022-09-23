import "./App.css";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import Movie from "./pages/Movie";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import RegisterPage from "./pages/RegisterPage";
import UserList from "./pages/UserList";


function App() {
  

  return (
    
      <div className="App">
        <div className="app-navbar">
          <Navbar />
        </div>

        <div className="app-mid">
          <div className="app-sidebar"></div>

          <div className="app-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/userprofile" element={<UserProfile />} />
              <Route path="/userlist" element={<UserList />} />
              <Route path="/movie/:id" element={<Movie />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        </div>
        <div className="app-footer">
          <Footer />
        </div>
      </div>
  );
}

export default App;
