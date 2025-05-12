import Box from "@mui/material/Box";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import logo from "../../assets/landingPage/logo.png";
import { useNavigate } from "react-router-dom";

const images = import.meta.glob("../../assets/landingPage/gallery/image*.png", {
  eager: true,
});

const allCards = Object.keys(images).map((path, index) => ({
  id: index + 1,
  image: images[path].default,
  title: `Image ${index + 1}`,
}));
const initialCards = allCards.slice(0, 9);

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

  const [galleryCards, setGalleryCards] = useState(initialCards);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreFromAPI = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const currentLength = galleryCards.length;
        const moreCards = allCards.slice(currentLength, currentLength + 6);
        resolve(moreCards);
      }, 1000);
    });
  };

  const fetchMoreCards = async () => {
    const newCards = await fetchMoreFromAPI();
    if (newCards.length === 0) {
      setHasMore(false);
    } else {
      setGalleryCards((prev) => [...prev, ...newCards]);
    }
  };

  return (
    <Box className="relative z-10 bg-[#000000] text-[#E0E0E0] h-screen">
      {/* Left Section */}
      {/* Left Section */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={variantsfadeIn}
        onClick={() => navigate("/")}
        className="flex items-center gap-4 absolute left-30 top-30 transform -translate-y-1/2 px-4 z-50" // Added z-index
      >
        <img src={logo} alt="logo" className="size-32 mt-5 cursor-pointer" />
      </motion.div>

      {/* Right Section */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={variantsfadeIn}
        className="flex flex-row gap-4 text-[#DAAC69] text-[20px] absolute right-30 top-30 transform -translate-y-1/2 px-4 z-50" // Added z-index
      >
        <span
          className="hover:text-[#6D5634] cursor-pointer"
          onClick={() => navigate("/")}
        >
          Home
        </span>
      </motion.div>

      <div className="z-20 absolute top-0 left-1/2 transform -translate-x-1/2 h-screen overflow-hidden px-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          animate={{ y: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {[...galleryCards, ...galleryCards].map((card, i) => (
            <div
              key={`${card.id}-${i}`}
              className={`cursor-pointer w-fit h-[272px] border-4 border-[#333] rounded-2xl overflow-hidden flex justify-center items-center bg-[#000] ${
                i % 3 === 1 ? "transform translate-y-40" : ""
              } hover:shadow-xl hover:shadow-[#DAAC69] transition-shadow duration-300 ease-in-out`}
            >
              <img
                src={card.image}
                alt={`gallery-item-${card.id}`}
                style={{
                  aspectRatio: "8 / 7",
                  objectFit: "contain",
                  backgroundColor: "transparent",
                }}
                className="scale-100 transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute -z-10 top-0 left-0 w-3/6 h-full bg-transparent">
        <div
          className="h-full"
          style={{
            background:
              "linear-gradient(to left top, rgb(60, 0, 8, 0) 0%, rgb(60, 0, 8, 0) 40%, rgba(77, 14, 27, 0.8) 100%)",
          }}
        />
      </div>
      <div className="absolute top-0 right-0 -z-10 w-3/6 h-full bg-transparent">
        <div
          className="h-full"
          style={{
            background:
              "linear-gradient(to right top, rgb(60, 0, 8, 0) 0%, rgb(60, 0, 8, 0) 40%, rgba(77, 14, 27, 0.8) 100%)",
          }}
        />
      </div>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "20%",
          backgroundImage:
            "linear-gradient(to bottom, #000000 0%, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.2) 80%, transparent 100%)",
          zIndex: 20,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "20%",
          backgroundImage:
            "linear-gradient(to top, #000000 0%, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.2) 80%, transparent 100%)",
          zIndex: 20,
          pointerEvents: "none",
        }}
      />
    </Box>
  );
}

{
  /*<motion.div
        className="text-[#D5AC72] text-[32px] font-vonique px-40"
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
      */
}
{
  /*
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
        {initialCards.map((card) => (
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
      */
}
