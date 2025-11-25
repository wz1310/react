import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'

const App = () => {
  return (
    <main className='overflow-x-hidden antialiased text-neutral-800'>
      <Navbar></Navbar>
      <Hero></Hero>
      <Services></Services>
    </main>
  )
}

export default App