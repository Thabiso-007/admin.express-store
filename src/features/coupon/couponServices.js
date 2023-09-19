import axios from "axios";

import { config } from "../../config/axiosConfig";
import { url } from "../../utils/url";

const getCoupons = async () => {
  const response = await axios.get(`${url}api/coupon/`, config);

  return response.data;
};

const createCoupons = async (coupon) => {
  const response = await axios.post(`${url}api/coupon/`, coupon, config);

  return response.data;
};
const updateCoupon = async (coupon) => {
  const response = await axios.put(
    `${url}coupon/${coupon.id}`,
    {
      name: coupon.couponData.name,
      expiry: coupon.couponData.expiry,
      discount: coupon.couponData.discount,
    },
    config
  );

  return response.data;
};
const getCoupon = async (id) => {
  const response = await axios.get(`${url}api/coupon/${id}`, config);

  return response.data;
};

const deleteCoupon = async (id) => {
  const response = await axios.delete(`${url}api/coupon/${id}`, config);

  return response.data;
};
const couponService = {
  getCoupons,
  createCoupons,
  deleteCoupon,
  getCoupon,
  updateCoupon,
};

export default couponService;