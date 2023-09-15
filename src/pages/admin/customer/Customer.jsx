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
  const data1 = [];
  for (let i = 0; i < 3; i++) {
    
      data1.push({
        key: i + 1,
        name: "Thabiso Hlatshwayo",
        email: "thabiso.hlatshwayo24@gmail.com",
        mobile: "0614567028",
      });
  }

  return (
    <>
      <Meta title="Customers" />
      <div className="container">
        <h3 className="fw-bold mb-4 text-white text-center">Customers</h3>
        <div>
          <Table columns={columns} dataSource={data1} />
        </div>
      </div>
    </>
  )
}

export default Customer