import { useParams } from "react-router-dom";
import CategoryProduct from "../components/Categories/CategoryProduct";

const Category = () => {
  const { categoryName } = useParams();

  return (
    <div className="p-2">
      <h1 className="text-3xl font-bold text-center mb-4 capitalize">{categoryName}</h1>
      <CategoryProduct selectedCategory={categoryName} />
    </div>
  );
};

export default Category;
