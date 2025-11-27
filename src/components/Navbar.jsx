import React, { useState } from 'react'
import { motion } from 'framer-motion'
import logo from '../assets/wiza.png'
import { RiCloseLine, RiMenu3Line } from '@remixicon/react'
import { LINKS } from '../constants'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  // Scroll smooth + close menu mobile
  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    setIsOpen(false)

    const target = document.querySelector(targetId)
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  // Animasi zoom di menu navbar
  const navItemAnim = {
    whileTap: { scale: 1.2 },   // efek zoom saat klik ditekan
    transition: { type: "spring", stiffness: 300, damping: 15 }
  }

  return (
  <nav
    className="
      fixed top-0 w-full bg-white z-[1000] backdrop-blur-sm
    border-b border-neutral-200/40
    shadow-[0_20px_90px_rgba(255,220,50,0.45)]
    "
  >

    <div className='max-w-7xl mx-auto flex justify-between items-center py-3'>
      <div className='pl-2'>
        <a href='/'>
          <img src={logo} width={70} height={15} alt="Vastuspaze" />
        </a>
      </div>

      {/* Tombol MOBILE */}
      <div className='md:hidden'>
        <button onClick={toggleMenu} className="text-2xl pr-2 focus:outline-none">
          {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </button>
      </div>

      {/* Menu DESKTOP */}
      <div className='hidden md:flex space-x-6 pr-6'>
        {LINKS.map((link, i) => (
          <motion.a
            key={i}
            href={link.link}
            className='uppercase text-sm font-medium'
            {...navItemAnim}
            onClick={(e) => handleNavClick(e, link.link)}
          >
            {link.name}
          </motion.a>
        ))}
      </div>
    </div>

    {/* Menu MOBILE */}
    <div className={`${isOpen ? "block" : "hidden"} md:hidden absolute bg-white w-full py-5 px-4 border-b shadow-md`}>
      {LINKS.map((link, i) => (
        <motion.a key={i} href={link.link} className='block py-2 text-lg uppercase'
          onClick={(e) => handleNavClick(e, link.link)}
        >
          {link.name}
        </motion.a>
      ))}
    </div>

  </nav>
)

}

export default Navbar
