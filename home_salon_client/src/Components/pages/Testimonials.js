import React from 'react'

// params are just destructered from the testimonial model
export const Testimonials = ({ testimonial, name }) => {
  return (
    <div>
      <h1>Testimonials</h1>
      <h3>{name}</h3>
      <p>{testimonial}</p>
    </div>
  )
}
