import React from 'react'
import "../styles/Hero.css"
import Button from './Button';
import { services } from '../data'
import DescriptionIcon from '@mui/icons-material/Description';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import TabUnselectedIcon from '@mui/icons-material/TabUnselected';

function Hero() {
  return (
    <div className='hero'>
      <div className='container'>
            <div className='Hero-Top' >
            <h1> <span style={{color:"#6de754"}}>Win your dream job</span> with PostJob</h1>
            <p>Submit better job app — 10x faster. 
                AI cover letter generator,
             resume keyword checker, outreach message writer, and more. Powered by GPT
             </p>
             <form>
                <input type='mail' placeholder='Your Email'/>
                <Button type="primary" className="sub-Btn">Start For Free</Button>
             </form>
             </div>
      
      <div className='Hero-bottom' >
            <div className='row'>
            {services?.map((service) =>
                 <div key={service.id} className='col-12 col-md-6 col-lg-4'>
                    <div className='service'>
                    <div className='icon'>{service.icon === "DescriptionIcon" ? <DescriptionIcon/> : service.icon === "PodcastsIcon" ? <PodcastsIcon/> : <TabUnselectedIcon/>}</div>
                    <p>{service.title}</p>
                    <p>{service.description}</p>
                 </div>
                </div>)}
                
            </div>
      </div>
      </div>
    </div>
  )
}

export default Hero
