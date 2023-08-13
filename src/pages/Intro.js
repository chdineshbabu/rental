import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../configuration/firebase";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import "./intros.css";
import googleLogo from '../Asserts/google-logo.png';
 
function Intro() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval = null;
  const navigate = useNavigate();
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/home");
  };
  
  const signUpWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/dashboard");
  };

  const handleSignUpClick = () => {
    setIsSignUpActive(true);
  };

  const handleSignInClick = () => {
    setIsSignUpActive(false);
  };

  return (
    <div class="cont">
      
     
    <div className="intro">
      <h1 className="font-primary" style={{fontSize:"36px"}}>Apartment Rental </h1>
      {isSignUpActive? <h2 style={{fontSize:"25px",fontWeight:"600"}}>Seller Login</h2>:<h2 style={{fontSize:"25px",fontWeight:"600"}}>Buyer Login</h2>}
      <br />
      <div className={`container ${isSignUpActive ? "right-panel-active" : ""}`} id="container">

	  <div class="form-container sign-up-container">
						<form action="#">
							<h1>Create Account</h1>
							<div class="social-container">

								<img style={{
                  marginLeft:"45px",
                  cursor:"pointer"
                }} onClick={signUpWithGoogle}  src={googleLogo} alt="logo" />

								<span>or use your account</span>
								 
								<input type="email" placeholder="Email" />
								<input type="password" placeholder="Password" />
                
								<button>Sign Up</button>
							</div>
						</form>
					</div>
					<div class="form-container sign-in-container">
						<form action="#">
							<h1>Sign in</h1>
							<div class="social-container">

								<img onClick={signInWithGoogle} style={{cursor:"pointer"}} src={googleLogo} alt="logo" />
							</div>
							<span>or use your account</span>
							<input type="email" placeholder="Email" />
							<input type="password" placeholder="Password" />
							<a href="#">Forgot your password?</a>
							<button>Sign In</button>
						</form>
					</div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Are you a Buyer?</h1>
              <p>To login as a buyer click here!</p>
              <button className="ghost" onClick={handleSignInClick}>Click me</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Are you a Seller?</h1>
              <p>Let us be a partner in your journey to sell your property.</p>
              <button className="ghost" onClick={handleSignUpClick}>Join now!</button>
            </div>
          </div>
        </div>
      </div>
      <p style={{fontSize:'15px',fontWeight:"400"}}> <b>Note: </b>Use only Sign in with google</p>
    </div>
     
    
    </div>
  );
}

export default Intro;
