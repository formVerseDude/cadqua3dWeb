import React, { useState, useEffect } from "react";

export default function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="z-50 fixed bottom-4 right-4 z-100 bg-[#5E0C1C] text-white p-2.5 rounded-full cursor-pointer"
          aria-label="Scroll to top"
        >
          <div className="group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-[#D5AC72] group-hover:fill-[#7f6744] transition-colors duration-300"
            >
              <path d="M13 20h-2V8l-5.5 5.5l-1.42-1.42L12 4.16l7.92 7.92l-1.42 1.42L13 8z" />
            </svg>
          </div>
        </button>
      )}
    </>
  );
}
