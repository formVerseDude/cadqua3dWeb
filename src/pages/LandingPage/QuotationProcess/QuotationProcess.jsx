import { ArrowUpRight } from "@phosphor-icons/react";
import quotation from "../../../assets/landingPage/quotation.png";
import check from "../../../assets/landingPage/check.svg";
import { motion } from "framer-motion";

export default function QuotationProcess() {
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

  return (
    <div className="bg-[#000000] flex flex-col gap-8 text-[#000000] px-40 max-lg:px-10 py-10">
      <motion.span
        initial="hidden"
        whileInView="show"
        variants={variants}
        viewport={{ once: true }}
        className="text-[#D5AC72] text-[24px] font-semibold"
      >
        How it works?
      </motion.span>

      <div className="flex flex-row justify-between text-[#ffffff]">
        <motion.h3
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={variants}
          className="w-2/5 text-[40px] font-semibold leading-12 max-lg:w-full"
        >
          Instant Online Quotation
        </motion.h3>
      </div>

      <div className="flex flex-row justify-between items-center w-full max-lg:flex-col max-lg:gap-8 text-[#ffffff]">
        <div className="flex flex-col gap-4 w-2/5 max-lg:w-full">
          <motion.span
            initial="hidden"
            whileInView="show"
            variants={variants}
            viewport={{ once: true }}
            className="text-[24px] font-semibold"
          >
            Learn about how our Platform works
          </motion.span>

          <motion.p
            initial="hidden"
            whileInView="show"
            variants={variants}
            viewport={{ once: true }}
            className="text-[16px] font-medium leading-6"
          >
            We use a precise rule-based system that analyzes your CAD file
            against our comprehensive database of manufacturing parameters. This
            ensures accurate, instant quotes tailored to your part's
            specifications, material needs, and complexity. Our system is
            optimized for speed, accuracy, and reliability, giving you
            confidence in every quote.
          </motion.p>

          <div className="text-[16px] font-medium flex flex-col gap-2 leading-5">
            {[
              "Upload a 3D CAD file (STL, STEP, STP, IGES, IGS)",
              "Prices update in real-time based on the selected manufacturing process, material and other process parameters.",
              "Choose from a variety of post processing options tailored to suit your project.",
            ].map((text, idx) => (
              <div key={idx} className="flex flex-row items-start gap-2">
                <motion.img
                  initial="hidden"
                  whileInView="show"
                  variants={variants}
                  viewport={{ once: true }}
                  src={check}
                  alt="check"
                  className="size-6"
                />
                <motion.span
                  initial="hidden"
                  whileInView="show"
                  variants={variants}
                  viewport={{ once: true }}
                >
                  {text}
                </motion.span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center">
          <motion.img
            initial="hidden"
            whileInView="show"
            variants={variants}
            viewport={{ once: true }}
            src={quotation}
            alt="quotation"
            className="w-[600px] h-80 max-md:w-full max-md:h-full rounded-[12px]"
          />
        </div>
      </div>
    </div>
  );
}
