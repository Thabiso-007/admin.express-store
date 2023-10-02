import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { roleSchema } from '../../../utils/validation';
import Meta from '../../../components/meta/Meta';
import { updateRole } from '../../../features/customer/customerSlice';

const SingleCustomer = () => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  const dispatch = useDispatch();
  const location = useLocation();
  const customerId = location.pathname.split("/")[3];

  const customerstate = useSelector((state) => state.customer);
  const { customers, isSuccess, isError, isLoading, roleName, updatedRole } = customerstate;

  useEffect(() => {
    if (isSuccess && updatedRole) {
      toast.success("Role Updated Successfullly!");
      navigate(-1);
    }
    
    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading, updatedRole, navigate]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      role: roleName || "",
    },
    validationSchema: roleSchema,
    onSubmit: (values) => {
      if (customerId !== undefined) {
        
        dispatch(updateRole(id));
      } 
    },
  });

  const metadata = () => {
    for (let i = 0; i < customers.length; i++) {
      if (customers[i]._id === id) {
        const name = customers[i].firstName;
        return name.toString();
      }
    }
  }

  return (
    <>
    <Meta title={metadata()} />
    <div className="container">
      <div className="bg-white p-3 rounded">
        <form>
          <div className="mb-3">
            <label htmlFor="brand" className="col-form-label">customers role:</label>
            <input 
              type="text" 
              className="form-control" 
              id="brand" 
              name="title"
              onChange={formik.handleChange("role")}
              onBlur={formik.handleBlur("role")}
              value={formik.values.role}  
            />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={formik.handleSubmit}>Edit role</button>
          </div>
        </form>
      </div>
    </div>
  </>
  )
}

export default SingleCustomer