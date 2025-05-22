import { useQuery } from "@tanstack/react-query";
import { fetchProductsByCategory } from "../../utility/fetchCategories";
import SkeletonCard from "../Reusables/SkeletonCard";
import ProductCard from "../Products/ProductCard";

const CategoryProduct = ({ selectedCategory }) => {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products", selectedCategory],
    queryFn: () => fetchProductsByCategory(selectedCategory),
    enabled: !!selectedCategory,
  });

  if (isLoading) {
    return (
      <section className="py-10">
        <SkeletonCard />
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-10 text-center text-red-500">
        Error loading products: {error.message || "Something went wrong."}
      </section>
    );
  }

  if (!products || products.length === 0) {
    return (
      <section className="py-10 text-center text-gray-600">
        No products found for "{selectedCategory}".
      </section>
    );
  }

  return (
    <section
      className="
        py-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:flex md:overflow-x-auto md:gap-6 md:snap-x md:scroll-smooth no-scrollbar"
      >
      {products.map((product) => (
        <div
          key={product.id}
          className="
            flex-shrink-0 md:w-[280px] w-full"
          >
          <ProductCard product={product} />
        </div>
      ))}
    </section>
  );
};

export default CategoryProduct;
