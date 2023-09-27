import React, { useEffect, useState, useMemo } from 'react';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Dropzone from "react-dropzone";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Select } from "antd";

import { getBrands } from "../../features/brand/brandSlice";
import { getCategories } from "../../features/category/categorySlice";
import { getColors } from "../../features/color/colorSlice";
import { delImg, uploadImg } from "../../features/uploads/uploadSlice";
import { createProducts, resetState } from "../../features/product/productSlice";

let schema = yup.object().shape({
  title: yup.string().required("Title is Required"),
  description: yup.string().required("Description is Required"),
  price: yup.number().required("Price is Required"),
  brand: yup.string().required("Brand is Required"),
  category: yup.string().required("Category is Required"),
  tags: yup.string().required("Tag is Required"),
  color: yup
    .array()
    .min(1, "Pick at least one color")
    .required("Color is Required"),
  quantity: yup.number().required("Quantity is Required"),
});

const AddProduct = () => {
  const dispatch = useDispatch();
  const [color, setColor] = useState([]);
  //const [images, setImages] = useState([]);

  useEffect(() => {
    dispatch(getBrands());
    dispatch(getCategories());
    dispatch(getColors());
  }, [dispatch]);

  const brandState = useSelector((state) => state.brand.brands);
  const catState = useSelector((state) => state.category.pCategories);
  const colorState = useSelector((state) => state.color.colors);
  const imgState = useSelector((state) => state.upload.images);
  const newProduct = useSelector((state) => state.product);
  const { isSuccess, isError, isLoading, createdProduct } = newProduct;

  useEffect(() => {
    if (isSuccess && createdProduct) {
      toast.success("Product Added Successfullly!");
    }
    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading, createdProduct]);
  const coloropt = [];
  colorState.forEach((i) => {
    coloropt.push({
      label: i.title,
      value: i._id,
    });
  });

  const img = useMemo(() => [], []);

  imgState.forEach((i) => {
    img.push({
      public_id: i.public_id,
      url: i.url,
    });
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: "",
      brand: "",
      category: "",
      tags: "",
      color: "",
      quantity: "",
      images: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createProducts(values));
      formik.resetForm();
      setColor(null);
      setTimeout(() => {
        dispatch(resetState());
      }, 3000);
    },
  });

  useEffect(() => {
    formik.values.color = color ? color : " ";
    formik.values.images = img;
  }, [color, img, formik.values]);

  const handleColors = (e) => {
    setColor(e);
    console.log(color);
  };
    return (
      <>
        <div className="text-center">
          <button 
            type="button" 
            className="btn btn-primary" 
            data-bs-toggle="modal" 
            data-bs-target="#product" 
            data-bs-whatever="@getbootstrap">Add product</button>
        </div>
        <div className="modal fade" id="product" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add product</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form onSubmit={formik.handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="product-title" className="col-form-label">Enter Product Title:</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="product-title"
                      onChange={formik.handleChange("title")}
                      onBlur={formik.handleBlur("title")}
                      value={formik.values.title}
                    />
                  </div>
                  <div className="error">
                    {formik.touched.title && formik.errors.title}
                  </div>
                  <div className="">
                    <ReactQuill
                      theme="snow"
                      name="description"
                      onChange={formik.handleChange("description")}
                      value={formik.values.description}
                    />
                  </div>
                  <div className="error">
                    {formik.touched.description && formik.errors.description}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="product-price" className="col-form-label">Enter Product price:</label>
                    <input 
                      type="number" 
                      className="form-control" 
                      id="product-price"
                      name="price"
                      onChange={formik.handleChange("price")}
                      onBlur={formik.handleBlur("price")}
                      value={formik.values.price}
                    />
                  </div>
                  <div className="error">
                    {formik.touched.price && formik.errors.price}
                  </div>
                  <div>
                    <select
                      className="form-control py-2 mb-2"
                      id=""
                      name="brand"
                      onChange={formik.handleChange("brand")}
                      onBlur={formik.handleBlur("brand")}
                      value={formik.values.brand}
                    >
                      <option value="">Select Brand</option>
                      {brandState.map((i, j) => {
                        return (
                          <option key={j} value={i.title}>
                            {i.title}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="error">
                    {formik.touched.brand && formik.errors.brand}
                  </div>
                  <div>
                    <select
                      name="category"
                      onChange={formik.handleChange("category")}
                      onBlur={formik.handleBlur("category")}
                      value={formik.values.category}
                      className="form-control py-3 mb-3"
                      id=""
                    >
                      <option value="">Select Category</option>
                      {catState.map((i, j) => {
                        return (
                          <option key={j} value={i.title}>
                            {i.title}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="error">
                    {formik.touched.category && formik.errors.category}
                  </div>
                  <div>
                    <select
                      name="tags"
                      onChange={formik.handleChange("tags")}
                      onBlur={formik.handleBlur("tags")}
                      value={formik.values.tags}
                      className="form-control py-2 mb-2"
                      id=""
                    >
                      <option value="" disabled>
                        Select Category
                      </option>
                      <option value="featured">Featured</option>
                      <option value="popular">Popular</option>
                      <option value="special">Special</option>
                    </select>
                  </div>
                  <div className="error">
                    {formik.touched.tags && formik.errors.tags}
                  </div>
                  <Select
                    mode="multiple"
                    allowClear
                    className="w-100"
                    placeholder="Select colors"
                    defaultValue={color}
                    onChange={(i) => handleColors(i)}
                    options={coloropt}
                  />
                  <div className="error">
                    {formik.touched.color && formik.errors.color}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="product-quantity" className="col-form-label">Enter Product Quantity:</label>
                    <input 
                      type="number" 
                      className="form-control" 
                      id="product-quantity"
                      name="quantity"
                      onChange={formik.handleChange("quantity")}
                      onBlur={formik.handleBlur("quantity")}
                      value={formik.values.quantity}  
                    />
                  </div>
                  <div className="error">
                    {formik.touched.quantity && formik.errors.quantity}
                  </div>
                  <div className="bg-white border-1 p-5 text-center">
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
                  <div className="showimages d-flex flex-wrap gap-3">   
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
                    <button type="button" className="btn btn-primary">Add Product</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default AddProduct