import React from 'react'
import '../styles/Footer.css'
import Button from '../componentes/Button.js';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
            <div className='foot-header'>
                    <h2>What’s next</h2>
                    <p>Submit better job app — 10x faster. AI cover letter generator, 
                    resume keyword checker, outreach message writer, and more. Powered by GPT</p>
                    <Button type="secondary light">Try For Free</Button>
            </div>
            <div className='row text-center text-md-start'>
                <div className='col-12 col-md-6 col-lg-3 mb-3'>
                        <h6>Platform</h6>
                        <ul>
                            <li>Plans and Prices</li>
                            <li>AI Create Letters</li>
                            <li>AI Resume Checker</li>
                            <li>Resume Templates</li>
                            <li>Sell Templates</li>
                            <li>Blog</li>
                        </ul>
                </div>
                <div className='col-12 col-md-6 col-lg-3 mb-3'>
                <h6>Features</h6>
                        <ul>
                            <li>AI Cover Letter Creator</li>
                            <li>Resume Keywords Optimizer</li>
                            <li>ATS Resume Checker</li>
                        </ul>

                </div>
                <div className='col-12 col-md-6 col-lg-3 mb-3'>
                <h6>Resources</h6>
                <ul>
                    <li>4 AI Tools for Applying a Job</li>
                    <li>How to optimize Resume keywords</li>
                    <li>Why you should use Chat GPT for create Resume</li>
                    <li>What should you include in a Cover Letter</li>
                </ul>

                </div>
                <div className='col-12 col-md-6 col-lg-3 mb-3'>
                    <h6>Support</h6>
                    <p>support@gmail.com</p>
                    <ul className='icon-list d-flex justify-content-center justify-content-md-start'>
                        <li><InstagramIcon/></li>
                        <li><FacebookOutlinedIcon/></li>
                        <li><LinkedInIcon/></li>
                        <li><TelegramIcon/></li>
                    </ul>

                </div>
            </div>
            <hr/>
            <div className='copyright text-center mt-4 '>
                <p>&copy; Copywriting | All Rights Reserved | Terms of Use | Privacy</p>
            </div>
            
      </div>
    </div>
  )
}

export default Footer
