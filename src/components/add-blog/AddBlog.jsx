import React, { useEffect, useMemo } from 'react'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Dropzone from "react-dropzone";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";

import { delImg, uploadImg } from "../../features/uploads/uploadSlice";
import { getCategories } from "../../features/blog-category/blogCategorySlice";
import {
    createBlogs,
    getABlog,
    resetState,
    updateABlog,
} from "../../features/blogs/blogSlice";
import { blogSchema } from '../../utils/validation';

const AddBlog = () => {
    const dispatch = useDispatch();
  const location = useLocation();
  const getBlogId = location.pathname.split("/")[3];
  const imgState = useSelector((state) => state.upload.images);
  const bCatState = useSelector((state) => state.blogCat.bCategories);
  const blogState = useSelector((state) => state.blog);
  const {
    isSuccess,
    isError,
    isLoading,
    createdBlog,
    blogName,
    blogDesc,
    blogCategory,
    blogImages,
    updatedBlog,
  } = blogState;

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: blogName || "",
      description: blogDesc || "",
      category: blogCategory || "",
      images: "",
    },
    validationSchema: blogSchema,
    onSubmit: (values) => {
      if (getBlogId !== undefined) {
        const data = { id: getBlogId, blogData: values };
        dispatch(updateABlog(data));
        dispatch(resetState());
      } else {
        dispatch(createBlogs(values));
        formik.resetForm();
        setTimeout(() => {
          dispatch(resetState());
        }, 300);
      }
    },
  });

  const img = useMemo(() => [], []);

  useEffect(() => {
    if (getBlogId !== undefined) {
      dispatch(getABlog(getBlogId));
      img.push(blogImages);
    } else {
      dispatch(resetState());
    }
  }, [getBlogId, dispatch, blogImages, img]);

  useEffect(() => {
    dispatch(resetState());
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess && createdBlog) {
      toast.success("Blog Added Successfullly!");
    }
    if (isSuccess && updatedBlog) {
      toast.success("Blog Updated Successfullly!");
    }
    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading, createdBlog, updatedBlog]);

  useEffect(() => {
    formik.values.images = img;
  }, [blogImages, img, formik.values]);

  
  imgState.forEach((i) => {
    img.push({
      public_id: i.public_id,
      url: i.url,
    });
  });

  return (
    <>
        <div className="text-center">
          <button 
            type="button" 
            className="btn btn-primary" 
            data-bs-toggle="modal" 
            data-bs-target="#blog" 
            data-bs-whatever="@getbootstrap"
            >
              {getBlogId !== undefined ? "Edit" : "Add"} Blog
            </button>
        </div>
        <div className="modal fade" id="blog" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{getBlogId !== undefined ? "Edit" : "Add"} Blog</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={formik.handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="category-name" className="col-form-label">Enter blog name:</label>
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
                            <select
                                name="category"
                                className="form-control py-3  mt-3"
                                id=""
                                onChange={formik.handleChange("category")}
                                onBlur={formik.handleBlur("category")}
                                value={formik.values.category}
                            >
                                <option value="">Select Blog Category</option>
                                {bCatState.map((i, j) => {
                                    return (
                                        <option key={j} value={i.title}>
                                            {i.title}
                                        </option>
                                    );
                                })}
                            </select>
                            <div className="error">
                                {formik.touched.category && formik.errors.category}
                            </div>
                            <ReactQuill
                                theme="snow"
                                className="mt-3"
                                name="description"
                                onChange={formik.handleChange("description")}
                                value={formik.values.description}
                            />
                            <div className="error">
                                {formik.touched.description && formik.errors.description}
                            </div>
                            <div className="bg-white border-1 p-5 text-center mt-3">
                                <Dropzone
                                    onDrop={(acceptedFiles) => dispatch(uploadImg(acceptedFiles))}
                                >
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
                                {imgState?.map((i, j) => {
                                    return (
                                        <div className=" position-relative" key={j}>
                                            <button
                                                type="button"
                                                onClick={() => dispatch(delImg(i.public_id))}
                                                className="btn-close position-absolute"
                                                style={{ top: "10px", right: "10px" }}
                                            ></button>
                                            <img src={i.url} alt="" width={200} height={200} />
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button 
                                  type="button" 
                                  className="btn btn-primary">
                                    {getBlogId !== undefined ? "Edit" : "Add"} Blog
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

export default AddBlog