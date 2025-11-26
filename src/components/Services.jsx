// Meng-import React agar component bisa dipakai
import React from 'react'

// Meng-import data SERVICES_CONTENT yang berisi daftar service (gambar, judul, deskripsi)
import { SERVICES_CONTENT } from '../constants'

// Component Services dibuat sebagai function component
const Services = () => {
  return (
    // Section pembungkus, dibuat rapi di tengah dan ada border bawah
    <section className='max-w-7xl mx-auto border-b-2' id="services">

      {/* // Memberi jarak atas & bawah besar di halaman */}
      <div className='my-20'>

        {/* // Judul section services, tampil responsif (mobile kecil, desktop besar) dan rata tengah */}
        <h2 className='text-xl lg:text-3xl tracking-tight text-center uppercase mb-20'>
          Services
        </h2>

        {/* Map/loop data SERVICES_CONTENT untuk menampilkan tiap item */}
        {SERVICES_CONTENT.map((services, index) => (
          
          // Pembungkus tiap service, layout kolom di mobile dan row di desktop
          <div key={index} className='mb-12 mx-4 flex flex-col lg:flex-row'>

            {/* Wadah gambar service */}
            <div
              className={`lg:w-1/2 mb-4 lg:mb-0 ${
                index % 2 === 0 ? '' : 'lg:order-2'
              }`}
            >
              {/* Menampilkan gambar service */}
              <img
                src={services.image}
                alt={services.title}
                className='w-full h-auto object-cover rounded-lg'
              />
            </div>

            {/* Wadah teks (judul + deskripsi) */}
            <div
              className={`lg:w-1/2 flex flex-col ${
                index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'
              }`}
            >
              {/* Judul layanan */}
              <h3 className='text-xl lg:text-2xl font-medium mb-2'>
                {services.title}
              </h3>

              {/* Deskripsi layanan */}
              <p className='mb-4 lg:tracking-wide text-lg lg:text-xl lg:leading-9'>
                {services.description}
              </p>
            </div>

          </div>
        ))}

      </div>
    </section>
  )
}

// Export component agar bisa dipakai di file lain
export default Services
