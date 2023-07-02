import React from 'react'

const AddColor = () => {
  return (
    <div>
      <h3 className="mb-4">Add color</h3>
      <form>
        <div className="input-group flex-nowrap">
          <input type="color" class="form-control" placeholder="Enter color" aria-label="email" aria-describedby="addon-wrapping"/>
        </div>
        <div className='d-flex justify-content-center mt-3'>
          <button type="submit" className="btn btn-primary mt-20 w-50">Add color</button>
        </div>
      </form>
    </div>
  )
}

export default AddColor