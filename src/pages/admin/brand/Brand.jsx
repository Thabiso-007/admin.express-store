import React from 'react'
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";


import Meta from '../../../components/meta/Meta'
import AddBrand from '../../../components/add-brand/AddBrand'

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

const Brand = () => {
  const data1 = [];
  for (let i = 0; i < 2; i++) {
    data1.push({
      key: i + 1,
      name: 'Apple',
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
// How to pass props through the outlet component
  return (
    <>
      <Meta title="Brand" />
      <div className="container">
        {/* Add brand starts */}
          <AddBrand />
        {/* Add brand ends*/}
        <hr />
        <div className="">
          <h2 className="fw-bold mb-4 text-white text-center">Brands</h2>
          <div>
            <Table columns={columns} dataSource={data1} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Brand