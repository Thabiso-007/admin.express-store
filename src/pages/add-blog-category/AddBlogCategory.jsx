import React from 'react'

const AddBlogCategory = () => {
  return (
    <div>
        <h3 className="mb-4">Add blog category</h3>
        <form>
            <div className="input-group flex-nowrap">
                <input type="text" class="form-control" placeholder="Enter blog category" aria-label="email" aria-describedby="addon-wrapping"/>
            </div>
            <div className='d-flex justify-content-center mt-3'>
                <button type="submit" className="btn btn-primary mt-20 w-50">Add Blog Category</button>
            </div>
        </form>
    </div>
  )
}

export default AddBlogCategory