import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "@phosphor-icons/react";

const images = import.meta.glob("../../assets/landingPage/gallery/image*.png", {
  eager: true,
});

const allCards = Object.keys(images).map((path, index) => ({
  id: index + 1,
  image: images[path].default,
}));

export default function ProductsGallery() {
  const navigate = useNavigate();

  return (
    <Box className="relative z-10 bg-black text-[#E0E0E0] h-screen overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 2, ease: "easeOut" }}
        onClick={() => navigate("/")}
        className="flex items-center gap-4 text-[#DAAC69] absolute top-6 left-6 z-50 cursor-pointer"
      >
        <ArrowLeft
          size={40}
          className="hover:text-[#6D5634] hover:scale-110 transition-transform duration-300"
        />
      </motion.div>

      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-screen px-10 overflow-hidden">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          animate={{ y: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
        >
          {[...allCards, ...allCards].map((card, i) => (
            <div
              key={`${card.id}-${i}`}
              className={`w-fit h-[272px] border-4 border-[#333] rounded-2xl overflow-hidden flex justify-center items-center bg-black ${
                i % 3 === 1 ? "translate-y-40" : ""
              } hover:shadow-xl hover:shadow-[#DAAC69] transition-shadow duration-300`}
            >
              <img
                src={card.image}
                alt={`gallery-item-${card.id}`}
                style={{ aspectRatio: "8 / 7", objectFit: "contain" }}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute -z-10 top-0 left-0 w-1/2 h-full bg-transparent">
        <div
          className="h-full"
          style={{
            background:
              "linear-gradient(to left top, rgba(60, 0, 8, 0) 0%, rgba(60, 0, 8, 0) 40%, rgba(77, 14, 27, 0.8) 100%)",
          }}
        />
      </div>
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-transparent">
        <div
          className="h-full"
          style={{
            background:
              "linear-gradient(to right top, rgba(60, 0, 8, 0) 0%, rgba(60, 0, 8, 0) 40%, rgba(77, 14, 27, 0.8) 100%)",
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
            "linear-gradient(to bottom, #000 0%, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0.2) 80%, transparent 100%)",
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
            "linear-gradient(to top, #000 0%, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0.2) 80%, transparent 100%)",
          zIndex: 20,
          pointerEvents: "none",
        }}
      />
    </Box>
  );
}
