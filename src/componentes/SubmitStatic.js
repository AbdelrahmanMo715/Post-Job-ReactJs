import React from 'react'
import '../styles/submitStatic.css';
import FlyImg from '../assets/image-app.png';
import overlayImg from "../assets/Overlay.png";
function SubmitStatic() {
  return (
    <div className='submitStatic'>
      <div className='submitHeader'>
            <p className='title'>Submit Better job applications</p>
            <h1>10x faster</h1>
            <p className='small-details'>AI cover letter generator,
             resume keyword checker, outreach message writer, and more.
              Powered by GPT
            </p>
      </div>
      <img className='real-img' src={FlyImg} alt=''/>
      <img className='overlay-img' alt="" src={overlayImg}/>
    </div>
  )
}

export default SubmitStatic
