import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Rotation from "../../../assets/landingPage/Rotation.mp4";

export default function WhatWeOffer() {
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
    <div className="bg-[#000000] flex w-full h-full flex-col gap-10 px-40 py-10">
      <motion.span
        className="text-[28px] max-sm:text-[24px] text-[#D5AC72] font-vonique"
        ref={ref}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={variantsflow}
        viewport={{ once: true }}
        style={{ wordSpacing: "0.5rem" }}
      >
        {letters.map((word, i) => (
          <motion.span key={`${word}-${i}`} variants={variantsflow} custom={i}>
            {word}
          </motion.span>
        ))}
      </motion.span>

      <div className="flex flex-row gap-20 w-full h-full mt-10">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-200px" }}
          style={{ zIndex: "10" }}
        >
          <video
            src={Rotation}
            className="w-full scale-100"
            autoPlay
            loop
            muted
            playsInline
          />
        </motion.div>

        <motion.div
          className="flex flex-col w-full h-[500px] justify-between cursor-pointer"
          variants={variants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {[
            { id: 0, title: "High Quality Printed parts" },
            { id: 1, title: "Instant Online Quotation" },
            { id: 2, title: "Design Consultancy" },
            { id: 3, title: "White Label Shipping" },
          ].map((item, idx) => (
            <motion.div
              key={item.id}
              className={`flex flex-col justify-center rounded-[14px] w-fit text-[24px] ${
                idx === 1 || idx === 2 ? "ml-20" : ""
              } border-2 border-[#D5AC72] px-8 py-4 bg-[#1A1A1A] transition ease-in-out duration-500 hover:scale-105 hover:bg-black hover:opacity-60`}
            >
              <span className="text-[20px] text-[#ffffff]">{item.title}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
