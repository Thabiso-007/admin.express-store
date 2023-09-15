import React from 'react'
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

import Meta from '../../../components/meta/Meta'

const ViewOrder = () => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <Meta title={'Order 123'} />
      <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="fw-bold mb-4 text-white">View Enquiry</h2>
        <button
          className="bg-transpatent border-0 fs-6 mb-0 d-flex align-items-center gap-1"
          onClick={goBack}
        >
          <BiArrowBack className="fs-5" /> Go Back
        </button>
      </div>
      <div className="mt-5 bg-white p-4 d-flex gap-3 flex-column rounded-3">
        <div className="d-flex align-items-center gap-3">
          <h6 className="mb-0">Name:</h6>
          <p className="mb-0">Thabiso</p>
        </div>
        <div className="d-flex align-items-center gap-3">
          <h6 className="mb-0">Mobile:</h6>
          <p className="mb-0">
            <a href={`tel:+270614567028`}>+270614567028</a>
          </p>
        </div>
        <div className="d-flex align-items-center gap-3">
          <h6 className="mb-0">Email:</h6>
          <p className="mb-0">
            <a href={`mailto:thabiso.hlatshwayo24@gmail.com`}>thabiso.hlatshwayo24@gmail.com</a>
          </p>
        </div>
        <div className="d-flex align-items-center gap-3">
          <h6 className="mb-0">Comment:</h6>
          <p className="mb-0">Nice</p>
        </div>
        <div className="d-flex align-items-center gap-3">
          <h6 className="mb-0">Status:</h6>
          <p className="mb-0">Pending</p>
        </div>
        <div className="d-flex align-items-center gap-3">
          <h6 className="mb-0">Change Status:</h6>
          <div>
            <select
              name=""
              className="form-control form-select"
              id=""
            >
              <option value="Submitted">Submitted</option>
              <option value="Contacted">Contacted</option>
              <option value="In Progress">In Progress</option>
              <option value="Resolved">Resolved</option>
            </select>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default ViewOrder