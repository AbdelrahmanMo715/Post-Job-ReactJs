import  Button from '../componentes/Button.js'
import '../styles/NavigateSecStyle.css';
import React from 'react'
import Img1 from "../assets/Illustration.png";
import Img2 from "../assets/Illustration-2.png";
import Details from './Details.js';
function NavigateSec() {
  return (
    <div className='NavigatorSec'>
    <div className='container'>
    <div className='row'>
      <div className='col-12 col-md-6'>
        <Details Mode="light">
            <p>Free AI cover letter generator powered by GPT</p>
            <p>
            A free AI cover letter generator powered by GPT is a tool
             that uses artificial intelligence and natural language
             processing to help job seekers create customized and effective cover letters.
             </p>
             <Button type="secondary light">Try For free Now</Button>
        </Details>
      </div>
      <div className='col-12 col-md-6 d-flex justify-content-center align-items-center'>
        <img className='d-none d-md-block ' width="100%"  src={Img1} alt='img1'/>
      </div>
    </div>
    <div className='row'>
            <div className='col-12 col-md-6 d-flex justify-content-center align-items-center'>
              <img className='d-none d-md-block' width="100%" src={Img2} alt='img1'/>
            </div>
        <div className='col-12 col-md-6'>
        <Details Mode="light">
            <p>Optimize the keywords in your resume</p>
            <p>
            By optimizing keywords in your resume, 
            you can increase your chances of getting noticed by recruiters and landing interviews for the jobs you want.
             </p>
             <Button type="secondary light">Try For free Now</Button>
         </Details>
      </div>
     

    </div>
    </div>
      
    </div>
  )
}

export default NavigateSec
