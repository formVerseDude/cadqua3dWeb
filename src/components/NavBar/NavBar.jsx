import logo from "../../assets/landingPage/logo.png";
import { List } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function NavBar({ setOpenNavModal }) {
  const navigate = useNavigate();

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

  return (
    <div className="absolute fixed z-100 top-0 bg-black/30 backdrop-blur-md cursor-pointer pointer-events-auto flex flex-row justify-between items-center w-full pl-28 pr-20 max-sm:pl-[10%] max-sm:pr-[10%]">
      <motion.div initial="hidden" animate="show" variants={variantsfadeIn}>
        <img src={logo} alt="logo" className="size-16 my-4" />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={variantsfadeIn}
        className="flex flex-row gap-4 text-[#DAAC69] text-[20px] block max-lg:hidden"
      >
        <span
          className="border-r-2 border-[#DAAC69] pr-4 hover:text-[#6D5634] cursor-pointer"
          onClick={() =>
            document
              .getElementById("how-it-works")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          How it works?
        </span>
        <span
          className="border-r-2 border-[#DAAC69] pr-4 hover:text-[#6D5634] cursor-pointer"
          onClick={() =>
            document
              .getElementById("services")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Services
        </span>
        <span
          className="border-r-2 border-[#DAAC69] pr-4 hover:text-[#6D5634] cursor-pointer"
          onClick={() => navigate("/gallery")}
        >
          Gallery
        </span>

        <span
          className="border-r-2 border-[#DAAC69] pr-4 hover:text-[#6D5634] cursor-pointer"
          onClick={() =>
            document
              .getElementById("testimonials")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Testimonials
        </span>
        <span
          className="border-r-2 border-[#DAAC69] pr-4 hover:text-[#6D5634] cursor-pointer"
          onClick={() =>
            document
              .getElementById("formverse")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          FormVerse
        </span>
        <span
          className="hover:text-[#6D5634] cursor-pointer"
          onClick={() =>
            document
              .getElementById("faq")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          FAQ
        </span>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={variantsfadeIn}
        className="hidden max-lg:block cursor-pointer"
        onClick={() => setOpenNavModal(true)}
      >
        <List color="#DAAC69" size={40} />
      </motion.div>
    </div>
  );
}
