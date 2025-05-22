import Header from "../Components/Header/Header";
import HeroPage from "../Components/HeroSection/HeroPage";
import FeaturedProducts from "../Components/Products/FeaturedProducts";
import Categories from "../Components/Categories/Categories";
import Testimonial from "../Components/Testimonial/Testimonial";
import BestSellers from "../Components/Products/BestSellers";
import NewsletterSignup from "../Components/Reusables/Popups/NewsLetter";
import ShopWithUs from "../Components/HeroSection/ShopWithUs";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <div className="text-xl  z-10 text-white">
      <div className="shadow-xl">
        <HeroPage />
        <div className="flex flex-col items-center align-middle">
          <NewsletterSignup />
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="shadow-xl">
        <FeaturedProducts />
        <Categories />
        <BestSellers />
      </div>

      <div>
        <ShopWithUs />
      </div>
      <div className=" py-">
        <Testimonial />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
