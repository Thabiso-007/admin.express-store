import React, { useEffect, useState } from 'react'
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Meta from '../../../components/meta/Meta'
import AddBrand from '../../../components/add-brand/AddBrand'
import CustomModal from '../../../components/modal/CustomModal';
import {
  deleteABrand,
  getBrands,
  resetState,
} from "../../../features/brand/brandSlice";

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

const Brand = () => {
  const [open, setOpen] = useState(false);
  const [brandId, setbrandId] = useState("");

  const showModal = (e) => {
    setOpen(true);
    setbrandId(e);
  }

  const hideModal = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState());
    dispatch(getBrands());
  }, [dispatch]);
  
  const brandState = useSelector((state) => state.brand.brands);

  const data1 = [];
  for (let i = 0; i < brandState.length; i++) {
    data1.push({
      key: i + 1,
      name: brandState[i].title,
      action: (
        <>
          <Link
            to={`/admin/brand/${brandState[i]._id}`}
            className=" fs-3 text-danger"
          >
            <BiEdit />
          </Link>
          <button
            className="ms-3 fs-3 text-danger bg-transparent border-0"
            onClick={() => showModal(brandState[i]._id)}
          >
            <AiFillDelete />
          </button>
        </>
      ),
    });
  }

  const deleteBrand = (e) => {
    dispatch(deleteABrand(e));

    setOpen(false);
    setTimeout(() => {
      dispatch(getBrands());
    }, 100);
  };

  return (
    <>
      <Meta title="Brand" />
      <div className="container">
        {/* Add brand starts */}
          <AddBrand />
        {/* Add brand ends*/}
        <hr />
        <div className="">
          <h2 className="fw-bold mb-4 text-white text-center">Brands</h2>
          <div>
            <Table columns={columns} dataSource={data1} />
          </div>
          <CustomModal
            hideModal={hideModal}
            open={open}
            performAction={() => {
              deleteBrand(brandId);
            }}
            title="Are you sure you want to delete this brand?"
          />
        </div>
      </div>
    </>
  )
}

export default Brand