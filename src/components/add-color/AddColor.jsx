import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from "formik";

import {
  createColor,
  getAColor,
  resetState,
  updateAColor,
} from "../../features/color/colorSlice";
import { colorSchema } from '../../utils/validation';

const AddColor = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const getColorId = location.pathname.split("/")[3];

  const newColor = useSelector((state) => state.color);
  const {
    isSuccess,
    isError,
    isLoading,
    createdColor,
    updatedColor,
    colorName,
  } = newColor;

  useEffect(() => {
    if (getColorId !== undefined) {
      dispatch(getAColor(getColorId));
    } else {
      dispatch(resetState());
    }
  }, [getColorId, dispatch]);

  useEffect(() => {
    if (isSuccess && createdColor) {
      toast.success("Color Added Successfullly!");
    }
    if (isSuccess && updatedColor) {
      toast.success("Color Updated Successfullly!");
    }
    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading, createdColor, updatedColor]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: colorName || "",
    },
    validationSchema: colorSchema,
    onSubmit: (values) => {
      if (getColorId !== undefined) {
        const data = { id: getColorId, colorData: values };
        dispatch(updateAColor(data));
        dispatch(resetState());
      } else {
        dispatch(createColor(values));
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
            data-bs-target="#category" 
            data-bs-whatever="@getbootstrap"
          >
            {getColorId !== undefined ? "Edit" : "Add"} Color
          </button>
        </div>
        <div className="modal fade" id="category" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">{getColorId !== undefined ? "Edit" : "Add"} Color</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form> 
                  <div className="mb-3">
                    <label htmlFor="category-name" className="col-form-label">Enter color product:</label>
                    <input 
                      type="color" 
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
                    <button 
                      type="button" 
                      className="btn btn-primary"
                      onClick={formik.handleSubmit}
                    >
                      {getColorId !== undefined ? "Edit" : "Add"} Color
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

export default AddColor