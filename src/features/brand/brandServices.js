import axios from "axios";

import { config } from "../../config/axiosConfig";
import { url } from "../../utils/url";

const getBrands = async () => {
  const response = await axios.get(`${url}api/brand/all`);

  return response.data;
};

const createBrand = async (brand) => {
  const response = await axios.post(`${url}api/brand/create`, brand, config);

  return response.data;
};
const updateBrand = async (brand) => {
  const response = await axios.put(
    `${url}api/brand/${brand.id}`,
    { title: brand.brandData.title },
    config
  );

  return response.data;
};
const getBrand = async (id) => {
  const response = await axios.get(`${url}api/brand/${id}`, config);

  return response.data;
};

const deleteBrand = async (id) => {
  const response = await axios.delete(`${url}api/brand/${id}`, config);

  return response.data;
};

const brandService = {
  getBrands,
  createBrand,
  getBrand,
  updateBrand,
  deleteBrand,
};

export default brandService;