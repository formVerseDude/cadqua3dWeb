import whatWeOffer from "../../../assets/landingPage/whatWeOffer.png";
import { useState } from "react";
import { motion } from "framer-motion";

export default function WhatWeOffer() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const getDivClass = (index) => {
    if (activeIndex === index) {
      return "bg-white text-[#5E0C1C] cursor-pointer";
    }
    return "bg-[#000000] text-[#ffffff] cursor-pointer";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="bg-[#000000] flex w-full flex-row max-lg:flex-col items-center px-40 max-lg:px-10 pt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.div className="w-2/5" variants={itemVariants}>
        <img src={whatWeOffer} alt="whatWeOffer" className="h-full w-full" />
      </motion.div>
      <motion.div
        className="w-3/5 max-lg:w-full px-10 flex flex-col gap-10"
        variants={itemVariants}
      >
        <motion.span
          className="text-[28px] max-sm:text-[24px] text-[#ffffff]"
          variants={itemVariants}
        >
          We Pride Ourselves On Being The Beacon Of Reliability In The 3D
          Printing Industry. Our Cutting Edge Technology Is Matched Only By Our
          Commitment To Your Satisfaction.
        </motion.span>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          variants={containerVariants}
        >
          <motion.div
            className={`flex flex-col px-6 py-3 rounded-[10px] ${getDivClass(
              0
            )}`}
            style={{ boxShadow: "inset 0 4px 8px rgba(0, 0, 0, 0.2)" }}
            onClick={() => handleClick(0)}
            variants={itemVariants}
          >
            <span className="text-[30px]">01</span>
            <span className="text-[18px]">High Quality Printed parts</span>
          </motion.div>
          <motion.div
            className={`flex flex-col px-6 py-3 rounded-[10px] ${getDivClass(
              1
            )}`}
            style={{ boxShadow: "inset 0 4px 8px rgba(0, 0, 0, 0.2)" }}
            onClick={() => handleClick(1)}
            variants={itemVariants}
          >
            <span className="text-[30px]">02</span>
            <span className="text-[18px]">Durable, High Quality Finish</span>
          </motion.div>

          <motion.div
            className={`flex flex-col px-6 py-3 rounded-[10px] ${getDivClass(
              2
            )}`}
            style={{ boxShadow: "inset 0 4px 8px rgba(0, 0, 0, 0.2)" }}
            onClick={() => handleClick(2)}
            variants={itemVariants}
          >
            <span className="text-[30px]">03</span>
            <span className="text-[18px]">Design Consultancy</span>
          </motion.div>
          <motion.div
            className={`flex flex-col px-6 py-3 rounded-[10px] ${getDivClass(
              3
            )}`}
            style={{ boxShadow: "inset 0 4px 8px rgba(0, 0, 0, 0.2)" }}
            onClick={() => handleClick(3)}
            variants={itemVariants}
          >
            <span className="text-[30px]">04</span>
            <span className="text-[18px]">White Label Shipping</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
