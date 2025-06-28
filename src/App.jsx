import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Projets from './pages/Projets'
import Contact from './pages/Contact'

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
  AOS.init({
    duration: 2000,
    once: true,
  });
}, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projets" element={<Projets />} />
      </Routes>
    </>
  )
}

export default App
