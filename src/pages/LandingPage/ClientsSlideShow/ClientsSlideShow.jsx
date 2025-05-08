import company1 from "../../../assets/landingPage/company1.avif";
import company2 from "../../../assets/landingPage/company2.avif";
import company3 from "../../../assets/landingPage/company3.avif";
import company4 from "../../../assets/landingPage/company4.avif";
import company5 from "../../../assets/landingPage/company5.png";
import company6 from "../../../assets/landingPage/company6.png";
import company7 from "../../../assets/landingPage/company7.png";
import company8 from "../../../assets/landingPage/company8.png";
import company9 from "../../../assets/landingPage/company9.png";
import company10 from "../../../assets/landingPage/company10.png";
import { motion } from "framer-motion";

export default function ClientsSlideShow() {
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
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={variantsfadeIn}
      className="bg-[#000000] py-10"
    >
      <style>{`
  @keyframes loopScroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
  }

  .loop-scroll {
    animation: loopScroll 50s linear infinite;
  }

  .paused {
    animation-play-state: paused;
  }
`}</style>

      <span className="w-full text-[#D5AC72] flex justify-center text-center max-md:px-10 bg-white/5 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] pt-10 pb-5 font-fontspringsemibold">
        Trusted manufacturing platform for 1000+ product development companies
        across the globe.
      </span>

      <div className="flex space-x-16 overflow-hidden group bg-white/5 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-10">
        <div className="flex space-x-16 loop-scroll group-hover:paused">
          <img
            src={company1}
            alt="company1"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company2}
            alt="company2"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company3}
            alt="company3"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company4}
            alt="company4"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company5}
            alt="company5"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company6}
            alt="company6"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company7}
            alt="company7"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company8}
            alt="company8"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company9}
            alt="company9"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company10}
            alt="company10"
            className="w-32 h-20 object-contain max-w-none"
          />
        </div>
        <div
          className="flex space-x-16 loop-scroll group-hover:paused"
          aria-hidden="true"
        >
          <img
            src={company1}
            alt="company1"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company2}
            alt="company2"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company3}
            alt="company3"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company4}
            alt="company4"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company5}
            alt="company5"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company6}
            alt="company6"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company7}
            alt="company7"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company8}
            alt="company8"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company9}
            alt="company9"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company10}
            alt="company10"
            className="w-32 h-20 object-contain max-w-none"
          />
        </div>
        <div
          className="flex space-x-16 loop-scroll group-hover:paused"
          aria-hidden="true"
        >
          <img
            src={company1}
            alt="company1"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company2}
            alt="company2"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company3}
            alt="company3"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company4}
            alt="company4"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company5}
            alt="company5"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company6}
            alt="company6"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company7}
            alt="company7"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company8}
            alt="company8"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company9}
            alt="company9"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company10}
            alt="company10"
            className="w-32 h-20 object-contain max-w-none"
          />
        </div>
        <div
          className="flex space-x-16 loop-scroll group-hover:paused"
          aria-hidden="true"
        >
          <img
            src={company1}
            alt="company1"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company2}
            alt="company2"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company3}
            alt="company3"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company4}
            alt="company4"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company5}
            alt="company5"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company6}
            alt="company6"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company7}
            alt="company7"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company8}
            alt="company8"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company9}
            alt="company9"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company10}
            alt="company10"
            className="w-32 h-20 object-contain max-w-none"
          />
        </div>
      </div>
    </motion.div>
  );
}
