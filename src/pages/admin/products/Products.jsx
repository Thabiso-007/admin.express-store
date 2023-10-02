import React, { useEffect } from 'react'
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Meta from '../../../components/meta/Meta'
import AddProduct from '../../../components/add-product/AddProduct'
import { getProducts } from "../../../features/product/productSlice";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "title",
    sorter: (a, b) => a.title.length - b.title.length,
  },
  {
    title: "Brand",
    dataIndex: "brand",
    sorter: (a, b) => a.brand.length - b.brand.length,
  },
  {
    title: "Category",
    dataIndex: "category",
    sorter: (a, b) => a.category.length - b.category.length,
  },
  {
    title: "Color",
    dataIndex: "color",
  },
  {
    title: "Price",
    dataIndex: "price",
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const productState = useSelector((state) => state.product.products);

  const data1 = [];
  for (let i = 0; i < productState.length; i++) {
    data1.push({
      key: i + 1,
      title: productState[i].title,
      brand: productState[i].brand,
      category: productState[i].category,
      color: productState[i].color,
      price: `${productState[i].price}`,
      action: (
        <>
          <Link to="/" className=" fs-3 text-danger">
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
      <Meta title="Products" />
      <div className="container">
        {/* product modal starts */}
        <AddProduct />
        {/* product modal end */}
        <hr />
        <div>
          <h2 className="fw-bold mb-4 text-white text-center">Products</h2>
          <div>
            <Table columns={columns} dataSource={data1} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Products