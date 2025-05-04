import { useRef, useState } from "react";
import landingPage from "../../../assets/landingPage/landingPage.mp4";
import logo from "../../../assets/landingPage/logo.png";
import { motion, useInView } from "framer-motion";
import InstantQuoteModal from "../../InstantQuote/InstantQuoteModal";

export default function HeroSection() {
  const [instantQuote, setInstantQuote] = useState(false);

  const variants = {
    hidden: { opacity: 0 },
    show: (i) => ({
      y: 0,
      delay: 0.25,
      opacity: 1,
      transition: { delay: i * 0.07 },
    }),
  };

  const variantsfadeIn = {
    hidden: { opacity: 0, y: 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.25,
        duration: 2,
        ease: "easeOut",
      },
    },
  };

  const text = "Together, Let’s Print the Future";
  const letters = text.split("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="bg-[#000000] relative h-full">
      <div className="absolute top-40 z-20 cursor-pointer pointer-events-auto flex flex-row justify-between items-center w-full pl-20 pr-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={variantsfadeIn}
        >
          <img src={logo} alt="logo" className="h-40" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={variantsfadeIn}
          className="flex flex-row gap-4 text-[#D5AC72] text-[20px]"
        >
          <span className="border-r-2 border-[#D5AC72] pr-4">
            How it works?
          </span>
          <span className="border-r-2 border-[#D5AC72] pr-4">Services</span>
          <span className="border-r-2 border-[#D5AC72] pr-4">Testimonials</span>
          <span className="">FAQ</span>
        </motion.div>
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-fit h-2/5">
        <div className="w-full flex flex-col justify-between gap-10 h-full bg-white/5 backdrop-blur-md rounded-l-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-l-2 border-y-2 border-[#D5AC72]/30 pl-6 pr-14 py-10">
          <div className="flex flex-col justify-between gap-16">
            <motion.h2
              ref={ref}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              variants={variants}
              viewport={{ once: true }}
              className="flex flex-row flex-wrap text-[#D5AC72] text-[44px] font-fontspringextrabold max-w-full"
            >
              {letters.map((char, i) => (
                <motion.span
                  key={`${char}-${i}`}
                  variants={variants}
                  custom={i}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h2>
            <motion.h3
              ref={ref}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              variants={variants}
              viewport={{ once: true }}
              className="flex justify-start text-[#D5AC72] text-[26px] font-fontspringsemibold text-left leading-12"
            >
              Empowering Innovation,
              <br /> through Cutting-Edge Printing Solutions.
            </motion.h3>
          </div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={variantsfadeIn}
            className="w-full flex justify-end z-20"
          >
            <button
              onClick={() => setInstantQuote(true)}
              className="font-vonique cursor-pointer group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-[#3F1317] hover:before:[box-shadow:_20px_20px_20px_30px] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-[#3F1317] relative bg-transparent h-28 w-[500px] border text-left px-6 py-3 text-[#D5AC72] text-2xl font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-[#3F1317] before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-[#D5AC72] after:right-8 after:top-3 after:rounded-full after:blur-lg tracking-wider"
            >
              Get Instant Quote
            </button>
          </motion.div>
        </div>
      </div>

      <div className="overflow-hidden w-full -mt-40">
        <video
          src={landingPage}
          className="scale-100 z-10 -translate-x-2/9"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <div className="absolute z-20 bottom-20 flex w-full px-40 max-lg:px-20 max-md:px-10">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-200px" }}
          variants={variants}
          className="text-center text-[20px] text-[#D5AC72] font-fontspringextrabold"
        >
          3D printing, also known as additive manufacturing, has emerged as a
          transformative technology with wide-ranging applications across
          various industries. This innovative process involves creating
          three-dimensional objects layer by layer from a digital model.
        </motion.p>
      </div>

      {/*<motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={variantsfadeIn}
        className="absolute flex flex-row justify-between right-0 z-20 top-0 h-full w-full px-20"
      >
        <img src={goldenLine} alt="goldenLine" />
      </motion.div>*/}

      <div className="absolute top-0 left-0 w-3/6 h-full z-10 bg-transparent">
        <div
          className="h-full"
          style={{
            background:
              "linear-gradient(to left top, rgb(60, 0, 8, 0) 0%, rgb(60, 0, 8, 0) 10%, rgb(60, 0, 8, 0) 20%, rgb(60, 0, 8, 0) 30%, rgb(60, 0, 8, 0) 40%, rgba(77, 14, 27, 0.8) 100%,  rgb(60, 0, 8, 0.8) 100%",
          }}
        />
      </div>
      <div className="absolute top-0 right-0 w-3/6 h-full z-10 bg-transparent">
        <div
          className="h-full"
          style={{
            background:
              "linear-gradient(to right top, rgb(60, 0, 8, 0) 0%, rgb(60, 0, 8, 0) 10%, rgb(60, 0, 8, 0) 20%, rgb(60, 0, 8, 0) 30%, rgb(60, 0, 8, 0) 40%, rgba(77, 14, 27, 0.8) 100%,  rgb(60, 0, 8, 0.8) 100%",
          }}
        />
      </div>

      <InstantQuoteModal
        open={instantQuote}
        handleClose={() => setInstantQuote(false)}
      />
    </div>
  );
}

//background-image: linear-gradient(to right bottom, #5e0c1c, #000000, #000000, #000000, #000000, #000000, #000000, #000000, #000000, #000000, #000000, #000000);
