import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";
import SkeletonCard from "../Reusables/SkeletonCard";
import { fetchBestSellers } from "../../utility/fetchProducts"; 

const BestSellers = () => {
  const {
    data: bestSellers,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bestSellers"],
    queryFn: fetchBestSellers,
  });

  if (isLoading) {
    return (
      <section className="py-16 px-4 text-center">
        <SkeletonCard />
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 px-4 text-center">
        <p className="text-red-500">
          Failed to load bestsellers: {error.message}
        </p>
      </section>
    );
  }

  return (
    <section className="pt-5 px-4 bg-white">
      <div className="">
        <h2 className="text-2xl text-black md:text-3xl font-bold mb-8">
          🔥 Bestsellers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {bestSellers?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
