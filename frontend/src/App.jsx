/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet, Link } from "react-router-dom"

import "./assets/css/index.css"
import Logo from "./assets/Logo.png" 
import { config } from "./config/config.js"

const App = () => {

  return (
    <div className='body'>
      <nav className="navbar">
        <div className="left">
          <div className="logo">
            <img src={Logo} alt="logo"  />
          </div>
          <div className="logo-text">Pampa-Gudvibes</div>
        </div>
        <div className="right">
          <ul>
            <li><a href={config.github}>Support me</a></li>
            <li><Link>Login</Link></li>
          </ul>
        </div>
      </nav>
      <main className="app">
          <Outlet />
      </main>
      <footer className="footer">
        <p className='footer-text'>
          Copyright &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  )
}

export default App