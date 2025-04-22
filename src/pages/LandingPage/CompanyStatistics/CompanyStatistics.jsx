import { motion } from "framer-motion";

export default function CompanyStatistics() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const faderight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.5 },
    },
  };

  return (
    <div className="bg-transparent flex flex-row max-md:flex-col gap-16 max-md:gap-8 justify-center items-center px-40 max-lg:px-20 max-md:px-10 pb-10">
      <div className="text-[#5E0C1C] text-[22px] grid grid-cols-2">
        <div className="border-r-2 border-b-2 border-[#938068] flex flex-col items-center px-8 py-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -200px 0px" }}
            custom={0}
            variants={fadeInUp}
            className="flex flex-col items-center"
          >
            <span className="text-[#5E0C1C] text-[22px]">25000+</span>
            <span className="text-[#d3d3d3] text-[14px] text-center">
              Parts Manufactured
            </span>
          </motion.div>
        </div>
        <div className="border-b-2 border-[#938068] flex flex-col items-center px-8 py-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -200px 0px" }}
            custom={1}
            variants={fadeInUp}
            className="flex flex-col items-center"
          >
            <span className="text-[#5E0C1C] text-[22px]">30+</span>
            <span className="text-[#d3d3d3] text-[14px] text-center">
              Materials Avaliable
            </span>
          </motion.div>
        </div>
        <div className="border-r-2 border-[#938068] flex flex-col items-center px-8 py-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            custom={2}
            variants={fadeInUp}
            className="flex flex-col items-center"
          >
            <span className="text-[#5E0C1C] text-[22px]">1500+</span>
            <span className="text-[#d3d3d3] text-[14px] text-center">
              Delivery Right To Your Doorstep
            </span>
          </motion.div>
        </div>
        <div className="flex flex-col items-center px-8 py-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            custom={3}
            variants={fadeInUp}
            className="flex flex-col items-center"
          >
            <span className="text-[#5E0C1C] text-[22px]">10+</span>
            <span className="text-[#d3d3d3] text-[14px] text-center">
              Different Industrial Printers
            </span>
          </motion.div>
        </div>
      </div>
      <div className="flex w-2/5 max-sm:w-full">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -200px 0px" }}
          custom={0}
          variants={faderight}
          className="text-left text-[20px] max-md:text-center text-[#ffffff]"
        >
          3D printing, also known as additive manufacturing, has emerged as a
          transformative technology with wide-ranging applications across
          various industries. This innovative process involves creating
          three-dimensional objects layer by layer from a digital model
        </motion.p>
      </div>
    </div>
  );
}
