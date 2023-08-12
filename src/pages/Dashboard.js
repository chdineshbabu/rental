import React from 'react'
import { auth } from "../configuration/firebase"
import { useAuthState } from 'react-firebase-hooks/auth'
import DashCards from '../components/DashCards';
import DashForm from '../components/DashForm';
import {getDocs, collection} from 'firebase/firestore'
import { db } from '../configuration/firebase'
import { useEffect, useState } from 'react'

function Dashboard() {
  const [user] = useAuthState(auth);
  const [postsList, setPostsList]  = useState(null)
  const postsRef = collection(db, 'sells')
  const getPosts = async() =>{
      const data = await getDocs(postsRef)
      setPostsList(data.docs.map((doc)=>({...doc.data(), id: doc.id })))
  }
  useEffect(()=>{
      getPosts();
  }, [])
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
          {postsList?.map((post)=> <DashCards post={post}/>)}
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