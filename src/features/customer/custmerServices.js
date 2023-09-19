import axios from "axios";
import { url } from "../../utils/url";

const getUsers = async () => {
  const response = await axios.get(`${url}api/user/all`);

  return response.data;
};

const customerService = {
  getUsers,
};

export default customerService;