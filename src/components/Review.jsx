import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { REVIEWS } from '../constants'

const truncate5 = (text) => {
  const words = text.split(" ")
  return words.length > 5 ? words.slice(0, 5).join(" ") + "..." : text
}

const Review = () => {
  const [selected, setSelected] = useState(null)

  return (
    <section
      className='max-w-7xl mx-auto border-b border-gray-200/30'
      id='reviews'
    >
      <div className='my-20'>
        <h2 className='text-xl lg:text-3xl tracking-tight text-center uppercase mb-12'>
          Reviews
        </h2>
        <p className='max-w-2xl text-lg mb-12 text-center mx-auto'>
          {REVIEWS.text}
        </p>

        <div className='flex flex-wrap justify-center'>
          {REVIEWS.reviews.map((review, index) => (
            <motion.div
              key={index}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelected(review)}
              className='mt-10 flex flex-col items-center justify-center cursor-pointer
                rounded-2xl border border-neutral-300 p-10 mx-2 max-w-xs shadow-sm'
            >
              <p className='mb-4 text-center'>{truncate5(review.review)}</p>

              <div className='flex items-center'>
                <img
                  src={review.image}
                  alt={review.name}
                  className='w-12 h-12 rounded-full mr-4'
                />
                <div>
                  <p className='text-sm font-bold'>{review.name}</p>
                  <p className='text-sm text-neutral-500'>{review.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            onClick={() => setSelected(null)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm flex justify-center items-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-md rounded-2xl p-6 shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <h3 className="text-lg font-bold mb-2 text-center">{selected.name}</h3>
              <p className="text-neutral-600 text-sm mb-4 text-center">{selected.title}</p>
              <p className="text-neutral-800 text-center whitespace-pre-line">{selected.review}</p>

              <button
                onClick={() => setSelected(null)}
                className="mt-5 w-full py-2 rounded-xl border border-neutral-300 text-sm"
              >
                Got it!
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Review
