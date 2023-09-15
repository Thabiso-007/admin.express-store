import React from 'react'
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Table } from "antd";

import Meta from '../../../components/meta/Meta'
import AddColor from '../../../components/add-color/AddColor'

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
    title: "Action",
    dataIndex: "action",
  },
];

const Colors = () => {
  const data1 = [];
  for (let i = 0; i < 5; i++) {
    data1.push({
      key: i + 1,
      name: "#tru788",
      action: (
        <>
          <Link
            to={``}
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
      <Meta title="Colors" />
      <div className="container">
        <AddColor />
        <hr />
        <div className="">
          <h3 className="fw-bold mb-4 text-white text-center">Colors</h3>
          <div>
            <Table columns={columns} dataSource={data1} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Colors