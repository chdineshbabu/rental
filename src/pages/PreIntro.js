import React from 'react'
import "./intros.css";
import { Link } from 'react-router-dom';
import home from "./home.png";
import { useNavigate } from 'react-router-dom';
import Typing from '../components/Typing';
function PreIntro() {
  const navigate = useNavigate();

  const toLogin = ()=>{
    navigate("/login")
  }
  return (
    <div>
      <div className="pintro">
      <div class="cont">
       <section class="parallax">
     
    <h1 class="maintex hp">Welcome to Rental</h1>
    <h3><Typing /></h3>
    <img class="homeim" src={home}  />
    <button onClick={toLogin} class="home-txt">Get Started</button>
    </section>
    </div>
    </div></div>
  );
}

export default PreIntro