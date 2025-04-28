import Box from "@mui/material/Box";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import helmet from "../../../assets/landingPage/gallery/1.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; // Import the default CSS for Splide
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export default function ProductsGallery() {
  const galleryCards = [
    { id: 1, image: helmet },
    { id: 2, image: helmet },
    { id: 3, image: helmet },
    { id: 4, image: helmet },
    { id: 5, image: helmet },
    { id: 6, image: helmet },
    { id: 7, image: helmet },
    { id: 8, image: helmet },
  ];

  const splideRef = useRef(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, delay: 1, transition: { duration: 1 } },
  };

  const variantsflow = {
    hidden: { opacity: 0 },
    show: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.07 },
    }),
  };

  const text = "Gallery";
  const letters = text.split("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handlePreviousReview = () => {
    if (splideRef.current) {
      splideRef.current.go("<");
    }
  };

  const handleNextReview = () => {
    if (splideRef.current) {
      splideRef.current.go(">");
    }
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
        {letters.map((word, i) => (
          <motion.span key={`${word}-${i}`} variants={variantsflow} custom={i}>
            {word}
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
        {galleryCards.map((card, index) => (
          <SplideSlide key={card.id}>
            <motion.div
              variants={listItem}
              className="bg-[#1A1A1A] rounded-2xl overflow-hidden flex justify-center items-center min-w-[17rem] min-h-[17rem]"
            >
              <img
                src={card.image}
                alt={`gallery-item-${card.id}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </SplideSlide>
        ))}
      </Splide>

      {/* Custom Arrows */}
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
