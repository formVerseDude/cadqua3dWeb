import whatWeOffer from "../../../assets/landingPage/whatWeOffer.png";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

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

  const getDivStyle = (index) => {
    return activeIndex === index
      ? { boxShadow: "inset 0px 0px 40px rgba(94, 12, 28, 1)" }
      : {};
  };

  const variants = {
    hidden: { opacity: 0, y: 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 2,
        ease: "easeOut",
      },
    },
  };

  const variantsflow = {
    hidden: { opacity: 0 },
    show: (i) => ({
      y: 0,
      opacity: 3,
      transition: { delay: i * 0.07 },
    }),
  };

  const text = "One Stop Solution For Smart Manufacturing";
  const letters = text.split("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="bg-[#000000] flex w-full flex-row max-lg:flex-col justify-center items-center px-40 max-lg:px-10 py-10">
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-200px" }}
      >
        <img src={whatWeOffer} alt="whatWeOffer" className="size-96" />
      </motion.div>

      <motion.div
        className="w-3/5 max-lg:w-full px-10 flex flex-col gap-10"
        variants={variants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.span
          className="text-[28px] max-sm:text-[24px] text-[#5E0C1C]"
          ref={ref}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={variantsflow}
          viewport={{ once: true }}
        >
          {letters.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              variants={variantsflow}
              custom={i}
            >
              {word}
            </motion.span>
          ))}
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
              style={getDivStyle(item.id)}
              onClick={() => handleClick(item.id)}
              variants={variants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <span className="text-[28px]">{`0${item.id + 1}`}</span>
              <span className="text-[16px]">{item.title}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
