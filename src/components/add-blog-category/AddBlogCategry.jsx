import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from "formik";

import {
  createNewblogCat,
  getABlogCat,
  resetState,
  updateABlogCat,
} from "../../features/blog-category/blogCategorySlice";
import { blogCategorySchema } from '../../utils/validation';

const AddBlogCategry = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const getBlogCatId = location.pathname.split("/")[3];

  const newBlogCategory = useSelector((state) => state.blogCat);
  const {
    isSuccess,
    isError,
    isLoading,
    createBlogCategory,
    blogCatName,
    updatedBlogCategory,
  } = newBlogCategory;

  useEffect(() => {
    if (getBlogCatId !== undefined) {
      dispatch(getABlogCat(getBlogCatId));
    } else {
      dispatch(resetState());
    }
  }, [getBlogCatId, dispatch]);

  useEffect(() => {
    if (isSuccess && createBlogCategory) {
      toast.success("Blog Category Added Successfullly!");
    }
    if (isSuccess && updatedBlogCategory) {
      toast.success("Blog Category Updated Successfullly!")
    }
    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading, createBlogCategory, updatedBlogCategory]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: blogCatName || "",
    },
    validationSchema: blogCategorySchema,
    onSubmit: (values) => {
      const data = { id: getBlogCatId, blogCatData: values };
      if (getBlogCatId !== undefined) {
        dispatch(updateABlogCat(data));
        dispatch(resetState());
      } else {
        dispatch(createNewblogCat(values));
        formik.resetForm();
        setTimeout(() => {
          dispatch(resetState());
        }, 300);
      }
    },
  });
  return (
    <>
        <div className="text-center">
          <button 
            type="button" 
            className="btn btn-primary" 
            data-bs-toggle="modal" 
            data-bs-target="#blogCat" 
            data-bs-whatever="@getbootstrap">
              {getBlogCatId !== undefined ? "Edit" : "Add"} Blog Category
            </button>
        </div>
        <div className="modal fade" id="blogCat" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">{getBlogCatId !== undefined ? "Edit" : "Add"} Blog Category</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="category-name" className="col-form-label">Enter blog category name:</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="category-name" 
                      onChange={formik.handleChange("title")}
                      onBlur={formik.handleBlur("title")}
                      value={formik.values.title}
                    />
                  </div>
                  <div className="error">
                    {formik.touched.title && formik.errors.title}
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={formik.handleSubmit}>
                      {getBlogCatId !== undefined ? "Edit" : "Add"} Blog Category
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default AddBlogCategry