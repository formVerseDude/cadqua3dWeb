import { useRef, useState } from "react";
import landingPage from "../../../assets/landingPage/landingPage.webm";
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
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={variantsfadeIn}
        className="absolute top-0 left-40 z-20 cursor-pointer pointer-events-auto"
      >
        <img src={logo} alt="logo" className="h-40" />
      </motion.div>

      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20">
        <div className="w-fit flex flex-col justify-center items-center gap-10 h-fit bg-white/5 backdrop-blur-md rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white/10 px-4 py-20">
          <div className="flex flex-col gap-2">
            <motion.h2
              ref={ref}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              variants={variants}
              viewport={{ once: true }}
              className="flex justify-end text-[#D5AC72] text-[45px] font-blacksword"
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
              className="flex justify-end text-[#D5AC72] text-[24px] font-blacksword text-end"
            >
              Empowering Innovation Through Cutting-Edge <br /> Printing
              Solutions.
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
              className="font-blacksword cursor-pointer group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-[#5E0C1C] hover:before:[box-shadow:_20px_20px_20px_30px] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-[#5E0C1C] relative bg-transparent h-16 w-64 border text-left p-3 text-[#D5AC72] text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-[#5E0C1C] before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-[#D5AC72] after:right-8 after:top-3 after:rounded-full after:blur-lg"
            >
              Get Instant Quote
            </button>
          </motion.div>
        </div>
      </div>

      <div className="overflow-hidden w-full">
        <video
          src={landingPage}
          className="scale-160 w-full z-10 -translate-x-1/3"
          autoPlay
          loop
          muted
          playsInline
        />
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
              "linear-gradient(to left top, rgba(94, 12, 28, 0) 0%, rgba(94, 12, 28, 0) 10%, rgba(94, 12, 28, 0) 20%, rgba(94, 12, 28, 0) 30%, rgba(94, 12, 28, 0) 40%, rgba(77, 14, 27, 0.8) 100%,  rgba(94, 12, 28, 0.8) 100%",
          }}
        />
      </div>
      <div className="absolute top-0 right-0 w-3/6 h-full z-10 bg-transparent">
        <div
          className="h-full"
          style={{
            background:
              "linear-gradient(to right top, rgba(94, 12, 28, 0) 0%, rgba(94, 12, 28, 0) 10%, rgba(94, 12, 28, 0) 20%, rgba(94, 12, 28, 0) 30%, rgba(94, 12, 28, 0) 40%, rgba(77, 14, 27, 0.8) 100%,  rgba(94, 12, 28, 0.8) 100%",
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
