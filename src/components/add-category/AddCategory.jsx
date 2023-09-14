import React from 'react'

const AddCategory = () => {
  return (
    <>
        <div className="text-center">
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addCategory" data-bs-whatever="@getbootstrap">Add Category</button>
        </div>
        <div className="modal fade" id="addCategory" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add Category</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label for="category-name" className="col-form-label">Enter category name:</label>
                    <input type="text" className="form-control" id="category-name" />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Add Category</button>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default AddCategory