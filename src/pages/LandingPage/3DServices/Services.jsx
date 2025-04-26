import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import service1 from "../../../assets/landingPage/service1.png";
import service2 from "../../../assets/landingPage/service2.png";
import service3 from "../../../assets/landingPage/service3.png";
import service4 from "../../../assets/landingPage/service4.avif";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 2,
            mt: 2,
            bgcolor: "#1A1A1A",
          }}
        >
          <Typography variant="body1" component="div" color="#E0E0E0">
            {children}
          </Typography>
        </Paper>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Services() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabData = [
    {
      label: "Rapid Prototyping",
      content:
        "We offer rapid prototyping services using high precision 3D printers for functional and visual prototypes.",
      description:
        "With industrial machines catering all applications SLA | SLS | DLP | FDM | DLP MATERIALS - ABS | NYLON PA22 | PA32GF | PLA| TPU",
      image: service1,
    },
    {
      label: "Scanning & Part Modelling",
      content:
        "We provide high-resolution 3D scanning and part modeling solutions for reverse engineering and inspection.",
      description:
        "With high accuracy scanners and catering almost every application and scanned over 1000 parts. Part modelling to give a printable data and achieve high intricate features.",
      image: service2,
    },
    {
      label: "NPD & CAD Designing",
      content:
        "Our team supports NPD with professional CAD design services tailored for manufacturability.",
      description: "With a team of high level designers we provide:",
      points: [
        "CAD Designing",
        "Automotive part designing",
        "Electronics designing",
        "Jigs & Fixtures",
        "Mould Designing",
        "3D to 2D Drafting",
        "Light Designing (Optics)",
      ],
      image: service3,
    },
    {
      label: "Short Batch Production",
      content:
        "We offer short batch production with consistent quality, perfect for pilot runs and limited releases.",
      description:
        "With Vacuum Casting setup we are solving the issues for short batch production at affordable prices and end product quality.",
      image: service4,
    },
  ];

  const variantsflow = {
    hidden: { opacity: 0 },
    show: (i) => ({
      y: 0,
      opacity: 3,
      transition: { delay: i * 0.07 },
    }),
  };

  const text = "SERVICES";
  const letters = text.split(" ");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Box
      sx={{ backgroundColor: "#000000", minHeight: "100%", py: 6 }}
      className="px-40 max-lg:px-20 max-md:px-10 flex flex-col gap-8"
    >
      <motion.h3
        ref={ref}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={variantsflow}
        viewport={{ once: true }}
        className="text-[#5E0C1C] text-[32px] font-semibold"
      >
        {letters.map((word, i) => (
          <motion.span key={`${word}-${i}`} variants={variantsflow} custom={i}>
            {word}
          </motion.span>
        ))}
      </motion.h3>

      <Box
        sx={{
          width: "100%",
          maxWidth: "1000px",
          mx: "auto",
        }}
      >
        <Paper elevation={1} sx={{ borderRadius: 2, p: 2, bgcolor: "#1A1A1A" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="Services Tabs"
            variant="fullWidth"
            indicatorColor="transparent"
            TabIndicatorProps={{ style: { display: "none" } }}
            sx={{
              ".MuiTab-root": {
                textTransform: "none",
                fontWeight: 500,
                px: 2,
                py: 1.5,
                borderRadius: 2,
                color: "#E0E0E0",
                transition: "0.3s",
                "&:hover": {
                  bgcolor: "#2B0A0F",
                },
                "&.Mui-selected": {
                  color: "#FFFFFF",
                  bgcolor: "#5E0C1C",
                },
              },
            }}
          >
            {tabData.map((tab, index) => (
              <Tab key={tab.label} label={tab.label} {...a11yProps(index)} />
            ))}
          </Tabs>
        </Paper>

        {tabData.map((tab, index) => (
          <CustomTabPanel key={tab.label} value={value} index={index}>
            <div className="flex flex-row max-lg:flex-col justify-between items-center gap-8 px-4 text-[24px]">
              <img src={tab.image} alt={tab.label} />
              <div className="flex flex-col gap-4">
                <span>{tab.content}</span>
                <ul className="list-disc pl-5 text-[18px]">
                  {tab.points && tab.points.length > 0
                    ? tab.points.map((point, idx) => <li key={idx}>{point}</li>)
                    : null}
                </ul>
              </div>
            </div>
          </CustomTabPanel>
        ))}
      </Box>
    </Box>
  );
}
