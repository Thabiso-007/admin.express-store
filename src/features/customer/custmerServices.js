import axios from "axios";

import { url } from "../../utils/url";
import { config } from "../../config/axiosConfig";

const getUsers = async () => {
  const response = await axios.get(`${url}api/user/all`);

  return response.data;
};

const deleteCustomer = async (id) => {
  const response = await axios.delete(`${url}api/user/${id}`, config);
  return response.data;
}

const updateRole = async (id) => {
  const response = await axios.put(
    `${url}api/user/role/${id}`,
    config
);

  return response.data;
}

const customerService = {
  getUsers,
  deleteCustomer,
  updateRole
};

export default customerService;