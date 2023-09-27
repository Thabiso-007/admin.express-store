import React, { useEffect, useState } from 'react'
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Meta from '../../../components/meta/Meta'
import AddBlog from '../../../components/add-blog/AddBlog'
import { deleteABlog, getBlogs, resetState } from "../../../features/blogs/blogSlice";
import CustomModal from '../../../components/modal/CustomModal';

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "name",
  },
  {
    title: "Category",
    dataIndex: "category",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Blogs = () => {
  const [open, setOpen] = useState(false);
  const [blogId, setblogId] = useState("");
  const showModal = (e) => {
    setOpen(true);
    setblogId(e);
  };

  const hideModal = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState());
    dispatch(getBlogs());
  }, [dispatch]);

  const getBlogState = useSelector((state) => state.blog.blogs);

  const data1 = [];
  for (let i = 0; i < getBlogState.length; i++) {
    data1.push({
      key: i + 1,
      name: getBlogState[i].title,
      category: getBlogState[i].category,

      action: (
        <>
          <Link
            to={`/admin/blog/${getBlogState[i].id}`}
            className=" fs-3 text-danger"
          >
            <BiEdit />
          </Link>
          <button
            className="ms-3 fs-3 text-danger bg-transparent border-0"
            onClick={() => showModal(getBlogState[i]._id)}
          >
            <AiFillDelete />
          </button>
        </>
      ),
    });
  }

  const deleteBlog = (e) => {
    dispatch(deleteABlog(e));

    setOpen(false);
    setTimeout(() => {
      dispatch(getBlogs());
    }, 100);
  };

  return (
    <>
      <Meta title="Blogs" />
      <div className="container">
        <AddBlog />
        <hr />
        <div className="">
          <h2 className="fw-bold mb-4 text-white text-center">Blogs List</h2>
          <div>
            <Table columns={columns} dataSource={data1} />
          </div>
          <CustomModal 
            hideModal={hideModal}
            open={open}
            performAction={() => {
              deleteBlog(blogId);
            }}
            title="Are you sure you want to delete this blog?"
          />
        </div>
      </div>
    </>
  )
}

export default Blogs