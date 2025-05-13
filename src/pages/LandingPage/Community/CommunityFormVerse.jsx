import serverLogo from "../../../assets/landingPage/serverLogo.png";
import BotLogo from "../../../assets/landingPage/BotLogo.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { DiscordLogo } from "@phosphor-icons/react";

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

  const text = "Join the desgin community! FormVerse";
  const letters = text.split("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="formverse">
      <div className="bg-[#000000] flex flex-col gap-8 text-[#000000] px-40 max-lg:px-10 py-20">
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

        <div className="flex flex-col gap-16 w-full max-lg:flex-col max-lg:gap-8 text-[#ffffff]">
          <div className="text-[24px] ">
            Earn While You Engage at India's first 3D CAD Model Trading
            Marketplace
          </div>
          <div className="flex flex-row items-center justify-between gap-4 w-full max-lg:w-full">
            <div className="flex justify-center items-center flex-1">
              <motion.img
                initial="hidden"
                whileInView="show"
                variants={variants}
                viewport={{ once: true }}
                src={serverLogo}
                alt="serverLogo"
                className="w-[600px] h-full max-md:w-full max-md:h-full rounded-[12px]"
              />
            </div>
            <motion.span
              initial="hidden"
              whileInView="show"
              variants={variants}
              viewport={{ once: true }}
              className="flex flex-col gap-4 flex-1"
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
