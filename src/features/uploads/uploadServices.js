import axios from "axios";

import { config } from "../../config/axiosConfig";
import { url } from "../../utils/url";

const uploadImg = async (data) => {
  const response = await axios.post(`${url}api/uploads/`, data, config);
  return response.data;
};
const deleteImg = async (id) => {
  const response = await axios.delete(
    `${url}api/uploads/delete-img/${id}`,
    config
  );
  return response.data;
};

const uploadService = {
  uploadImg,
  deleteImg,
};

export default uploadService;