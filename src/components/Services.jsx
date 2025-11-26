// Import React untuk membuat component dan hooks
import React, { useRef } from "react";

// Import data constants services
import { SERVICES_CONTENT } from "../constants";

// Import framer motion untuk animasi & deteksi viewport
import { motion, useInView } from "framer-motion";

// Component utama Services
const Services = () => {
  return (
    // Section pembungkus, id digunakan untuk anchor scroll
    <section className="max-w-7xl mx-auto border-b-2" id="services">
      <div className="my-20">

        {/* Judul Section */}
        <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-20">
          Services
        </h2>

        {/* Looping data SERVICES_CONTENT */}
        {SERVICES_CONTENT.map((service, index) => (
          // Render component tiap item
          <ServiceItem key={index} service={service} index={index} />
        ))}

      </div>
    </section>
  );
};

// --- Component item service ---
const ServiceItem = ({ service, index }) => {
  const ref = useRef(null); // ref untuk elemen DOM
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024; // cek mobile
  const inView = useInView(ref, { once: false, margin: "-50px" }); // deteksi saat muncul di layar

  const direction = index % 2 === 0 ? -100 : 100; // kiri = -100, kanan = 100

  return (
    <div className="mb-12 mx-4 flex flex-col lg:flex-row">
      
      {/* Wadah gambar + ref dipasang disini */}
      <div
        ref={ref}
        className={`lg:w-1/2 mb-4 lg:mb-0 ${index % 2 === 0 ? "" : "lg:order-2"}`}
      >

        {/* Jika mobile → pakai motion.img agar ada animasi */}
        {isMobile ? (
          <motion.img
            src={service.image} // ambil gambar dari data
            alt={service.title} // alt text
            className="w-full h-auto object-cover rounded-lg"
            initial={{ x: direction, opacity: 0 }} // posisi awal dari samping, transparan
            animate={inView ? { x: 0, opacity: 1 } : { x: direction, opacity: 0 }} // saat terlihat → geser ke tengah
            transition={{ duration: 0.6, ease: "easeOut" }} // setting smooth animasi
          />
        ) : (
          // Jika bukan mobile → tampil biasa tanpa animasi
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-auto object-cover rounded-lg"
          />
        )}

      </div>

      {/* Wadah teks */}
      <div
        className={`lg:w-1/2 flex flex-col ${index % 2 === 0 ? "lg:pl-12" : "lg:pr-12"}`}
      >
        {/* Judul item */}
        <h3 className="text-xl lg:text-2xl font-medium mb-2">
          {service.title}
        </h3>

        {/* Deskripsi item */}
        <p className="mb-4 text-lg lg:text-xl lg:leading-9">
          {service.description}
        </p>
      </div>

    </div>
  );
};

// Export agar bisa dipakai di file lain
export default Services;
