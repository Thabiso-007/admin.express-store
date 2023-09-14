import React from 'react'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Dropzone from "react-dropzone";

const AddBlog = () => {
  return (
    <>
        <div className="text-center">
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addBlog" data-bs-whatever="@getbootstrap">Add Blog</button>
        </div>
        <div className="modal fade" id="addBlog" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add Blog</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label for="category-name" className="col-form-label">Enter blog name:</label>
                                <input type="text" className="form-control" id="category-name" />
                            </div>
                            <select
                                name="category"
                                className="form-control py-3  mt-3"
                                id=""
                            >
                                <option value="">Select Blog</option>
                                <option value=''>Blog 1</option>
                            </select>
                            <ReactQuill
                                theme="snow"
                                className="mt-3"
                                name="description"
                            />
                            <div className="bg-white border-1 p-5 text-center mt-3">
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
                            <div className="showimages d-flex flex-wrap mt-3 gap-3">
                                <div className=" position-relative">
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
                        <button type="button" className="btn btn-primary">Add Blog</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AddBlog