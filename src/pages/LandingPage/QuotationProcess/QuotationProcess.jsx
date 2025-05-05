import { ArrowUpRight } from "@phosphor-icons/react";
import Printer from "../../../assets/landingPage/3DPrinter.jpg";
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
    <section id="how-it-works">
      <div className="bg-[#000000] flex flex-col gap-8 text-[#000000] px-40 max-lg:px-10 py-10">
        <motion.span
          initial="hidden"
          whileInView="show"
          variants={variants}
          viewport={{ once: true }}
          className="text-[#D5AC72] text-[24px] font-fontspringextrabold"
        >
          How it works?
        </motion.span>

        <div className="flex flex-row justify-between text-[#ffffff] font-fontspringsemibold">
          <motion.h3
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={variants}
            className="w-full text-[40px] font-semibold leading-12"
          >
            Instant Online Quotation
          </motion.h3>
        </div>

        <div className="flex flex-row justify-between items-center w-full max-lg:flex-col max-lg:gap-8 text-[#ffffff]">
          <div className="flex justify-center items-center">
            <motion.img
              initial="hidden"
              whileInView="show"
              variants={variants}
              viewport={{ once: true }}
              src={Printer}
              alt="Printer"
              className="w-[600px] h-80 max-md:w-full max-md:h-full rounded-[12px]"
            />
          </div>
          <div className="flex flex-col justify-between gap-4 w-2/5 max-lg:w-full">
            <motion.span
              initial="hidden"
              whileInView="show"
              variants={variants}
              viewport={{ once: true }}
              className="text-[24px] font-fontspringsemibold"
            >
              Learn about how our Platform works
            </motion.span>

            <div className="text-[16px] font-medium flex flex-col gap-2 leading-5">
              {[
                "Upload your 3D CAD file (STL, STEP, STP, IGES, IGS)",
                "Preliminary pricing estimate based on selected process, material, and part specifications",
                "Expert review and guidance provided by our engineering team",
                "Final quote confirmation with tailored recommendations to optimize cost, quality, and manufacturability",
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
        </div>
      </div>
    </section>
  );
}
