import { useState } from "react";
import { Star, Menu, X, ShoppingCart, Heart } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navOptions = [
    { name: "Home", link: "/" },
    { name: "Categories", link: "/" },
    { name: "Shop", link: "/" },
    { name: "Style Tips", link: "/" },
    { name: "Loyalty Rewards", link: "/" },
  ];

  return (
    <>
      <header className="flex justify-between items-center text-white px-4 py-3 bg-gradient-to-r from-[#8b7b68] via-[#b8a68a] to-[#d6bfa2] shadow-md">
        {/* Logo */}
        <p to="/" className="flex items-center gap-2">
          <Star size={28} className="text-white" />
          <span className="text-lg font-semibold tracking-wide">Shopfit</span>
        </p>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {navOptions.map(({ name, link }) => (
            <button
              key={name}
              className="text-white text-base md:text-lg hover:text-yellow-400 transition-colors duration-300 font-medium">
              {name}
            </button>
          ))}
        </nav>

        {/* Right-side Icons */}
        <div className="flex items-center gap-4">
          {/* Wishlist */}
          <div className="relative">
            <p>
              <Heart size={26} className="text-white hover:text-yellow-300" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white w-5 h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </p>
          </div>

          {/* Cart */}
          <div className="relative">
            <p to="/cart">
              <ShoppingCart
                size={26}
                className="text-white hover:text-yellow-300"
              />
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white w-5 h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </p>
          </div>

          {/* Headphones Icon */}
          <div className="hidden md:inline flex justify-between gap-5 text-white ">
            <button className="hidden md:inline bg-[#d6bfa2] px-4 py-2 rounded-md shadow-xl hover:bg-[#f0e8d9] transition-colors duration-300">
              Sign up
            </button>
            <button className="hidden md:inline bg-[#d6bfa2] px-4 py-2 rounded-md shadow-xl hover:bg-[#f0e8d9] transition-colors duration-300">
              Log In
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden focus:outline-none">
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Promo Carousel */}
      <div>
        <PromoCarousel />
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#d6bfa2] text-[#2c2c2c] px-6 py-4 shadow-md">
          <div className="flex flex-col gap-4">
            {navOptions.map(({ name, link }) => (
              <button
                key={name}
                to={link}
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-medium hover:bg-[#f0e8d9] px-3 py-2 rounded-md transition-colors">
                {name}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
