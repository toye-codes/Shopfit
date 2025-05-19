import ProductCard from "./ProductCard";
import { fetchProducts } from "../../utility/fetchProducts";
import { useQuery } from "@tanstack/react-query";
import SkeletonCard from "../Reusables/SkeletonCard";


const FeaturedProducts = () => {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return (
      <section className="py-16 px-4 text-center">
        <SkeletonCard /> 
      </section>
    );
  }

  if (isError) {
    return (
      <section className="py-16 px-4 text-center">
        <p className="text-red-500">Error loading products: {error.message}</p>
      </section>
    );
  }

  if (!products || products.length === 0) {
    return (
      <section className="py-16 px-4 text-center">
        <p className="text-gray-600">No products found.</p>
      </section>
    );
  }

  return (
    <section className="bg-[#fffef9] pt-10 px-4">
      <div className=" mx-auto">
        {/* Section Header */}
        <div className="text-left mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-2">
            Featured Picks Just for You
          </h2>
        </div>

        {/* Horizontal Scroll Slider */}
        <div className=" flex overflow-x-auto no-scrollbar gap-4">
          {products.map((product) => (
            <div key={product.id} className=" flex-shrink-0">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
