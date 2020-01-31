import React, { useState } from 'react'

const CreatePackage = () => {
  const [package, setPackage] = useState({
    name: '',
    price: '',
    services: []
  })

  const { name, price, services } = package

  const onChange = e =>
    setPackage({ ...package, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault()
  }
  return (
    <div>
      <form onSubmit={e => onsubmit(e)}>
        <label>
          Package:
          <input
            type='text'
            placeholder='Package Name'
            name='name'
            value={name}
            onChange={e => onChange(e)}
            required
          />
        </label>
        <label>
          Price:
          <input
            type='text'
            placeholder='Price'
            name='price'
            value={price}
            onChange={e => onChange(e)}
            required
          />
        </label>
        <label>
          Services:
          <input
            type='text'
            placeholder='Services'
            name='services'
            value={services}
            onChange={e => onChange(e)}
            required
          />
        </label>
      </form>
    </div>
  )
}

export default CreatePackage
