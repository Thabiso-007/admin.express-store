import React, { useEffect, useState } from 'react';
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Meta from '../../../components/meta/Meta';
import AddCategory from '../../../components/add-category/AddCategory';
import CustomModal from '../../../components/modal/CustomModal';
import {
  deleteAProductCategory,
  getCategories,
  resetState,
} from "../../../features/category/categorySlice";

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
  const [open, setOpen] = useState(false);
  const [pCatId, setpCatId] = useState("");

  const showModal = (e) => {
    setOpen(true);
    setpCatId(e);
  };

  const hideModal = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetState());
    dispatch(getCategories());
  }, [dispatch]);

  const pCatStat = useSelector((state) => state.category.pCategories);
  const data1 = [];
  for (let i = 0; i < pCatStat.length; i++) {
    data1.push({
      key: i + 1,
      name: pCatStat[i].title,
      action: (
        <>
          <Link
            to={`/admin/category/${pCatStat[i]._id}`}
            className=" fs-3 text-danger"
          >
            <BiEdit />
          </Link>
          <button
            className="ms-3 fs-3 text-danger bg-transparent border-0"
            onClick={() => showModal(pCatStat[i]._id)}
          >
            <AiFillDelete />
          </button>
        </>
      ),
    });
  }

  const deleteCategory = (e) => {
    dispatch(deleteAProductCategory(e));
    setTimeout(() => {
      dispatch(getCategories());
    }, 100);
  };

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
          <CustomModal 
            hideModal={hideModal}
            open={open}
            performAction={() => {
              deleteCategory(pCatId);
            }}
            title="Are you sure you want to delete this Product Category?"
          />
        </div>
      </div>
    </>
  )
}

export default Categories