import React from "react"
//import './App.css'
import { Routes, Route } from "react-router-dom"
import Nav from "./components/Navbar"
import Auth from "./components/Auth"
import Profile from "./components/Profile"
import Public from "./components/Public"

function App() {
  return (
    <div className="App">
    
        <Routes>
          <Route
            path="/"
            element= {<Auth/>}
          />
          <Route
            path="/profile"
            element= {<Profile/>}
          />
          <Route
            path="/public"
            element= {<Public/>}
          />
        </Routes>

    </div>
  );
}

export default App;
