import * as yup from "yup";

// login schema
export let loginSchema = yup.object().shape({
    email: yup
      .string()
      .email("Email should be valid")
      .required("Email is Required"),
    password: yup.string().required("Password is Required"),
});

// blog schema
export let blogSchema = yup.object().shape({
    title: yup.string().required("Title is Required"),
    description: yup.string().required("Description is Required"),
    category: yup.string().required("Category is Required"),
});

// blog category schema
export let blogCategorySchema = yup.object().shape({
    title: yup.string().required("Blog category Name is Required"),
});

// brand schema
export let brandSchema = yup.object().shape({
    title: yup.string().required("Brand Name is Required"),
});

// category schema
export let categorySchema = yup.object().shape({
    title: yup.string().required("Category Name is Required"),
});

// color schema 
export let colorSchema = yup.object().shape({
    title: yup.string().required("Color is Required"),
});

// coupon schema
export let couponSchema = yup.object().shape({
    name: yup.string().required("Coupon Name is Required"),
    expiry: yup.date().required("Expiry Date is Required"),
    discount: yup.number().required("Discount Percentage is Required"),
});

// product schema 
export let productSchema = yup.object().shape({
    title: yup.string().required("Title is Required"),
    description: yup.string().required("Description is Required"),
    price: yup.number().required("Price is Required"),
    brand: yup.string().required("Brand is Required"),
    category: yup.string().required("Category is Required"),
    tags: yup.string().required("Tag is Required"),
    color: yup
      .array()
      .min(1, "Pick at least one color")
      .required("Color is Required"),
    quantity: yup.number().required("Quantity is Required"),
});