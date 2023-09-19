import axios from "axios";
import { url } from "../../utils/url";
import { config } from "../../config/axiosConfig";

const getBlogs = async () => {
  const response = await axios.get(`${url}/api/blog/`);

  return response.data;
};

const createBlog = async (blog) => {
  const response = await axios.post(`${url}/api/blog/create`, blog, config);

  return response.data;
};

const updateBlog = async (blog) => {
  const response = await axios.put(
    `${url}/api/blog/${blog.id}`,
    {
      title: blog.blogData.title,
      description: blog.blogData.description,
      category: blog.blogData.category,
      images: blog.blogData.images,
    },
    config
  );

  return response.data;
};

const getBlog = async (id) => {
  const response = await axios.get(`${url}/api/blog/${id}`, config);

  return response.data;
};

const deleteBlog = async (id) => {
  const response = await axios.delete(`${url}/api/blog/${id}`, config);

  return response.data;
};

const blogService = {
  getBlogs,
  createBlog,
  getBlog,
  updateBlog,
  deleteBlog,
};

export default blogService;