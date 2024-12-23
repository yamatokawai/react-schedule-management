import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import "./App.css";
import Test from "./views/pages/Test.tsx";
import Login from "./views/pages/Login.tsx";

function App() {
  return (
    <Router>
      <div className="App　h-full w-full">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/about" element={<Test />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
