import whatWeOffer from "../../../assets/landingPage/whatWeOffer.png";
import { useState } from "react";
import { motion } from "framer-motion";

export default function WhatWeOffer() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const getDivClass = (index) => {
    return activeIndex === index
      ? "bg-white text-[#5E0C1C] cursor-pointer"
      : "bg-[#000000] text-[#ffffff] cursor-pointer";
  };

  const variants = {
    hidden: { opacity: 0, y: 20, scale: 0 },
    show: (i) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.07,
        duration: 1.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="bg-[#000000] flex w-full flex-row max-lg:flex-col items-center px-40 max-lg:px-10 pt-20">
      <motion.div
        className="w-2/5"
        variants={variants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <img src={whatWeOffer} alt="whatWeOffer" className="h-full w-full" />
      </motion.div>

      <motion.div
        className="w-3/5 max-lg:w-full px-10 flex flex-col gap-10"
        variants={variants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.span
          className="text-[28px] max-sm:text-[24px] text-[#ffffff]"
          variants={variants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          We Pride Ourselves On Being The Beacon Of Reliability In The 3D
          Printing Industry. Our Cutting Edge Technology Is Matched Only By Our
          Commitment To Your Satisfaction.
        </motion.span>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          variants={variants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {[
            { id: 0, title: "High Quality Printed parts" },
            { id: 1, title: "Durable, High Quality Finish" },
            { id: 2, title: "Design Consultancy" },
            { id: 3, title: "White Label Shipping" },
          ].map((item, idx) => (
            <motion.div
              key={item.id}
              className={`flex flex-col px-6 py-3 rounded-[10px] ${getDivClass(
                item.id
              )}`}
              style={{ boxShadow: "inset 0 4px 8px rgba(0, 0, 0, 0.2)" }}
              onClick={() => handleClick(item.id)}
              variants={variants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <span className="text-[30px]">{`0${item.id + 1}`}</span>
              <span className="text-[18px]">{item.title}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
