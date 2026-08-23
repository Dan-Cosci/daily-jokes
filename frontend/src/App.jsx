/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from "react-router-dom"
import "./assets/css/index.css"
import Logo from "./assets/Logo.png" 

const App = () => {
  return (
    <>
      <nav className="navbar">
        <div className="left">
          <div className="logo">
            <img src={Logo} alt="logo" width={80} />
          </div>
          <div className="logo-text">Pampa-Gudvibes</div>
        </div>
        <div className="right">
          <ul>
            <li>Support me</li>
            <li>Login</li>
          </ul>
        </div>
      </nav>
      <main className="app">
          <Outlet />
      </main>
      <footer className="foooter">

      </footer>
    </>
  )
}

export default App