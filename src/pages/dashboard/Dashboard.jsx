import React from 'react'
import { Column } from '@ant-design/plots';
import { Table } from 'antd';
import { BsArrowDownRight, BsArrowUpRight } from 'react-icons/bs'

const columns = [
  {
    title: 'No',
    dataIndex: 'key',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Product',
    dataIndex: 'product',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
];
const data1 = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `Edward King ${i}`,
    product: 32,
    status: `London, Park Lane no. ${i}`,
  });
}

const Dashboard = () => {
  const data = [
    {
      type: 'Jan',
      sales: 38,
    },
    {
      type: 'Feb',
      sales: 52,
    },
    {
      type: 'Mar',
      sales: 61,
    },
    {
      type: 'Apr',
      sales: 145,
    },
    {
      type: 'May',
      sales: 48,
    },
    {
      type: 'Jun',
      sales: 38,
    },
    {
      type: 'Jul',
      sales: 38,
    },
    {
      type: 'Aug',
      sales: 38,
    },
    {
      type: 'Sept',
      sales: 48,
    },
    {
      type: 'Oct',
      sales: 40,
    },
    {
      type: 'Nov',
      sales: 28,
    },
    {
      type: 'Dec',
      sales: 68,
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    color: ({ type }) => {
      return "#0094B9";
    },
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'Month',
      },
      sales: {
        alias: 'Income',
      },
    },
  };

  return (
    <div>
      <h3 className="mb-4">Dashboard</h3>
      <div className="d-flex justify-content-between align-items-center gap-3 ">
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p>Total</p>
            <h4 className='mb-0'>R8700</h4>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <h6 className='red'><BsArrowDownRight /> 6%</h6>
            <p className='mb-0'>Compare to January 2023</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p>Total</p>
            <h4>R8700</h4>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <h6 className='red'><BsArrowDownRight /> 26%</h6>
            <p className='mb-0'>Compare to January 2023</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p>Total</p>
            <h4>R8700</h4>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <h6 className='green'><BsArrowUpRight /> 56%</h6>
            <p className='mb-0'>Compare to January 2023</p>
          </div>
        </div>
      </div>
      <div className='mt-4'>
        <h3 className='mb-4'>Income statics</h3>
        <div>
          <Column {...config} />
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-4">Recent orders</h3>
        <div>
          <Table columns={columns} dataSource={data1} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard