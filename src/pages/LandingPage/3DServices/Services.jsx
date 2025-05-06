import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box, Typography, Paper } from "@mui/material";
import { motion, useInView } from "framer-motion";
import service from "../../../assets/landingPage/service.jpg";

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
            bgcolor: "transparent",
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
  const [value, setValue] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setValue((prevValue) => (prevValue + 1) % services.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const services = [
    {
      title: "2D to 3D Drafting",
      description:
        "Transform your flat 2D drawings into dynamic, detailed 3D models with Cadqua 3D's expert drafting services...",
    },
    {
      title: "New Product Development",
      description:
        "At Cadqua 3D, we specialize in transforming innovative ideas into market-ready products...",
    },
    {
      title: "Rapid Prototyping",
      description:
        "We offer a variety of rapid prototyping technologies to bring your concepts to life quickly and accurately.",
      methods: ["SLA, SLS", "DLP, FDM", "MJF, DMLS", "POLYJET"],
    },
    {
      title: "Short Batch Production",
      description:
        "Efficient short-run production using vacuum casting to deliver high-quality parts in small quantities.",
      methods: ["Vacuum Casting"],
    },
    {
      title: "Sheet Metal Fabrication",
      description:
        "We offer comprehensive sheet metal fabrication services tailored for automotive, aerospace, and more.",
      includes: ["Laser Cutting", "Forming and Bending", "Post Processing"],
    },
    {
      title: "CNC Prototyping",
      description:
        "Our CNC prototyping services transform your digital designs into precise, functional prototypes...",
    },
    {
      title: "Large Batch Production",
      description:
        "We offer precision injection molding services for efficient, high-volume production.",
      includes: ["Injection Molding", "Tool Development"],
    },
    {
      title: "Mold Design and Analysis",
      description:
        "We specialize in precision mold designs complemented by simulation using Autodesk Moldflow and NX.",
      features: [
        "Flow Simulation",
        "Cooling Analysis",
        "Warp & Shrinkage Prediction",
        "Gate & Runner Optimization",
      ],
    },
    {
      title: "Post Processing (Paint Shop)",
      description:
        "We provide a range of post-processing services to ensure product aesthetics and durability.",
      includes: ["Paint Shop Services", "Metallizing", "Surface Finishing"],
    },
    {
      title: "Packaging (On Demand)",
      description:
        "Our custom packaging solutions enhance product appeal, protection, and branding.",
      includes: [
        "Tailored Packaging Design",
        "Material Selection",
        "Branding & Printing",
        "Sustainable Options",
      ],
    },
  ];

  const text = "Services We Provide";
  const letters = text.split("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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

  return (
    <section id="services">
      <Box
        sx={{ backgroundColor: "#000000", pt: 5 }}
        className="flex flex-col gap-8"
      >
        <motion.h3
          ref={ref}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={variantsflow}
          viewport={{ once: true }}
          className="text-[#D5AC72] text-[32px] px-40 max-lg:px-20 max-md:px-10 font-fontspringextrabold"
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

        <motion.Box
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={variants}
          sx={{ width: "100%" }}
        >
          <Paper
            elevation={1}
            sx={{
              px: 2,
              borderBottom: "2px solid #D5AC72",
              position: "relative",
              overflow: "hidden",
              backgroundColor: "transparent",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="Services Tabs"
              variant="scrollable"
              scrollButtons="auto"
              indicatorColor="transparent"
              TabIndicatorProps={{ style: { display: "none" } }}
              sx={{
                zIndex: 1,
                marginBottom: "-2px",
                ".MuiTabs-flexContainer": {
                  pl: 40,
                },
                ".MuiTab-root": {
                  textTransform: "none",
                  fontWeight: 700,
                  py: 3,
                  fontSize: "1.25rem",
                  borderBottom: "2px solid transparent",
                  color: "#ffffff",
                  transition: "0.3s",
                  "&:hover": { borderBottom: "2px solid #2B0A0F" },
                  "&.Mui-selected": {
                    color: "#D5AC72",
                    borderBottom: "2px solid #5E0C1C",
                  },
                },
                "& .MuiTabs-scrollButtons": {
                  color: "#D5AC72",
                  fontSize: "2rem",
                  zIndex: 3,
                  "&.Mui-disabled": { opacity: 0.3 },
                },
                "& .MuiSvgIcon-root": { fontSize: "2rem" },
              }}
            >
              {services.map((tab, index) => (
                <Tab key={tab.title} label={tab.title} {...a11yProps(index)} />
              ))}
            </Tabs>

            {/* Left Gradient Mask */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "50%",
                height: "100%",
                backgroundImage:
                  "linear-gradient(to right, \
        #000000 0%, \
        rgba(0,0,0,0.8) 40%, \
        rgba(0,0,0,0.6) 50%, \
        rgba(0,0,0,0.4) 60%, \
        rgba(0,0,0,0.2) 70%, \
        transparent 100%)",
                zIndex: 2,
                pointerEvents: "none",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "50%",
                height: "100%",
                backgroundImage:
                  "linear-gradient(to left, \
        #000000 0%, \
        rgba(0,0,0,0.8) 40%, \
        rgba(0,0,0,0.6) 50%, \
        rgba(0,0,0,0.4) 60%, \
        rgba(0,0,0,0.2) 70%, \
        transparent 100%)",
                zIndex: 2,
                pointerEvents: "none",
              }}
            />
          </Paper>

          {services.map((tab, index) => (
            <CustomTabPanel key={tab.title} value={value} index={index}>
              <div className="w-full flex justify-center">
                <div className="w-2/3 p-8 flex flex-row gap-8 text-[20px] h-full bg-white/5 backdrop-blur-md rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white/10">
                  <img
                    src={service}
                    alt="service"
                    className="w-96 rounded-[12px]"
                  />
                  <div className="h-full flex flex-col gap-4 text-[#E0E0E0]">
                    <span className="text-[18px]">{tab.description}</span>

                    {(tab.methods || tab.includes || tab.features) && (
                      <ul className="list-disc pl-5 text-[16px] space-y-2">
                        {(tab.methods || tab.includes || tab.features).map(
                          (point, idx) => (
                            <li
                              key={idx}
                              className="cursor-pointer w-fit text-[#D5AC72] hover:text-[#F4C430] border-b-2 border-transparent hover:border-[#F4C430] transition-colors duration-300 py-1"
                            >
                              {point}
                            </li>
                          )
                        )}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </CustomTabPanel>
          ))}
        </motion.Box>
      </Box>
    </section>
  );
}
