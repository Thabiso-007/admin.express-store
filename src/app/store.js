import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/user/authSlice";
import productReducer from "../features/product/productSlice";
import customerReducer from "../features/customer/customerSlice";
import blogCatReducer from "../features/blog-category/blogCategorySlice";
import blogReducer from "../features/blogs/blogSlice";
import brandReducer from "../features/brand/brandSlice";
import colorReducer from "../features/color/colorSlice";
import couponReducer from "../features/coupon/couponSlice";
import enquiryReducer from "../features/enquiry/enquirySlice";
import categoryReducer from "../features/category/categorySlice";
import uplaodReducer from "../features/uploads/uploadSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        product: productReducer,
        customer: customerReducer,
        blogCat: blogCatReducer,
        blog: blogReducer,
        brand: brandReducer,
        color: colorReducer,
        coupon: couponReducer,
        enquiry: enquiryReducer,
        category: categoryReducer,
        upload: uplaodReducer
    },
});