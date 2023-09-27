import React, { useEffect, useState } from 'react'
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Meta from '../../../components/meta/Meta'
import AddBlogCategry from '../../../components/add-blog-category/AddBlogCategry'
import {
  deleteABlogCat,
  getCategories,
  resetState,
} from "../../../features/blog-category/blogCategorySlice";
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
    title: "Action",
    dataIndex: "action",
  },
];

const BlogCategories = () => {
  const [open, setOpen] = useState(false);
  const [blogCatId, setblogCatId] = useState("");
  const showModal = (e) => {
    setOpen(true);
    setblogCatId(e);
  };

  const hideModal = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState());
    dispatch(getCategories());
  }, [dispatch]);
  const bCatState = useSelector((state) => state.blogCat.bCategories);
  const data1 = [];
  for (let i = 0; i < bCatState.length; i++) {
    data1.push({
      key: i + 1,
      name: bCatState[i].title,
      action: (
        <>
          <Link
            to={`/admin/blog-category/${bCatState[i]._id}`}
            className=" fs-3 text-danger"
          >
            <BiEdit />
          </Link>
          <button
            className="ms-3 fs-3 text-danger bg-transparent border-0"
            onClick={() => showModal(bCatState[i]._id)}
          >
            <AiFillDelete />
          </button>
        </>
      ),
    });
  }

  const deleteBlogCategory = (e) => {
    dispatch(deleteABlogCat(e));
    setOpen(false);
    setTimeout(() => {
      dispatch(getCategories());
    }, 100);
  };

  return (
    <>
      <Meta title="Blog categories" />
      <div className="container">
        <AddBlogCategry />
        <hr />
        <div className="">
          <h2 className="fw-bold mb-4 text-white text-center">Blog Categories</h2>
          <div>
            <Table columns={columns} dataSource={data1} />
          </div>
          <CustomModal
            hideModal={hideModal}
            open={open}
            performAction={() => {
              deleteBlogCategory(blogCatId);
            }}
            title="Are you sure you want to delete this blog category?"
        />
        </div>
      </div>
    </>
  )
}

export default BlogCategories