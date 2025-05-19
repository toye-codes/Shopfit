import { Lock, Truck, Recycle, PhoneCall } from "lucide-react";

const ShopWithUs = () => {
  const features = [
    {
      icon: <Recycle className="w-6 h-6 text-white" />,
      title: "Free Returns",
      description: "30-day hassle-free returns",
    },
    {
      icon: <Truck className="w-6 h-6 text-white" />,
      title: "Fast Delivery",
      description: "Free shipping on all orders",
    },
    {
      icon: <Lock className="w-6 h-6 text-white" />,
      title: "Secure Checkout",
      description: "Your data is encrypted",
    },
    {
      icon: <PhoneCall className="w-6 h-6 text-white" />,
      title: "24/7 Support",
      description: "We’re here to help anytime",
    },
  ];

  return (
    <section className="why-shop bg-[#f3efea] py-20 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
        Why Shop With Us?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-[#8b7b68] rounded-full">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              {feature.title}
            </h3>
            <p className="text-gray-600 mt-2 text-base">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopWithUs;
