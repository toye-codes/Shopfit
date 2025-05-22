import { useState } from "react";
import {
  Star,
  Menu,
  X,
  ShoppingCart,
  Heart,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import Carousel from "../../Components/HeroSection/Carousel";
import { categoryOptions } from "../../data/categoryOption";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  const navOptions = [
    { name: "Home", link: "/" },
    { name: "Categories", link: "/" },
    { name: "Shop", link: "/" },
    { name: "Style Tips", link: "/" },
    { name: "Loyalty Rewards", link: "/" },
  ];

  // Helper to encode category name into URL-friendly slug
  const encodeCategory = (name) =>
    encodeURIComponent(name.toLowerCase().replace(/\s+/g, "-"));

  return (
    <>
      <header className="flex justify-between items-center text-white px-4 py-3 bg-gradient-to-r from-[#8b7b68] via-[#b8a68a] to-[#d6bfa2] shadow-md">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Star size={28} className="text-white" />
          <span className="text-lg font-semibold tracking-wide">Shopfit</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {navOptions.map(({ name, link }) => (
            <Link
              to={link}
              key={name}
              className="text-white text-base md:text-lg hover:text-yellow-400 transition-colors duration-300 font-medium">
              {name}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <Heart size={26} className="text-white hover:text-yellow-300" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white w-5 h-5 flex items-center justify-center rounded-full">
              0
            </span>
          </div>

          <div className="relative">
            <Link to="/cart">
              <ShoppingCart
                size={26}
                className="text-white hover:text-yellow-300"
              />
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white w-5 h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </Link>
          </div>

          <div className="hidden md:flex gap-5">
            <button className="bg-[#d6bfa2] px-4 py-2 rounded-md shadow-xl hover:bg-[#f0e8d9] transition-colors duration-300">
              Sign up
            </button>
            <button className="bg-[#d6bfa2] px-4 py-2 rounded-md shadow-xl hover:bg-[#f0e8d9] transition-colors duration-300">
              Log In
            </button>
          </div>

          {/* Mobile Menu */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden focus:outline-none">
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* Promo Carousel */}
      <div>
        <Carousel />
      </div>

      {/* Transparent Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-transparent z-40"
          onClick={() => setIsMenuOpen(false)}></div>
      )}

      {/* Sidebar from Right */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-[#d6bfa2] text-[#2c2c2c] shadow-md z-50 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-300">
          <span className="text-lg font-bold">Menu</span>
          <button onClick={() => setIsMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col gap-4 px-6 py-4">
          {navOptions.map(({ name, link }) =>
            name !== "Categories" ? (
              <Link
                key={name}
                to={link}
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-medium text-left hover:bg-[#f0e8d9] px-3 py-2 rounded-md transition-colors">
                {name}
              </Link>
            ) : (
              <div key="categories" className="flex flex-col">
                <button
                  onClick={() => setShowCategories(!showCategories)}
                  className="flex justify-between items-center text-base font-medium text-left hover:bg-[#f0e8d9] px-3 py-2 rounded-md transition-colors">
                  Categories {showCategories ? <ChevronUp /> : <ChevronDown />}
                </button>
                {showCategories && (
                  <div className="pl-4 mt-2 flex flex-col gap-4 max-h-64 overflow-y-auto">
                    {categoryOptions.map(({ name }) => {
                      const categorySlug = encodeCategory(name);
                      return (
                        <Link
                          key={name}
                          to={`/category/${categorySlug}`}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setShowCategories(false);
                          }}
                          className="text-sm font-medium hover:text-yellow-700 transition-colors">
                          {name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
