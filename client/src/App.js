import React from "react"
//import './App.css'
import { Routes, Route, Navigate } from "react-router-dom"
import Nav from "./components/Navbar"
import Auth from "./components/Auth"
import Profile from "./components/Profile"
import Public from "./components/Public"
//import { UserContext } from "./context/UserProvider"

function App() {
  return (
    <div className="App">

      {/* //const { token } = useContext(UserContext) */}

      {/* //const { token, logout } = useContext(UserContext) */}

     <Nav />
        <Routes>
          {/* <Route
            path="/"
            element= { token ? <Navigate to ="/profile" /> : <Auth/>}
          /> */}
          <Route
          path="/"
          element={<Auth />}
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
