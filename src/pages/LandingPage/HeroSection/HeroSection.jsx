import { useState } from "react";
import landingPage from "../../../assets/landingPage/landingPage.mp4";
import { motion } from "framer-motion";
import InstantQuoteModal from "../../InstantQuote/InstantQuoteModal";
import SideNav from "../../../components/NavBar/SideNav";

export default function HeroSection({ openNavModal, setOpenNavModal }) {
  const [instantQuote, setInstantQuote] = useState(false);

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

  return (
    <div className="bg-transparent relative h-full flex flex-col gap-32 h-screen max-lg:h-full max-2xl:gap-16 pb-10 pt-40">
      <div className="w-full h-full">
        <div className="flex flex-col h-full w-full items-end text-center max-lg:items-center gap-8 pr-10 max-lg:px-[10%]">
          <motion.h3
            initial="hidden"
            animate="show"
            variants={variantsfadeIn}
            className="text-[#DAAC69] text-[90px] max-[2400px]:text-[70px] max-2xl:text-[40px] font-vonique font-bold max-2xl:leading-18 text-end w-2/5 max-md:w-full max-md:text-center"
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
        </div>
      </div>
      <motion.div
        initial="hidden"
        animate="show"
        variants={variantsfadeIn}
        className="absolute w-full top-0 -z-10 -mt-20 block max-lg:hidden"
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

      <SideNav open={openNavModal} handleClose={() => setOpenNavModal(false)} />
    </div>
  );
}
