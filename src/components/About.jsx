import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import aboutImage from '../assets/about.webp'

const About = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768

  // Animasi mengecil & menghilang saat scroll kebawah
  const scale = useTransform(scrollYProgress, [0.1, 0.5, 0.8], [1, 0.6, 0.3])
  const opacity = useTransform(scrollYProgress, [0.1, 0.5, 0.8], [1, 0.5, 0])

  return (
    <section ref={ref} className='max-w-7xl mx-auto border-b-2 mt-20' id='about'>
      <h2 className='text-xl lg:text-3xl tracking-tight text-center uppercase mb-12 mx-4'>
        About
      </h2>

      <div className='flex flex-col items-center lg:space-x-8 mx-4 mb-20'>
        <div className='mb-8 lg:mb-0 w-full overflow-hidden'>
          <motion.img
            src={aboutImage}
            alt='About Me'
            className='w-full h-auto'
            style={isMobile ? { scale, opacity } : {}}
            transition={{ type: "tween", duration: 0.3 }}
          />
        </div>

        <p className='text-lg lg:text-3xl font-light text-center lg:text-left max-w-5xl mx-auto mt-8'>
          Kami adalah tim profesional di bidang Information Technology 
          yang berfokus pada solusi inovatif dan berdampak. Dengan pengalaman 
          dalam software development, IT support, network infrastructure, 
          dan sistem digital, kami membantu bisnis dan individu beradaptasi 
          di era teknologi yang terus berkembang. Kami percaya bahwa IT 
          bukan hanya tentang perangkat—tetapi tentang menciptakan sistem yang cepat, 
          aman, stabil, dan efisien untuk mendukung produktivitas tanpa batas. 
          Misi kami adalah membangun teknologi yang human-centered, mudah digunakan, 
          dan mampu memecahkan masalah nyata. Inovasi,
          ketepatan, dan komitmen adalah inti dari setiap langkah yang kami buat.
        </p>
      </div>
    </section>
  )
}

export default About
