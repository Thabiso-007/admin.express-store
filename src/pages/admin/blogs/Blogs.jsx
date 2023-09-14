import React from 'react'
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

import Meta from '../../../components/meta/Meta'
import AddBlog from '../../../components/add-blog/AddBlog'

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "name",
  },
  {
    title: "Category",
    dataIndex: "category",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Blogs = () => {
  const data1 = [];
  for (let i = 0; i < 5; i++) {
    data1.push({
      key: i + 1,
      name: "Blog one",
      category: "Kitchenware",

      action: (
        <>
          <Link
            to={''}
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
      <Meta title="Blogs" />
      <div className="container">
        <AddBlog />
        <hr />
        <div className="">
          <h2 className="fw-bold mb-4 text-white text-center">Blogs List</h2>
          <div>
            <Table columns={columns} dataSource={data1} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Blogs