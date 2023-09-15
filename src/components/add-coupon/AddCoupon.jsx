import React from 'react'

const AddCoupon = () => {
  return (
    <>
    <div className="text-center">
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addProduct" data-bs-whatever="@getbootstrap">Add coupon</button>
        </div>
        <div className="modal fade" id="addProduct" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add coupon</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label for="product-title" className="col-form-label">Enter coupon name:</label>
                    <input type="text" className="form-control" id="product-title" />
                  </div>
                  
                  <div className="mb-3">
                    <label for="product-price" className="col-form-label">Enter Expiry Data:</label>
                    <input type="date" className="form-control" id="product-price" />
                  </div>
                  <div className="mb-3">
                    <label for="product-title" className="col-form-label">Enter Discount:</label>
                    <input type="number" className="form-control" id="product-title" />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Add Coupon</button>
              </div>
            </div>
          </div>
        </div>
    </>  
  )
}

export default AddCoupon