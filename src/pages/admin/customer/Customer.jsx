import React, { useEffect, useState } from 'react'
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";

import Meta from '../../../components/meta/Meta'
import { deleteCustomer, getUsers } from "../../../features/customer/customerSlice";
import { Link } from 'react-router-dom';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import CustomModal from '../../../components/modal/CustomModal';

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
  {
    title: "Action",
    dataIndex: "action",
  },
];


const Customer = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [userId, setuserId] = useState("");

  const showModal = (e) => {
    setOpen(true);
    setuserId(e);
  }

  const hideModal = () => {
    setOpen(false);
  };

  const customerstate = useSelector((state) => state.customer.customers);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const deleteUser= (e) => {
    dispatch(deleteCustomer(e));

    setOpen(false);
    setTimeout(() => {
      dispatch(getUsers());
    }, 100);
  };

  const data1 = [];
  for (let i = 0; i < customerstate.length; i++) {
    if (customerstate[i].role !== "admin") {
      data1.push({
        key: i + 1,
        name: customerstate[i].firstName + " " + customerstate[i].lastName,
        email: customerstate[i].email,
        mobile: customerstate[i].mobile,
        action: (
          <>
            <Link
              to={`/admin/customer/${customerstate[i]._id}`}
              className=" fs-3 text-danger"
            >
              <BiEdit />
            </Link>
            <button
              className="ms-3 fs-3 text-danger bg-transparent border-0"
              onClick={() => showModal(customerstate[i]._id)}
            >
              <AiFillDelete />
            </button>
          </>
        ),
      });
    }
  }

  return (
    <>
      <Meta title="Customers" />
      <div className="container">
        <h3 className="fw-bold mb-4 text-white text-center">Customers</h3>
        <div>
          <Table columns={columns} dataSource={data1} />
        </div>
        <CustomModal
            hideModal={hideModal}
            open={open}
            performAction={() => {
              deleteUser(userId);
            }}
            title="Are you sure you want to delete this brand?"
          />
      </div>
    </>
  )
}

export default Customer