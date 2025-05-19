import { fetchCategories } from "../../utility/fetchCategories";
import { useQuery } from "@tanstack/react-query";
import SkeletonCard from "../Reusables/SkeletonCard";
import CategoryProduct from "./CategoryProduct";
import { useState } from "react";

const Categories = ({cat}) => {
  const[selected, setSelected] = useState(null)

  const {
    data: categories,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
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
          Error loading categories: {error?.message || "Something went wrong."}
        </p>
      </section>
    );
  }

  if (!categories || !Array.isArray(categories)) {
    return (
      <section className="py-16 px-4 text-center">
        <p className="text-gray-600">No categories available.</p>
      </section>
    );
  }

  return (
    <section className=" pt-5 px-4 bg-white">
      <div className="w-full">
        <h2 className="text-2xl text-black md:text-3xl font-bold text-left mb-8">
          Shop by categories
        </h2>
        <div className="sm:grid flex w-full overflow-x-auto sm:mx-auto sm:grid-cols-3 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <button
              onClick={() => setSelected(cat)}
              key={cat}
              className="bg-[#fffef9] text-nowrap text-black p-6 rounded-xl shadow-sm hover:shadow-md transition text-center">
              <p className="capitalize font-medium text-lg">{cat}</p>
            </button>
          ))}
        </div>

        <div className="mt-8">
          {selected && <CategoryProduct selectedCategory={selected} />}
        </div>
      </div>
    </section>
  );
};

export default Categories;
