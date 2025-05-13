import { useState } from "react";
import landingPage from "../../../assets/landingPage/landingPage.mp4";
import logo from "../../../assets/landingPage/logo.png";
import { motion } from "framer-motion";
import InstantQuoteModal from "../../InstantQuote/InstantQuoteModal";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const [instantQuote, setInstantQuote] = useState(false);

  const navigate = useNavigate();

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

  const variantsflow = {
    hidden: { opacity: 0 },
    show: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.07 },
    }),
  };

  return (
    <div className="bg-transparent relative h-full flex flex-col gap-32 h-screen max-2xl:gap-16 pb-10">
      <div className="cursor-pointer pointer-events-auto flex flex-row justify-between items-center w-full mt-5 pl-28 pr-20">
        <motion.div initial="hidden" animate="show" variants={variantsfadeIn}>
          <img src={logo} alt="logo" className="size-32 mt-5" />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={variantsfadeIn}
          className="flex flex-row gap-4 text-[#DAAC69] text-[20px]"
        >
          <span
            className="border-r-2 border-[#DAAC69] pr-4 hover:text-[#6D5634] cursor-pointer"
            onClick={() =>
              document
                .getElementById("how-it-works")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            How it works?
          </span>
          <span
            className="border-r-2 border-[#DAAC69] pr-4 hover:text-[#6D5634] cursor-pointer"
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Services
          </span>
          <span
            className="border-r-2 border-[#DAAC69] pr-4 hover:text-[#6D5634] cursor-pointer"
            onClick={() => navigate("/gallery")}
          >
            Gallery
          </span>

          <span
            className="border-r-2 border-[#DAAC69] pr-4 hover:text-[#6D5634] cursor-pointer"
            onClick={() =>
              document
                .getElementById("testimonials")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Testimonials
          </span>
          <span
            className="border-r-2 border-[#DAAC69] pr-4 hover:text-[#6D5634] cursor-pointer"
            onClick={() =>
              document
                .getElementById("formverse")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            FormVerse
          </span>
          <span
            className="hover:text-[#6D5634] cursor-pointer"
            onClick={() =>
              document
                .getElementById("faq")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            FAQ
          </span>
        </motion.div>
      </div>
      <div className="w-full h-full">
        {/*<div className="w-3/8 flex flex-col justify-between gap-32 max-2xl:gap-16 h-1/2  border-[#DAAC69]/30 pl-6 pr-14 py-12 max-2xl:py-8 -mt-10">
          border-l-2 border-y-2 bg-white/5 backdrop-blur-md rounded-l-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)]*/}
        <div className="flex flex-col h-full w-full items-end text-center gap-8 pr-10">
          <motion.h3
            initial="hidden"
            animate="show"
            variants={variantsfadeIn}
            className="text-[#DAAC69] text-[40px] font-vonique font-bold leading-18 text-end w-2/5"
            style={{ wordSpacing: "0.5rem" }}
          >
            Together, Let’s Print the <br /> Future
          </motion.h3>

          <motion.button
            initial="hidden"
            animate="show"
            variants={variantsfadeIn}
            onClick={() => setInstantQuote(true)}
            className="font-vonique cursor-pointer group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-[#3F1317] hover:before:[box-shadow:_20px_20px_20px_30px] duration-500 before:duration-500 hover:duration-500 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:text-[18px] origin-left hover:decoration-2 hover:text-[#DAAC69] relative bg-transparent h-18 w-84 border text-left px-4 text-[#DAAC69] text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-[#3F1317] before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-[#DAAC69] after:right-8 after:top-3 after:rounded-full after:blur-lg tracking-wider"
          >
            Get Instant Quote
          </motion.button>
          {/*<motion.h3
              ref={ref}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              variants={variants}
    
              className="flex justify-start text-[#ffffff] text-[26px] max-2xl:text-[20px] text-left leading-12 max-2xl:leading-10"
            >
              Empowering Innovation,
              <br /> through Cutting-Edge Printing Solutions.
            </motion.h3>*/}
        </div>
        {/*<motion.div
            initial="hidden"
            whileInView="show"
  
            variants={variantsfadeIn}
            className="w-full flex justify-center z-20"
          >
            <button
              onClick={() => setInstantQuote(true)}
              className="font-vonique cursor-pointer group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-[#3F1317] hover:before:[box-shadow:_20px_20px_20px_30px] duration-500 before:duration-500 hover:duration-500 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-[#DAAC69] relative bg-transparent h-18 w-84 border text-left px-4 text-[#DAAC69] text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-[#3F1317] before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-[#DAAC69] after:right-8 after:top-3 after:rounded-full after:blur-lg tracking-wider"
            >
              Get Instant Quote
            </button>
          </motion.div>*/}
      </div>
      {/*<div className="flex w-full mt-48 px-20">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-200px" }}
          variants={variants}
          className="text-center text-[20px] text-[#DAAC69]"
        >
          Unlock the power of additive manufacturing with our cutting-edge 3D
          printing services. From rapid prototyping to full-scale production, we
          turn your digital designs into high-precision physical parts—fast,
          reliable, and tailored to your exact specifications. Whether you're an
          engineer, designer, or entrepreneur, we provide seamless access to
          industry-grade materials, expert support, and scalable solutions.
        </motion.p>
      </div>*/}

      <motion.div
        initial="hidden"
        animate="show"
        variants={variantsfadeIn}
        className="absolute w-full top-0 -z-10 -mt-20"
      >
        <video
          src={landingPage}
          className="scale-100 -translate-x-1/4"
          autoPlay
          loop
          muted
          playsInline
        />
      </motion.div>

      <div className="absolute w-1/2 right-0 h-4/5 -z-20">
        {/* Image Layer */}

        {/* Gradient Overlay Layer */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #000000 0%, rgba(0,0,0,0.5) 10%, transparent 100%),
              linear-gradient(to top, #000000 0%, rgba(0,0,0,0.3) 20%, transparent 100%),
              linear-gradient(to bottom, #000000 0%, rgba(0,0,0,0.1) 10%, transparent 100%)
            `,
          }}
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

      <div className="absolute top-0 left-0 w-3/6 h-full -z-10 bg-transparent">
        <div
          className="h-full"
          style={{
            background:
              "linear-gradient(to left top, rgb(60, 0, 8, 0) 0%, rgb(60, 0, 8, 0) 10%, rgb(60, 0, 8, 0) 20%, rgb(60, 0, 8, 0) 30%, rgb(60, 0, 8, 0) 40%, rgba(77, 14, 27, 0.8) 100%,  rgb(60, 0, 8, 0.8) 100%",
          }}
        />
      </div>
      <div className="absolute top-0 right-0 w-3/6 h-full -z-10 bg-transparent">
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

{
  /*
  <motion.h2
            ref={ref}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={variants}
  
            className="flex flex-row flex-wrap text-[#DAAC69] text-[45px] font-fontspringextrabold max-w-full"
          >
            {letters.map((char, i) => (
              <motion.span key={`${char}-${i}`} variants={variants} custom={i}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>
  */
}
