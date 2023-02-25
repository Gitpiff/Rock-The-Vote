import React, { useContext } from "react"
import './index.css'
import { Routes, Route, Navigate } from "react-router-dom"
import Nav from "./components/Navbar"
import Auth from "./components/Auth"
import Profile from "./components/Profile"
import Public from "./components/Public"
import { UserContext } from "./context/UserProvider"

function App() {
  const { token, logout } = useContext(UserContext)

  return (
    <div className="App">

     <Nav logout={logout}/>
        <Routes>
          <Route
            path="/"
            element= { token ? <Navigate to ="/profile" /> : <Auth/>}
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
