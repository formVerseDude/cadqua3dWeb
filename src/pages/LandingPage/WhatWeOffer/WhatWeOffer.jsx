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
      ? "text-[#5E0C1C] cursor-pointer"
      : "text-[#ffffff] cursor-pointer";
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
        className="border-[#1A1A1A] border-2"
      >
        <img src={whatWeOffer} alt="whatWeOffer" className="size-96" />
        <span className="text-[#ffffff]">Placeholder for 3d Model</span>
      </motion.div>

      <motion.div
        className="w-3/5 max-lg:w-full px-10 flex flex-col gap-10"
        variants={variants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.span
          className="text-[28px] max-sm:text-[24px] text-[#D5AC72]"
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
              onClick={() => handleClick(item.id)}
              variants={variants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <span className="font-blacksword cursor-pointer group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-[#5E0C1C] hover:before:[box-shadow:_20px_20px_20px_30px] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-[#5E0C1C] relative bg-transparent h-16 w-64 border text-left p-3 text-[#D5AC72] text-base font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content-[''] before:right-1 before:top-1 before:z-10 before:bg-[#5E0C1C] before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content-[''] after:bg-[#D5AC72] after:right-8 after:top-3 after:rounded-full after:blur-lg">
                {`0${item.id + 1}`}
                {item.title}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
