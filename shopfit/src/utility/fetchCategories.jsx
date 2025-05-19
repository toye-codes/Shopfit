import axios from "axios";

// This function fetches categories from the API and returns them as an array.
export const fetchCategories = async () => {
    const res = await axios.get("https://fakestoreapi.com/products/categories");
    return res.data
}


// This function fetches products based on the selected category and returns them as an array
export const fetchProductsByCategory = async (category) => {
  const { data } = await axios.get(
    `https://fakestoreapi.com/products/category/${category}`
  );
  return data;
};
