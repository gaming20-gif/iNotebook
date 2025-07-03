import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Singup from "./components/Singup";
import { useState } from "react";
import Footer from "./components/Footer";
import Getstart from "./components/Getstart";
import Blog from "./components/Blog";
import Purpose from "./components/Purpose";
import Help from "./components/Help";
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <NoteState>
        <Router>
          <div className="d-flex flex-column min-vh-100">
            <Navbar />
            <Alert alert={alert} />
            <div className="flex-grow-1">
              <Routes>
                <Route
                  path="/about"
                  element={<About showAlert={showAlert} />}
                />
              
                  <Route path="/" element={<Home showAlert={showAlert} />} />
                  <Route path="/purpose" element={<Purpose showAlert={showAlert} />} />
                  <Route
                    path="/blog"
                    element={<Blog showAlert={showAlert} />}
                  />
                  <Route
                    path="/login"
                    element={<Login showAlert={showAlert} />}
                  />
                    <Route path="/help" element={<Help showAlert={showAlert} />} />
                  <Route
                    path="/singup"
                    element={<Singup showAlert={showAlert} />}
                  />
                  <Route
                    path="/getstart"
                    element={<Getstart showAlert={showAlert} />}
                  />
              
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
