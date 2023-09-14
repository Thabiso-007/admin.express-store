import React from 'react';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Dropzone from "react-dropzone";

const AddProduct = () => {
    return (
        <>
            <div className="text-center">
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Add product</button>
        </div>
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add product</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label for="product-title" className="col-form-label">Enter Product Title:</label>
                    <input type="text" className="form-control" id="product-title" />
                  </div>
                  <div className="">
                    <ReactQuill
                      theme="snow"
                      name="description"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="product-price" className="col-form-label">Enter Product price:</label>
                    <input type="number" className="form-control" id="product-price" />
                  </div>
                  <div>
                    <select
                      name="brand"
                      className="form-control py-2 mb-2"
                      id=""
                    >
                      <option value="">Select Brand</option>
                      <option  value="">Apple</option>
                    </select>
                  </div>
                  <div>
                    <select
                      name="brand"
                      className="form-control py-2 mb-2"
                      id=""
                    >
                      <option value="">Select Category</option>
                      <option  value="">Apple</option>
                    </select>
                  </div>
                  <div>
                    <select
                      name="brand"
                      className="form-control py-2 mb-2"
                      id=""
                    >
                      <option value="">Featured</option>
                      <option  value="">Popular</option>
                      <option  value="">Special</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label for="product-title" className="col-form-label">Select a color:</label>
                    <input type="color" className="form-control" id="product-title" />
                  </div>
                  <div className="mb-3">
                    <label for="product-quantity" className="col-form-label">Enter Product Quantity:</label>
                    <input type="number" className="form-control" id="product-quantity" />
                  </div>
                  <div className="bg-white border-1 p-5 text-center">
                    <Dropzone>
                      {({ getRootProps, getInputProps }) => (
                        <section>
                          <div {...getRootProps()}>
                            <input {...getInputProps()} />
                             <p>
                              Drag 'n' drop some files here, or click to select files
                            </p>
                          </div>
                        </section>
                      )}
                    </Dropzone>
                   </div>
                   <div className="showimages d-flex flex-wrap gap-3">              
                    <div className="position-relative">
                      <button
                        type="button"
                        className="btn-close position-absolute"
                        style={{ top: "10px", right: "10px" }}
                      ></button>
                      <img src={'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80'} alt="" width={200} height={200} />
                    </div> 
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Add Product</button>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default AddProduct