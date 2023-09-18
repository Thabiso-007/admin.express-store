import axios from "axios";

import { config } from "../../config/axiosConfig";
import { url } from "../../utils/url";

const getProducts = async () => {
  const response = await axios.get(`${url}api/product/create`);

  return response.data;
};

const createProduct = async (product) => {
  const response = await axios.post(`${url}api/product/`, product, config);

  return response.data;
};

const productService = {
  getProducts,
  createProduct,
};

export default productService;