import axios from "axios";

import { url } from "../../utils/url";
import { config } from "../../config/axiosConfig";

const getBlogCategories = async () => {
  const response = await axios.get(`${url}api/blog/category/all`);

  return response.data;
};
const createBlogCategory = async (bcat) => {
  const response = await axios.post(`${url}api/blog/category/create`, bcat, config);

  return response.data;
};
const updateBlogCategory = async (blogCat) => {
  const response = await axios.put(
    `${url}api/blog/category/${blogCat.id}`,
    { title: blogCat.blogCatData.title },
    config
  );

  return response.data;
};
const getBlogCategory = async (id) => {
  const response = await axios.get(`${url}api/blog/category/${id}`, config);

  return response.data;
};

const deleteBlogCategory = async (id) => {
  const response = await axios.delete(`${url}api/blog/category/${id}`, config);

  return response.data;
};
const bCategoryService = {
  getBlogCategories,
  createBlogCategory,
  deleteBlogCategory,
  getBlogCategory,
  updateBlogCategory,
};

export default bCategoryService;