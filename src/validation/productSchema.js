import * as yup from "yup";

export const productSchema = yup.object({
  name: yup.string().required("Name is required"),

  price: yup
    .number()
    .typeError("Price must be a number")
    .positive("Price must be greater than 0")
    .required("Price is required"),

  category: yup.string().required("Category is required"),

  image: yup
    .string()
    .url("Must be a valid URL")
    .required("Image URL is required"),
});
