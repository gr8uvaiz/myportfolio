import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <Navbar />
      <Home/>
      <About/>
      <Portfolio/>
      <SocialLinks/>
      <Skills/>
      <Contact/>
    </>
  )
}

export default App
