import axios from "axios";

import { config } from "../../config/axiosConfig";
import { url } from "../../utils/url";

const getEnquiries = async () => {
  const response = await axios.get(`${url}api/enquiry/`);

  return response.data;
};

const deleteEnquiry = async (id) => {
  const response = await axios.delete(`${url}api/enquiry/${id}`, config);
  return response.data;
};

const getEnquiry = async (id) => {
  const response = await axios.get(`${url}api/enquiry/${id}`);
  return response.data;
};

const udpateEnquiry = async (enq) => {
  const response = await axios.put(
    `${url}api/enquiry/${enq.id}`,
    { status: enq.enqData },
    config
  );
  return response.data;
};

const enquiryService = {
  getEnquiries,
  deleteEnquiry,
  getEnquiry,
  udpateEnquiry,
};

export default enquiryService;