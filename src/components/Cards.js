import React from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "../configuration/firebase";


function Cards(props) {
  const { post } = props;
  const [user] = useAuthState(auth);
  return (
    <div className='cards'>
        
  <div class="nft">
    <div class='main'>
      <img class='tokenImage' src={post.imgurl} alt="" />
      <h2>{post.property}</h2>
      <p class='description'>{post.description}</p>
      <div class='tokenInfo'>
        <div class="price">
          <ins>◘</ins>
          <p>{post.price} ₹</p>
        </div>
        <div class="duration">
          <ins>𖡡</ins>
          <p>{post.location}</p>
        </div>
      </div>
      <hr />
      <div class='creator'>
        <p><ins>Seller:</ins> {post.username}</p>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Cards