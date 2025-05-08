import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

function Counter({ from = 0, to, duration = 2 }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) =>
    Math.floor(latest).toLocaleString()
  );

  useEffect(() => {
    const controls = animate(count, to, {
      duration,
      delay: 1,
      ease: "easeOut",
    });
    return controls.stop;
  }, [count, to, duration]);

  return <motion.span>{rounded}</motion.span>;
}

export default function CompanyStatistics() {
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const stats = [
    { value: 25000, label: "Parts Manufactured" },
    { value: 30, label: "Materials Available" },
    { value: 1500, label: "Delivery Right To Your Doorstep" },
    { value: 10, label: "Different Industrial Printers" },
  ];

  return (
    <div className="bg-[#000000] z-10 mt-14 pt-10 pb-10 gap-16 max-md:gap-8 justify-center items-center px-40 max-lg:px-20 max-md:px-10">
      <div className="text-[#5E0C1C] text-[22px] grid grid-cols-2">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${index < 2 ? "border-b-2" : ""} ${
              index % 2 === 0 ? "border-r-2" : ""
            } border-[#5E0C1C] flex flex-col items-center px-8 py-4`}
          >
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={variants}
              className="flex flex-col items-center"
            >
              <span className="text-[#D5AC72] text-[22px]">
                <Counter to={stat.value} />+
              </span>
              <span className="text-[#d3d3d3] text-[14px] text-center">
                {stat.label}
              </span>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
