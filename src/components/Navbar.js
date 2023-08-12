import React from 'react'
import { Link } from "react-router-dom"
import { auth } from "../configuration/firebase"
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'


function Navbar() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const toDashboard = ()=>{
    navigate("/dashboard")
  }

  return (
    <div>
      <div class="app">
        <div class="header">
          <div class="header-menu">
            <a class="menu-link is-active" href="#">Rental</a>
          </div>
          <div class="search-bar">
            <input type="text" placeholder="Search" />
          </div>
          <div class="header-profile">
            <div class="notification">
              <span class="notification-number">0</span>
              <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
                <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
              </svg>
            </div>
            <img onClick={toDashboard} class="profile-img" src={user?.photoURL} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar