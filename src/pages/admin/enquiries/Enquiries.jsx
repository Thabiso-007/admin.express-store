import React from 'react'
import { AiFillDelete, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Table } from "antd";

import Meta from '../../../components/meta/Meta'

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
  },
  {
    title: "Staus",
    dataIndex: "status",
  },

  {
    title: "Action",
    dataIndex: "action",
  },
];

const Enquiries = () => {
  const data1 = [];
  for (let i = 0; i < 3; i++) {
    data1.push({
      key: i + 1,
      name: "Thabiso Hlatshwayo",
      email: "thabiso.hlatshwayo24@gmail.com",
      mobile: "0612345678",
      status: (
        <>
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
        </>
      ),

      action: (
        <>
          <Link
            className="ms-3 fs-3 text-danger"
            to={''}
          >
            <AiOutlineEye />
          </Link>
          <button
            className="ms-3 fs-3 text-danger bg-transparent border-0"
          >
            <AiFillDelete />
          </button>
        </>
      ),
    });
  }
  return (
    <>
      <Meta title="Enquiries" />
      <div className="container">
        <h3 className="fw-bold mb-4 text-white text-center">Enquiries</h3>
        <div>
          <Table columns={columns} dataSource={data1} />
        </div>
      </div>
    </>
  )
}

export default Enquiries