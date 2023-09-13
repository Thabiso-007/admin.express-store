import React from 'react'
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
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
  },
];


const Customer = () => {
  return (
    <>
      <Meta title="Customers" />
      <div className="container">
        <div className="row">
          <div className="col">
            Customers
          </div>
        </div>
      </div>
    </>
  )
}

export default Customer