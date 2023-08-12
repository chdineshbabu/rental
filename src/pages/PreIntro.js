import React from 'react'
import "./intros.css";
import { Link } from 'react-router-dom';
import home from "./home.png";
function PreIntro() {
  return (
    <div>
      <div className="pintro">
      <div class="cont">
       <section class="parallax">
     
    <h1 class="maintex hp" data-value="HYPERPLEXED">Welcome to   Apartment Rental</h1>
    <img class="homeim" src={home}  />
    <button class="">Sign Up</button>
    </section>
    </div>
    </div></div>
  );
}

export default PreIntro