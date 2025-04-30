import Box from "@mui/material/Box";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

// Auto-import all gallery images using Vite's glob
const images = import.meta.glob(
  "../../../assets/landingPage/gallery/image*.png",
  {
    eager: true,
  }
);

const galleryCards = Object.keys(images).map((path, index) => ({
  id: index + 1,
  image: images[path].default,
}));

export default function ProductsGallery() {
  const splideRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const text = "Gallery";
  const letters = text.split("");

  const handlePreviousReview = () => {
    if (splideRef.current) splideRef.current.go("<");
  };

  const handleNextReview = () => {
    if (splideRef.current) splideRef.current.go(">");
  };

  const variantsflow = {
    hidden: { opacity: 0 },
    show: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.07 },
    }),
  };

  const listItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, delay: 1, transition: { duration: 1 } },
  };

  return (
    <Box className="px-40 max-lg:px-20 max-md:px-10 bg-[#000000] text-[#E0E0E0] py-20">
      {/* Animated Title */}
      <motion.div
        className="text-[#5E0C1C] text-[32px] font-semibold mb-8"
        ref={ref}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.05 } },
        }}
      >
        {letters.map((letter, i) => (
          <motion.span
            key={`${letter}-${i}`}
            variants={variantsflow}
            custom={i}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>

      {/* Splide Slider */}
      <Splide
        ref={splideRef}
        options={{
          type: "loop",
          perPage: 4,
          gap: "1rem",
          focus: "center",
          pagination: false,
          arrows: false,
        }}
        aria-label="Gallery"
      >
        {galleryCards.map((card) => (
          <SplideSlide key={card.id}>
            <motion.div
              variants={listItem}
              className="bg-[#1A1A1A] rounded-2xl overflow-hidden flex justify-center items-center w-[272px] h-[272px]"
            >
              <img
                src={card.image}
                alt={`gallery-item-${card.id}`}
                className="w-[272px] h-[272px] object-cover rounded-2xl scale-[0.98]"
              />
            </motion.div>
          </SplideSlide>
        ))}
      </Splide>

      {/* Arrows */}
      <div className="flex items-center gap-4 mt-8 justify-end">
        <KeyboardBackspaceIcon
          className="text-[#D5AC72] cursor-pointer hover:text-[#7f6744]"
          style={{ fontSize: "50px" }}
          onClick={handlePreviousReview}
        />
        <KeyboardBackspaceIcon
          className="text-[#D5AC72] cursor-pointer rotate-180 hover:text-[#7f6744]"
          style={{ fontSize: "50px" }}
          onClick={handleNextReview}
        />
      </div>
    </Box>
  );
}
