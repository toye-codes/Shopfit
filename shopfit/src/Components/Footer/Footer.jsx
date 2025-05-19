import { Facebook, Linkedin, X, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#8b7b68] via-[#b8a68a] to-[#d6bfa2] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* About Us */}
        <div>
          <h3 className="font-bold text-lg mb-4">About Us</h3>
          <p className="text-sm leading-relaxed">
            We offer high-quality products with a focus on customer satisfaction
            and fast delivery. Shop with us for the best deals on your favorite
            items!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/about" className="hover:text-[#F4A261]">
                About Us
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-[#F4A261]">
                Shop Products
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-[#F4A261]">
                FAQ
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#F4A261]">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="font-bold text-lg mb-4">Sign Up for Our Newsletter</h3>
          <p className="text-sm mb-4">Get the latest updates and deals.</p>
          <form className="flex flex-col sm:flex-row sm:items-center gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full p-2 text-black rounded-md"
            />
            <button className="bg-[#F4A261] px-5 py-2 text-white rounded-md">
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-bold text-lg mb-4">Follow Us</h3>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-blue-600 rounded-full hover:scale-105 transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-black rounded-full hover:scale-105 transition">
              <X className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-pink-500 rounded-full hover:scale-105 transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-blue-700 rounded-full hover:scale-105 transition">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center border-t border-white/30 pt-6 text-sm space-y-2">
        <p>© 2025 Shopfit. All Rights Reserved.</p>
        <p>
          <a href="/privacy-policy" className="hover:text-[#F4A261]">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/terms-of-service" className="hover:text-[#F4A261]">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
