import axios from "axios";
import { url } from "../../utils/url";
import { config } from "../../config/axiosConfig";

const getColors = async () => {
  const response = await axios.get(`${url}api/color/`);

  return response.data;
};

const createColor = async (color) => {
  const response = await axios.post(`${url}api/color/`, color, config);

  return response.data;
};

const updateColor = async (color) => {
  const response = await axios.put(
    `${url}api/color/${color.id}`,
    { title: color.colorData.title },
    config
);

  return response.data;
};

const getColor = async (id) => {
  const response = await axios.get(`${url}api/color/${id}`, config);

  return response.data;
};

const deleteColor = async (id) => {
  const response = await axios.delete(`${url}api/color/${id}`, config);

  return response.data;
};

const colorService = {
  getColors,
  createColor,
  updateColor,
  getColor,
  deleteColor,
};

export default colorService;