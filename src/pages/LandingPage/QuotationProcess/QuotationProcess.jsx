import { ArrowUpRight, Check } from "@phosphor-icons/react";
import quotation from "../../../assets/landingPage/quotation.png";
import check from "../../../assets/landingPage/check.svg";
import { motion } from "framer-motion";

export default function QuotationProcess() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1 + i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const fadeleft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 1, duration: 1.5 },
    },
  };

  const faderight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 1, duration: 1.5 },
    },
  };

  return (
    <div className="bg-[#000000] flex flex-col gap-8 text-[#000000] px-40 max-lg:px-10 pb-10">
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        variants={fadeInUp}
        className="text-[#5E0C1C] text-[24px] font-semibold"
      >
        How it works?
      </motion.span>
      <div className="flex flex-row justify-between text-[#ffffff]">
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={fadeInUp}
          className="w-2/5 text-[40px] font-semibold leading-12 max-lg:w-full"
        >
          Instant Online Quotation
        </motion.h3>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={faderight}
          className="block text-[#d3d3d3] text-[16px] w-2/3 leading-5 max-xl:hidden"
        >
          State of the art Digital Manufacturing platform that enables you to
          get instant online quote, fabricate and track all your additive
          manufacturing (3d printing), rapid prototyping, batch production and
          mass manufacturing requirements.
        </motion.p>
      </div>
      <div className="flex flex-row justify-between w-full max-lg:flex-col max-lg:gap-8 text-[#ffffff]">
        <div className="flex flex-col gap-4 w-2/5 max-lg:w-full">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeInUp}
            className="text-[24px] font-semibold"
          >
            Learn about how our Platform works
          </motion.span>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeInUp}
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
            <div className="flex flex-row items-start gap-2">
              <motion.img
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                variants={fadeleft}
                src={check}
                alt="check"
                className="size-6"
              />
              <motion.span
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                variants={faderight}
              >
                Upload a 3D CAD file (STL, STEP, STP, IGES, IGS)
              </motion.span>
            </div>
            <div className="flex flex-row items-start gap-2">
              <motion.img
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                variants={fadeleft}
                src={check}
                alt="check"
                className="size-6"
              />
              <motion.span
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                variants={faderight}
              >
                Prices updates in real-time based on the selected manufacturing
                process, material and other process parameters.
              </motion.span>
            </div>
            <div className="flex flex-row items-start gap-2">
              <motion.img
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                variants={fadeleft}
                src={check}
                alt="check"
                className="size-6"
              />
              <motion.span
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                variants={faderight}
              >
                Choose form a variety of post processing options tailored to
                suit your project.
              </motion.span>
            </div>
          </div>
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            viewport={{ once: true }}
            className="text-[#B8A082] text-[16px] font-semibold flex flex-row items-center gap-1 cursor-pointer hover:text-[#938068]"
          >
            Read How Instant Quotation Works <ArrowUpRight size={18} />
          </motion.span>
        </div>
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
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
