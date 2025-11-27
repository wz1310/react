import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portofolio from "./components/Portofolio";
import About from "./components/About";
import Review from "./components/Review";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

// --- COMPONENT SCROLL TO TOP ARROW ---
const ScrollTopArrow = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          whileTap={{ scale: 0.9 }}
          className="
            fixed bottom-6 right-6 p-3 rounded-full
            bg-white shadow-[0_4px_10px_rgba(0,0,0,0.06)]
            border border-neutral-200
            flex items-center justify-center
          "
          style={{ zIndex: 999 }}
        >
          {/* Panah SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="text-neutral-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// --- MAIN APP ---
const App = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
      <Navbar />
      <Hero />
      <Services />
      <Portofolio />
      <About />
      <Review />
      <ContactUs />
      <Footer />

      {/* PANAH KE ATAS */}
      <ScrollTopArrow />
    </main>
  );
};

export default App;
