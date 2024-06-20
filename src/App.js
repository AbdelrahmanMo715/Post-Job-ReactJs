import React from 'react'
import NavBar from './componentes/NavBar.js';
import './App.css';
import Hero from './componentes/Hero.js';
import submitStatic from './componentes/SubmitStatic.js';
import SubmitStatic from './componentes/SubmitStatic.js';
import Services from './componentes/Services.js';
import NavigateSec from './componentes/NavigateSec.js';
import DesignSec from './componentes/DesignSec.js';
import Footer from './componentes/Footer.js';
function App() {
  return (
    <div className='app'>
      <NavBar/>
      <Hero/>
      <SubmitStatic/>
      <Services/>
      <NavigateSec/>
      <DesignSec/>
      <Footer/>
    </div>
  )
}

export default App
