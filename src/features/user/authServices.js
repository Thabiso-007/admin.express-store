import axios from "axios";

import { config } from "../../config/axiosConfig";
import { url } from "../../utils/url";

const login = async (values) => {
  const response = await axios.post(`${url}api/user/admin-login`, values);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};
 
const logout = async () => {
  const response = await axios.get(`${url}api/user/logout`, config);
  localStorage.removeItem("user");
  return response
}

const getOrders = async () => {
  const response = await axios.get(`${url}api/user/getallorders`, config);

  return response.data;
};

const getOrder = async (id) => {
  const response = await axios.post(
    `${url}api/user/getorderbyuser/${id}`,
    "",
    config
  );

  return response.data;
};

const authService = {
  login,
  logout,
  getOrders,
  getOrder,
};

export default authService;