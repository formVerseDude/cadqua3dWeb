import Box from "@mui/material/Box";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import logo from "../../assets/landingPage/logo.png";
import { useNavigate } from "react-router-dom";

const images = import.meta.glob("../../assets/landingPage/gallery/image*.png", {
  eager: true,
});

const galleryCards = Object.keys(images).map((path, index) => ({
  id: index + 1,
  image: images[path].default,
  title: `Image ${index + 1}`,
}));

export default function ProductsGallery() {
  const splideRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const text = "Gallery";
  const letters = text.split("");

  const navigate = useNavigate();

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

  const variantsfadeIn = {
    hidden: { opacity: 0, y: 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.25,
        duration: 2,
        ease: "easeOut",
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, delay: 1, transition: { duration: 1 } },
  };

  return (
    <Box className="relative z-10 px-40 bg-[#000000] text-[#E0E0E0]">
      <div className=" cursor-pointer pointer-events-auto flex flex-row justify-between items-center w-full pb-20 pt-5">
        <motion.div
          initial="hidden"
          animate="show"
          variants={variantsfadeIn}
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="logo" className="size-32 mt-5" />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="show"
          variants={variantsfadeIn}
          className="flex flex-row gap-4 text-[#DAAC69] text-[20px]"
        >
          <span
            className="hover:text-[#6D5634] cursor-pointer"
            onClick={() => navigate("/")}
          >
            Home
          </span>
        </motion.div>
      </div>
      <motion.div
        className="text-[#D5AC72] text-[32px] font-vonique mb-8"
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
      <Splide
        ref={splideRef}
        options={{
          type: "loop",
          perPage: 4,
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
              className="relative cursor-pointer group hover:scale-105 transform transition duration-300 hover:bg-[#2A2A2A] border-4 border-[#333] rounded-2xl overflow-hidden flex justify-center items-center w-[272px] h-[272px]"
            >
              <img
                src={card.image}
                alt={`gallery-item-${card.id}`}
                style={{
                  aspectRatio: "8 / 7",
                  objectFit: "contain",
                  backgroundColor: "transparent",
                }}
              />
            </motion.div>
          </SplideSlide>
        ))}
      </Splide>
      <div className="flex items-center gap-4 mt-8 justify-end">
        <KeyboardBackspaceIcon
          className="text-[#D5AC72] cursor-pointer hover:text-[#7f6744] transition duration-200"
          style={{ fontSize: "50px" }}
          onClick={handlePreviousReview}
        />
        <KeyboardBackspaceIcon
          className="text-[#D5AC72] cursor-pointer rotate-180 hover:text-[#7f6744] transition duration-200"
          style={{ fontSize: "50px" }}
          onClick={handleNextReview}
        />
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-6 my-20">
        {galleryCards.map((card) => (
          <motion.div
            key={card.id}
            variants={listItem}
            className="relative cursor-pointer group hover:scale-105 transform transition duration-300 hover:bg-[#2A2A2A] border-4 border-[#333] rounded-2xl overflow-hidden flex justify-center items-center w-[272px] h-[272px]"
          >
            <img
              src={card.image}
              alt={`gallery-item-${card.id}`}
              style={{
                aspectRatio: "8 / 7",
                objectFit: "contain",
                backgroundColor: "transparent",
              }}
            />
          </motion.div>
        ))}
      </div>
      <div className="absolute -z-10 top-0 left-0 w-3/6 h-full bg-transparent">
        <div
          className="h-full"
          style={{
            background:
              "linear-gradient(to left top, rgb(60, 0, 8, 0) 0%, rgb(60, 0, 8, 0) 10%, rgb(60, 0, 8, 0) 20%, rgb(60, 0, 8, 0) 30%, rgb(60, 0, 8, 0) 40%, rgba(77, 14, 27, 0.8) 100%,  rgb(60, 0, 8, 0.8) 100%",
          }}
        />
      </div>
      <div className="absolute top-0 right-0 -z-10 w-3/6 h-full bg-transparent">
        <div
          className="h-full"
          style={{
            background:
              "linear-gradient(to right top, rgb(60, 0, 8, 0) 0%, rgb(60, 0, 8, 0) 10%, rgb(60, 0, 8, 0) 20%, rgb(60, 0, 8, 0) 30%, rgb(60, 0, 8, 0) 40%, rgba(77, 14, 27, 0.8) 100%,  rgb(60, 0, 8, 0.8) 100%",
          }}
        />
      </div>
    </Box>
  );
}
