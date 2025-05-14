import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { DiscordLogo } from "@phosphor-icons/react";
import formverse from "../../../assets/landingPage/formverse.mp4";

export default function CommunityFormVerse() {
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

  const variantsflow = {
    hidden: { opacity: 0 },
    show: (i) => ({
      y: 0,
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

  const text = "Join the desgin community! FormVerse";
  const letters = text.split("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="formverse">
      <div className="bg-[#000000] flex flex-col gap-8 text-[#000000] px-[10%] py-20">
        <div className="flex flex-row justify-between text-[#D5AC72] font-vonique">
          <motion.h3
            ref={ref}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={variantsflow}
            viewport={{ once: true }}
            className="text-[#D5AC72] text-[32px] font-vonique"
            style={{ wordSpacing: "0.5rem" }}
          >
            {letters.map((letter, i) => (
              <motion.span
                key={`${letter}-${i}`}
                variants={variantsflow}
                custom={i}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h3>
        </div>

        <div className="flex flex-col gap-16 w-full text-[#ffffff]">
          <div className="text-[24px] ">
            Earn While You Engage at India's first 3D CAD Model Trading
            Marketplace
          </div>
          <div className="flex flex-row max-lg:flex-col items-start justify-between gap-8 w-full max-lg:w-full">
            <motion.div
              initial="hidden"
              animate="show"
              variants={variantsfadeIn}
              className="flex flex-1 rounded-[10px]"
            >
              <video
                src={formverse}
                className="scale-100 rounded-[10px]"
                autoPlay
                loop
                muted
                playsInline
              />
            </motion.div>
            <motion.span
              initial="hidden"
              whileInView="show"
              variants={variants}
              viewport={{ once: true }}
              className="flex flex-col gap-5 flex-1"
            >
              <span className="text-[24px]">
                <span className="text-[#D5AC72]">Designed something cool?</span>
                <br />
                Let us help you print it at{" "}
                <span className="text-[#5E0C1C]">CADQUA3D</span>
              </span>
              <span className="text-[18px]">
                A thriving Discord space where 3D designers, modelers, and
                creators share ideas, trade designs, connect and collaborate.
              </span>
              <span className="text-[18px]">
                Active members of our FormVerse Community earn{" "}
                <span className="text-[#D5AC72]">exclusive tokens</span> that
                can be redeemed for{" "}
                <span className="text-[#D5AC72]">instant discounts</span> on 3D
                model printing orders through CADQUA3D!
              </span>
              <a
                href="https://discord.gg/xMaQa95dZp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-[18px]"
              >
                <div className="flex flex-row gap-2 justify-center items-center">
                  👉{" "}
                  <span className="hover:text-[#D5AC72] cursor-pointer">
                    Join on Discord now
                  </span>{" "}
                  <DiscordLogo
                    size={32}
                    className="text-[#5E0C1C] hover:text-[#D5AC72] transition-colors duration-100 cursor-pointer"
                  />
                </div>
              </a>
            </motion.span>
          </div>
        </div>
      </div>
    </section>
  );
}
