import { useState, useEffect } from "react";

const NewsletterModal = () => {
  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Detect first user interaction
    const handleInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
      }
    };

    window.addEventListener("scroll", handleInteraction);
    window.addEventListener("mousemove", handleInteraction);
    window.addEventListener("click", handleInteraction);

    return () => {
      window.removeEventListener("scroll", handleInteraction);
      window.removeEventListener("mousemove", handleInteraction);
      window.removeEventListener("click", handleInteraction);
    };
  }, [hasInteracted]);

  useEffect(() => {
    let timer;
    if (hasInteracted) {
      timer = setTimeout(() => {
        setIsOpen(true); // Trigger the modal after 2 minutes
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [hasInteracted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setIsOpen(false);
  };

  return (
    <>
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-opacity-50">
          <div className="relative w-[90%] max-w-[500px] bg-[#f3efea] p-6 rounded-md shadow-lg text-center">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl">
              &times;
            </button>
            <h2 className="text-xl md:text-2xl font-bold text-black">
              Stay in the Loop! Get updates on new arrivals & exclusive offers.
            </h2>
            <form
              onSubmit={handleSubmit}
              className="mt-6 flex flex-col sm:flex-row justify-center items-center">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 rounded-md border text-black w-full sm:w-auto sm:rounded-l-md sm:rounded-r-none"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white p-3 w-full sm:w-auto sm:rounded-r-md sm:rounded-l-none mt-2 sm:mt-0 hover:bg-blue-500">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsletterModal;
