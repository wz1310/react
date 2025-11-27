import { RiFacebookFill, RiInstagramFill, RiTwitterFill } from '@remixicon/react'
import React from 'react'

const Footer = () => {
  return (
    <footer className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center
        border-t-2 py-4'>
            <div className='flex space-x-6 mb-2'>
                <a href='https://facebook.com' target='_blank'
                rel='noopener noreferrer'
                aria-label='Visit Our Facebook'>
                    <RiFacebookFill/>
                </a>
                <a href='https://twitter.com' target='_blank'
                rel='noopener noreferrer'
                aria-label='Visit Our Twitter'>
                    <RiTwitterFill/>
                </a>
                <a href='https://instagram.com' target='_blank'
                rel='noopener noreferrer'
                aria-label='Visit Our Instagaram'>
                    <RiInstagramFill/>
                </a>
            </div>
            <p className='text-sm'>&copy; 2025 Wiza. All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer