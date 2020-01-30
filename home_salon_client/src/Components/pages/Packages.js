import React from 'react'

const Packages = ({ packagename, price, services }) => {
  return (
    <div>
      <h1>Packages</h1>
      <h1>{packagename}</h1>
      <h3>{price}</h3>
      {services.map(service => (
        <p>{service}</p>
      ))}
    </div>
  )
}

export default Packages
