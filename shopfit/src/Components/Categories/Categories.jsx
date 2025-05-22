import { fetchCategories } from "../../utility/fetchCategories";
import { useQuery } from "@tanstack/react-query";
import SkeletonCard from "../Reusables/SkeletonCard";
import { categoryOptions } from "../../data/categoryOption";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();

  const {
    data: fetchedCategories,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const combinedCategories = useMemo(() => {
    // Convert fetched string categories to objects with `name`
    const normalizedFetched = (fetchedCategories || []).map(catStr => ({
      name: catStr,
    }));
  
    // categoryOptions are already objects with name
    return [...normalizedFetched, ...categoryOptions];
  }, [fetchedCategories]);
  

  console.log("combinedCategories:", combinedCategories);

  const handleCategory = (cat) => {
    const encodedName = encodeURIComponent(
      cat.name.toLowerCase().replace(/\s+/g, "-")
    );
    navigate(`/categories/${encodedName}`);
  };
  

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
          Error loading categories: {error?.message || "Something went wrong."}
        </p>
      </section>
    );
  }

  return (
    <section className="pt-5 px-4 bg-white">
      <div className="w-full">
        <h2 className="text-2xl text-black md:text-3xl font-bold text-left mb-8">
          Shop by categories
        </h2>
        <div className="sm:grid flex w-full overflow-x-auto sm:mx-auto sm:grid-cols-3 md:grid-cols-4 gap-6">
          {combinedCategories.map((cat) => (
            <button
              onClick={() => handleCategory(cat)} // <-- fixed here
              key={cat.name}
              className="bg-[#fffef9] text-nowrap text-black p-6 rounded-xl shadow-sm hover:shadow-md transition text-center">
              <p className="capitalize font-medium text-lg">{cat.name}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
