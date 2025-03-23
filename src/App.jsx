import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marquee from './Components/Marquee'

const App = () => {
  return (
    <div className='w-full h-screen'>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
    </div>
  )
}

export default App