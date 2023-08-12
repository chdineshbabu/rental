import React from 'react'
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'
import { auth } from "../configuration/firebase"
import { useAuthState } from 'react-firebase-hooks/auth'
import DashCards from '../components/DashCards';
import DashForm from '../components/DashForm';
import {getDocs, collection} from 'firebase/firestore'
import { db } from '../configuration/firebase'
import { useEffect, useState } from 'react'
import Footer from '../components/Footer'

function Home() {

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
    <div className='home'>
        <Navbar />
        <div className='card-grid'>
        {postsList?.map((post)=> <Cards post={post}/>)}
        </div>
        <Footer />
    </div>
  )
}

export default Home