import React from "react";

const promotions = [
  "🔥 Flash Sale: Up to 50% off select items!",
  "🚚 Free Shipping on orders over $100",
  "🌟 Join our Loyalty Program and earn rewards",
  "🛍️ New Arrivals Just Dropped — Shop Now!",
];

const Carousel = () => {
  return (
    <div className="w-full overflow-hidden bg-[#8b7b68] py-2 px-4">
      <div className="whitespace-nowrap animate-marquee text-white font-medium text-sm md:text-base">
        {promotions.map((text, i) => (
          <span key={i} className="mx-8 inline-block">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
