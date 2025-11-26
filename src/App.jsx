import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portofolio from './components/Portofolio'

const App = () => {
  return (
    <main className='overflow-x-hidden antialiased text-neutral-800'>
      <Navbar></Navbar>
      <Hero></Hero>
      <Services></Services>
      <Portofolio></Portofolio>
    </main>
  )
}

export default App