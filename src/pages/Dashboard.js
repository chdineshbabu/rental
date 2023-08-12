import React from 'react'
import { Link } from "react-router-dom"
import { auth } from "../configuration/firebase"
import { useAuthState } from 'react-firebase-hooks/auth'
import DashCards from '../components/DashCards';
import DashForm from '../components/DashForm';


function Dashboard() {
  const [user] = useAuthState(auth);
  return (
    <div className='dashboard'>
      <div className='dash-container'>
        <div className='dash-top'>
          <h1>Rental</h1>
          <div className='dash-user'>
            <h3>{user?.displayName}</h3>
            <img class="profile-img" src={user?.photoURL} />
          </div>
        </div>
        <hr className='divider'/>
        <div className='dash-main'>
          <div className='dash-cardss'>
          <DashCards />
          <DashCards />
          <DashCards />
          <DashCards />
          <DashCards />
          <DashCards />
          <DashCards />
          </div>
          <div>
            <DashForm />
          </div>
        </div>
        
        </div>
        
    </div>
  )
}

export default Dashboard