import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

// Wrap MUI Card with motion
const MotionCard = motion.create(Card);

export default function PrintingUses() {
  const cards = [
    {
      label: "AEROSPACE",
      description:
        "The Aerospace industry is a great example of utilization Additive Manufacturing (AM) (commonly referred to as 3D Printing) with a clear value proposition and the ability to create parts that are stronger and lighter than parts made using traditional manufacturing.",
    },
    {
      label: "AUTOMOBILE",
      description:
        "The automotive industry ought to adapt to this shift in paradigm quickly. This is where 3D printing in automotive design swiftly steps up. 3D printers not only help the aesthetic design of vehicles but it also has the prowess to deliver working prototype in record turnaround time.",
    },
    {
      label: "DEFENCE",
      description:
        "Additive manufacturing is unlocking a sea of opportunities for the defense industry, reducing production costs for tools and components, additional design flexibility, and localized manufacturing.",
    },
    {
      label: "JEWELERY",
      description:
        "The production of jewelry is one industry that has embraced 3D Printing. Many jewelers now use the technology to disrupt the way things were done for hundreds of years. 3D printing is now used to create the patterns for investment casting and to print jewelry directly.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delay: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
      },
    },
  };

  return (
    <Box className="px-40 max-lg:px-20 max-md:px-10 bg-[#000000] text-[#E0E0E0] pb-20">
      <span className="text-[#5E0C1C] text-[32px] font-semibold">
        3D Printing Applications
      </span>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
      >
        {cards.map((card, index) => (
          <MotionCard
            variants={itemVariants}
            key={index}
            elevation={3}
            sx={{
              backgroundColor: "#1A1A1A",
              borderRadius: 2,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              p: 1,
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#5E0C1C", mb: 1 }}
              >
                {card.label}
              </Typography>
              <Typography variant="body2" sx={{ color: "#E0E0E0" }}>
                {card.description}
              </Typography>
            </CardContent>
          </MotionCard>
        ))}
      </motion.div>
    </Box>
  );
}
