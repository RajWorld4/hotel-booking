import React from 'react'
import  { testimonials } from '../assets/assets'
import StarRating from './StarRating'
const Testimonial = () => {
  return (
    <div className='bg-[#F4F9FC] flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 pt-20 pb-30'>
        <div className='max-w-2xl flex flex-col gap-2'>
             <h1 className='text-3xl text-center font-semibold'>What Our Guests Say</h1>
             <p className='text-sm text-center'>Discover why discerning travelers consistently choose QuickStay for their exclusive and luxurious accommodations around the world.
             </p>
        </div>
         <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 mt-20">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow">
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className="font-playfair text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.address}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                           <StarRating/>
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4">"{testimonial.review}"</p>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default Testimonial