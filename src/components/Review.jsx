import React from 'react'
import { REVIEWS } from '../constants'

const Review = () => {
  return (
    <section className='max-w-7xl mx-auto border-b-2' id='reviews'>
        <div className='my-20'>
            <h2 className='text-xl lg:text-3xl tracking-tight text-center
            uppercase mb-12'>Reviews</h2>
            <p className='max-w-2xl text-lg mb-12 text-center mx-auto'>
                {REVIEWS.text}
            </p>
            <div className='flex flex-wrap justify-center'>
                {REVIEWS.reviews.map((review,index)=>(
                    <div key={index} className='mt-10 flex flex-col items-center
                    justify-center rounded-2xl border border-neutral-300
                    p-10 mx-2 max-w-xs'></div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Review