import axios from "axios";
//import { config } from "../../config/axiosConfig";
import { url } from "../../utils/url";

const login = async (user) => {
    const response = await axios.post(`${url}api/user/admin-login`, user);
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

const authService = {
    login,
};
  
export default authService;