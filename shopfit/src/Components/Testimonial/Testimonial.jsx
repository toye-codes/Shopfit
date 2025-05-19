const testimonials = [
  {
    id: 1,
    name: "Olusanya Toye",
    image: "https://i.pravatar.cc/150?img=47",
    rating: 5,
    quote: "Absolutely love the quality and service. Highly recommended!",
  },
  {
    id: 2,
    name: "John Paul Jones",
    image: "https://i.pravatar.cc/150?img=58",
    rating: 4,
    quote: "Great shopping experience and fast delivery.",
  },
  {
    id: 3,
    name: "Fatima Yusuf",
    image: "https://i.pravatar.cc/150?img=32",
    rating: 5,
    quote: "The product exceeded my expectations. Will definitely order again.",
  },
];

const StarRating = ({ rating }) => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={i < rating ? "text-yellow-500" : "text-gray-300"}>
        ★
      </span>
    ))}
  </div>
);

const TestimonialSection = () => {
  return (
    <section className="py-16 mt-8 bg-gradient-to-r from-[#8b7b68] via-[#b8a68a] to-[#d6bfa2] px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          What our customers are saying
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(({ id, name, image, quote, rating }) => (
            <div
              key={id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={image}
                  alt={name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-black">{name}</h4>
                  <StarRating rating={rating} />
                </div>
              </div>
              <p className="text-gray-600 italic">"{quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;