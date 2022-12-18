import React from 'react'
import './App.css'
import About from './component/About/About'
import Contact from './component/Contact/Contact'
import Footer from './component/Footer/Footer'
import Home from './component/Home/Home'
import Portfolio from './component/Portfolio/Portfolio'

function App() {
  return (
    <div>
      <Home/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App