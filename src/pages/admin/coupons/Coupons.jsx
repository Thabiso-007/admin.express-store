import React from 'react'
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

import Meta from '../../../components/meta/Meta'
import AddCoupon from '../../../components/add-coupon/AddCoupon'

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
    title: "Discount",
    dataIndex: "discount",
    sorter: (a, b) => a.discount - b.discount,
  },
  {
    title: "Expiry",
    dataIndex: "expiry",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Coupons = () => {
  const data1 = [];
  for (let i = 0; i < 4; i++) {
    data1.push({
      key: i + 1,
      name: "Laptop",
      discount: "10%",
      expiry: "12/12/2025",
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
      <Meta title="Coupons" />
      <div className="container">
        <AddCoupon />
        <hr />
        <div className="">
          <h3 className="fw-bold mb-4 text-white text-center">Coupons</h3>
          <div>
            <Table columns={columns} dataSource={data1} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Coupons