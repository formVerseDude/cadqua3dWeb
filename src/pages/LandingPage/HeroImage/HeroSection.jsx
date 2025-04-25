import { useRef } from "react";
import landingPage from "../../../assets/landingPage/landingPage.webm";
import logo from "../../../assets/landingPage/logo.png";
import { motion, useInView } from "framer-motion";

export default function HeroSection() {
  const variants = {
    hidden: { opacity: 0 },
    show: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.07 },
    }),
  };

  const text = "Together Let’s Print the Future";
  const letters = text.split("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="relative h-screen">
      {/* Logo */}
      <div className="absolute top-0 left-40 z-20">
        <img src={logo} alt="logo" className="h-40 cursor-pointer" />
      </div>

      {/* Hero Text */}
      <div className="absolute top-10 w-full z-20">
        <motion.h2
          ref={ref}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={variants}
          viewport={{ once: true }}
          className="flex justify-center text-[#938068] text-[60px] font-blacksword sm:text-4xl md:text-6xl"
        >
          {letters.map((word, i) => (
            <motion.span key={`${word}-${i}`} variants={variants} custom={i}>
              {word}
            </motion.span>
          ))}
        </motion.h2>
      </div>

      {/* Background Video */}
      <div className="overflow-hidden w-full">
        <video
          src={landingPage}
          className="scale-180 w-full z-10 -mt-10"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-2/5 h-full z-10 bg-transparent">
        <div
          className="h-full"
          style={{
            background:
              "linear-gradient(to left, rgba(94, 12, 28, 0) 0%, rgba(94, 12, 28, 0) 20%, rgba(94, 12, 28, 1) 100%)",
          }}
        />
      </div>
      <div className="absolute top-0 right-0 w-2/5 h-full z-10 bg-transparent">
        <div
          className="h-full"
          style={{
            background:
              "linear-gradient(to right, rgba(94, 12, 28, 0) 0%, rgba(94, 12, 28, 0) 20%, rgba(94, 12, 28, 1) 100%)",
          }}
        />
      </div>

      {/* Button */}
      <div className="absolute bottom-8 w-full flex justify-center">
        <button className="cursor-pointer group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-[#5E0C1C] hover:before:[box-shadow:_20px_20px_20px_30px] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-[#5E0C1C] relative bg-transparent h-16 w-64 border text-left p-3 text-[#938068] text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-[#5E0C1C] before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-[#938068] after:right-8 after:top-3 after:rounded-full after:blur-lg">
          Get Instant Quote
        </button>
      </div>
    </div>
  );
}
