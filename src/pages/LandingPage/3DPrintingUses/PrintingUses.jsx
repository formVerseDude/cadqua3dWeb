import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { motion, useInView } from "framer-motion";
import turbine from "../../../assets/landingPage/turbine.jpg";
import gears from "../../../assets/landingPage/gears.jpg";
import drone from "../../../assets/landingPage/drone.jpg";
import jewelery from "../../../assets/landingPage/jewelery.jpg";
import { CardMedia } from "@mui/material";

const MotionCard = motion(Card);

export default function PrintingUses() {
  const cards = [
    {
      label: "AEROSPACE",
      description:
        "The Aerospace industry is a great example of utilization Additive Manufacturing (AM) (commonly referred to as 3D Printing) with a clear value proposition and the ability to create parts that are stronger and lighter than parts made using traditional manufacturing.",
      imageURL: turbine,
    },
    {
      label: "AUTOMOBILE",
      description:
        "The automotive industry ought to adapt to this shift in paradigm quickly. This is where 3D printing in automotive design swiftly steps up. 3D printers not only help the aesthetic design of vehicles but it also has the prowess to deliver working prototype in record turnaround time.",
      imageURL: gears,
    },
    {
      label: "DEFENCE",
      description:
        "Additive manufacturing is unlocking a sea of opportunities for the defense industry, reducing production costs for tools and components, additional design flexibility, and localized manufacturing.",
      imageURL: drone,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
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

  const text = "3D Printing Applications";
  const letters = text.split("");
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Box className="px-40 max-lg:px-20 max-md:px-10 bg-[#000000] text-[#E0E0E0] py-20">
      <motion.div
        className="text-[#D5AC72] text-[32px] font-vonique"
        ref={ref}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.05 } },
        }}
        style={{ wordSpacing: "0.5rem" }}
      >
        {letters.map((word, i) => (
          <motion.span key={`${word}-${i}`} variants={variantsflow} custom={i}>
            {word}
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="flex flex-col gap-6 mt-10"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <MotionCard
              key={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={variantsfadeIn}
              sx={{
                backgroundColor: "transparent",
                borderRadius: 2,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                p: 0,
              }}
              className="cursor-pointer bg-white/5 backdrop-blur-md rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white/10"
            >
              <CardContent
                sx={{ p: 0 }}
                className="rounded-xl transition ease-in-out delay-50 duration-500 hover:scale-105 hover:bg-black hover:opacity-60"
              >
                <CardMedia
                  component="img"
                  image={card.imageURL}
                  alt={card.label}
                  sx={{
                    height: 300,
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "8px",
                    mb: 4,
                  }}
                />

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#5E0C1C",
                    mb: 1,
                    fontFamily: "fontspringsemibold",
                    px: 4,
                    fontSize: "24px",
                  }}
                >
                  {card.label}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#E0E0E0", px: 4 }}
                  style={{ fontFamily: "Varela Round, sans-serif" }}
                >
                  {card.description}
                </Typography>
              </CardContent>
            </MotionCard>
          ))}
        </div>

        <MotionCard
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={variantsfadeIn}
          sx={{
            backgroundColor: "transparent",
            borderRadius: 2,
            height: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "flex-start",
            p: 0,
          }}
          className="cursor-pointer w-full bg-white/5 backdrop-blur-md rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white/10"
        >
          <div className="flex flex-row transition ease-in-out delay-50 duration-500 hover:scale-105 hover:bg-black hover:opacity-60">
            <CardMedia
              component="img"
              image={jewelery}
              alt="JEWELERY"
              sx={{
                width: { xs: "100%", md: "30%" },
                height: { xs: 200, md: "auto" },
                borderRadius: { xs: "8px 8px 0 0", md: "8px 0 0 8px" },
                objectFit: "cover",
              }}
            />

            <div className="flex flex-col justify-center px-6 py-6 w-full">
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#5E0C1C",
                  marginBottom: 8,
                  fontFamily: "fontspringsemibold",
                }}
              >
                JEWELERY
              </div>
              <div
                style={{
                  color: "#E0E0E0",
                  fontFamily: "Varela Round, sans-serif",
                }}
              >
                The production of jewelry is one industry that has embraced 3D
                Printing. Many jewelers now use the technology to disrupt the
                way things were done for hundreds of years. 3D printing is now
                used to create the patterns for investment casting and to print
                jewelry directly.
              </div>
            </div>
          </div>
        </MotionCard>
      </motion.div>
    </Box>
  );
}
