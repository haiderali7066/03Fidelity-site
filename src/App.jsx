import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Services from './pages/Services'
import Partner from './pages/Partner'



const App = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
    <Routes>
      <Route>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="About" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="partner" element={<Partner/>} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
    <Footer></Footer>
  </BrowserRouter>
  )
}

export default App