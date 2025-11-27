import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portofolio from './components/Portofolio'
import About from './components/About'
import Review from './components/Review'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className='overflow-x-hidden antialiased text-neutral-800'>
      <Navbar></Navbar>
      <Hero></Hero>
      <Services></Services>
      <Portofolio></Portofolio>
      <About></About>
      <Review></Review>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </main>
  )
}

export default App