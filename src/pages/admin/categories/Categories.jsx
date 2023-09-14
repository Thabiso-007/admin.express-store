import React from 'react'
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

import Meta from '../../../components/meta/Meta'
import AddCategory from '../../../components/add-category/AddCategory'

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },

  {
    title: "Action",
    dataIndex: "action",
  },
];


const Categories = () => {
  const data1 = [];
  for (let i = 0; i < 3; i++) {
    data1.push({
      key: i + 1,
      name: 'Electronics',
      action: (
        <>
          <Link
            to={'/'}
            className=" fs-3 text-danger"
          >
            <BiEdit />
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
      <Meta title="Categories" />
      <div className="container">
        <AddCategory />
        <hr />
        <div className="">
          <h2 className="fw-bold mb-4 text-white text-center">Product Categories</h2>
          <div>
            <Table columns={columns} dataSource={data1} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Categories