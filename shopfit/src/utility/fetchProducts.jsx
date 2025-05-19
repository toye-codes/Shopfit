import axios from "axios";

export const fetchProducts = async () => {
  const res = await axios.get("https://fakestoreapi.com/products?limit=10");
  return res.data;
};


export const fetchBestSellers = async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  const sorted = res.data.sort((a, b)=> b.rating.count - a.rating.count)
  const bestSellers = sorted.slice(0, 10)
  return bestSellers
}