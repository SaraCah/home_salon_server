import React from 'react'

const Testimonialform = () => {
  return (
    <div>
      <form>
        <label>
          Name:
          <input type='text' name='name' />
        </label>
        <label>
          Comment:
          <input type='text' name='comment' />
        </label>
        <label>
          Date:
          <input type='text' name='date' />
        </label>
        <input type='submit' value='submit' />
      </form>
    </div>
  )
}

export default Testimonialform
