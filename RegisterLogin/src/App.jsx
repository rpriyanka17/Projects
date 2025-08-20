import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";

function App() {
  const buttonStyle = {
    padding: "10px 20px",
    margin: "10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#0288d1",
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
    textDecoration: "none"
  };

  return (
    <Router>
      <div style={{ textAlign: "center", margin: "20px" }}>
        <Link to="/register" style={buttonStyle}>Register</Link>
        <Link to="/login" style={buttonStyle}>Login</Link>
      </div>

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Register />} /> {/* default page */}
      </Routes>
    </Router>
  );
}

export default App;
