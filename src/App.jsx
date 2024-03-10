import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Feature from './components/Feature'

const App = () => {
  return (
    <div className='w-full m-h-screen bg-zinc-900 text-white'>
       <Navbar/> 
       <LandingPage/>
       <Marquee/>
       <About/>
       <Eyes/>
       <Feature/>
    </div>
  )
}

export default App