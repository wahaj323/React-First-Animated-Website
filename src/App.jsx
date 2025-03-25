import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Eyes from './Components/Eyes'
import LocomotiveScroll from 'locomotive-scroll';
import Feautured from './Components/Feautured'

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-screen'>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Feautured/>
    </div>
  )
}

export default App