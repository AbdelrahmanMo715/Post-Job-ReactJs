import React from 'react'
import Button from './Button'
import { services2 } from '../data'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InsightsIcon from '@mui/icons-material/Insights';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import DescriptionIcon from '@mui/icons-material/Description';
import "../styles/Services.css";
function Services() {
  return (
    <div className='Services py-5'>
      <div className='services-header'>
       <p>Spend less time looking for work</p>
        <p>We'll help you through the hardest part of your job search.</p>
        <Button type="secondary dark">Create Account</Button>
      </div>
      <div className='container'>
      
      
      <div className='Services-List'>
      <div className='row'>
      {services2?.map((service) =>
           <div key={service.id} className='col-12 col-md-6 col-lg-4'>
              <div className='service' >
              <div className='icon'>{service.icon === "DescriptionIcon" ? <DescriptionIcon/> : service.icon === "InsightsIcon" ? <InsightsIcon/> : service.icon === "NearMeOutlinedIcon" ? <NearMeOutlinedIcon/> : service.icon === "GridViewOutlinedIcon" ? <GridViewOutlinedIcon/> : service.icon == "ViewInArIcon" ? <ViewInArIcon/>: <MailOutlineIcon/> }</div>
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

export default Services
