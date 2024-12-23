import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import "./App.css";
import Home from "./views/pages/Home.tsx";
import Login from "./views/pages/Login.tsx";

function App() {
  return (
    <Router>
      <div className="App　h-full w-full">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/about" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
