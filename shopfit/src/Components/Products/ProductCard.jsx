import { Heart, ShoppingCart, Star, StarHalf } from "lucide-react";

const ProductCard = ({ product }) => {
  const rating = product.rating?.rate || 0;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="bg-[#ffffff] w-[200px] sm:w-[300px] shadow-lg rounded-2xl p-3 max-w-sm mx-auto text-sm sm:text-base">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="mx-auto h-40 sm:h-46 object-contain rounded-xl mb-3"
      />

      {/* Name */}
      <h3 className="text-base sm:text-lg font-semibold text-black mb-1 w-auto truncate">
        {product.title}
      </h3>

      {/* Star Rating */}
      <div className="flex items-center mb-2 text-yellow-400">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className="w-4 h-4 sm:w-5 sm:h-5" />
        ))}
        {hasHalfStar && <StarHalf className="w-4 h-4 sm:w-5 sm:h-5" />}
        {[...Array(emptyStars)].map((_, i) => (
          <Star
            key={`empty-${i}`}
            className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300"
            stroke="currentColor"
            fill="none"
          />
        ))}
      </div>

      {/* Description */}
      <p className="text-xs sm:text-sm text-gray-700 mb-4 line-clamp-2">
        {product.description}
      </p>

      {/* Buttons */}
      <div className="flex justify-between items-center gap-2">
        <button className="flex-1 bg-black text-white text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-xl hover:opacity-90 transition">
          <ShoppingCart className="inline-block mr-2 w-4 h-4" />
          Add to Cart
        </button>
        <button className="flex items-center justify-center bg-white border border-black text-black px-3 py-2 rounded-xl hover:bg-black hover:text-white transition">
          <Heart className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
