import React from 'react'

const AddBrand = () => {
  return (
    <div>
        <h3 className="mb-4">Add brand</h3>
        <form>
            <div className="input-group flex-nowrap">
                <input type="text" class="form-control" placeholder="Enter brand" aria-label="email" aria-describedby="addon-wrapping"/>
            </div>
            <div className='d-flex justify-content-center mt-3'>
                <button type="submit" className="btn btn-primary mt-20 w-50">Add brand</button>
            </div>
        </form>
    </div>
  )
}

export default AddBrand