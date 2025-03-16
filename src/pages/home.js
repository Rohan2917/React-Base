import React from "react"
import "../assets/css/home.css"
import websiteLogo from "../assets/images/website-logo.png"

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Home Page</h1>
      <img src={websiteLogo} alt="Site Logo" className="home-logo" />
      <p className="home-text">Welcome to the Home page</p>
    </div>
  )
}

export default Home
