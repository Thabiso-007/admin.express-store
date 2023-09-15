import React from 'react'
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
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
    title: "Product",
    dataIndex: "product",
  },
  {
    title: "Amount",
    dataIndex: "amount",
  },
  {
    title: "Date",
    dataIndex: "date",
  },

  {
    title: "Action",
    dataIndex: "action",
  },
];

const Orders = () => {
  const data1 = [];
  for (let i = 0; i < 5; i++) {
    data1.push({
      key: i + 1,
      name: "Thabiso",
      product: (
        <Link to={'123'}>
          View Orders
        </Link>
      ),
      amount: "R5000",
      date: "12 June 2021",
      action: (
        <>
          <Link to="orders/123" className=" fs-3 text-danger">
            <BiEdit />
          </Link>
          <Link className="ms-3 fs-3 text-danger" to="/">
            <AiFillDelete />
          </Link>
        </>
      ),
    });
  }
  return (
    <>
      <Meta title="Orders" />
      <div className="container">
      <h2 className="fw-bold mb-4 text-white text-center">Orders</h2>
      <div>{<Table columns={columns} dataSource={data1} />}</div>
      </div>
    </>
  )
}

export default Orders