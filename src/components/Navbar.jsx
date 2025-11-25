import React, { useState } from 'react'          // Import React dan hook useState
import logo from '../assets/logo.webp'           // Import file gambar logo
import { RiCloseLine, RiMenu3Line } from '@remixicon/react'   // Import ikon menu & close
import { LINKS } from '../constants'             // Import daftar menu dari file constants

// Komponen Navbar
const Navbar = () => {

  // State untuk menampung status menu (true = terbuka, false = tertutup)
  const [isOpen, setIsOpen] = useState(false)

  // Fungsi untuk membuka/menutup menu mobile
  const toggleMenu = () => {
    setIsOpen(!isOpen)                           // Balik nilai isOpen tiap klik
  }

  return (
    <nav className='border-b-1'>                 {/* Elemen navbar utama */}

      <div className='max-x-7xl mx-auto flex justify-between items-center py-8'>
        {/* Wrapper utama untuk logo + menu versi desktop + tombol mobile */}

        <div className='pl-2'>
          <a href='/'>                           {/* Link menuju atas halaman */}
            <img
              src={logo}
              width={150}
              height={15}
              alt="Vastuspaze"
            />                                   {/* Logo */}
          </a>
        </div>

        {/* Tombol menu MOBILE (ikon hamburger / close), hanya tampil di layar kecil */}
        <div className='md:hidden'>
          <button
            onClick={toggleMenu}                 // Klik untuk buka/tutup menu
            className="text-2xl pr-2 focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}  // Untuk aksesibilitas
          >
            {isOpen ? <RiCloseLine /> : <RiMenu3Line />}      {/* Ganti ikon sesuai state */}
          </button>
        </div>

        {/* Menu versi DESKTOP, tampil hanya di layar medium ke atas */}
        <div className='hidden md:flex space-x-8 md:space-x-4 pr-2'>
          {LINKS.map((link, index) => (
            <a
              key={index}                        // key agar React efisien saat render
              href={link.link}                  // Link tujuan
              className='uppercase text-sm font-medium'
            >
              {link.name}                        {/* Nama menu */}
            </a>
          ))}
        </div>

      </div>

      {/* MENU MOBILE — muncul hanya kalau isOpen = true */}
      <div
        className={`${isOpen ? "block" : "hidden"} 
                    md:hidden absolute bg-neutral-50 w-full 
                    py-5 px-4 mt-2 border-b-4`}
      >
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.link}
            className='uppercase text-lg font-medium block py-2 tracking-wide'
          >
            {link.name}                          {/* Nama item menu */}
          </a>
        ))}
      </div>

    </nav>
  )
}

export default Navbar                           // Export komponen agar bisa digunakan di file lain
