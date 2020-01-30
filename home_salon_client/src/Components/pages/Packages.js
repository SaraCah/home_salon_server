import React from 'react'

export const Packages = ({ packagename, price, services }) => {
  return (
    <div>
      <h1>{packagename}</h1>
      <h3>{price}</h3>
      {services.map(service => (
        <p>{service}</p>
      ))}
    </div>
  )
}
