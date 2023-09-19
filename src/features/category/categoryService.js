import axios from "axios";

import { url } from "../../utils/url";
import { config } from "../../config/axiosConfig";

const getProductCategories = async () => {
  const response = await axios.get(`${url}api/category/all`);

  return response.data;
};
const createCategory = async (category) => {
  const response = await axios.post(`${url}api/category/create`, category, config);

  return response.data;
};

const getProductCategory = async (id) => {
  const response = await axios.get(`${url}api/category/${id}`, config);

  return response.data;
};

const deleteProductCategory = async (id) => {
  const response = await axios.delete(`${url}api/category/${id}`, config);

  return response.data;
};
const updateProductCategory = async (category) => {
  console.log(category);
  const response = await axios.put(
    `${url}api/category/${category.id}`,
    { title: category.pCatData.title },
    config
  );

  return response.data;
};
const pCategoryService = {
  getProductCategories,
  createCategory,
  getProductCategory,
  deleteProductCategory,
  updateProductCategory,
};

export default pCategoryService;