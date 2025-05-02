import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/material";
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

  const services = [
    {
      title: "2D to 3D Drafting",
      description:
        "Transform your flat 2D drawings into dynamic, detailed 3D models with Cadqua 3D's expert drafting services. Our skilled team utilizes advanced CAD software to convert your sketches, blueprints, or technical drawings into accurate 3D representations, enhancing visualization and precision.",
    },
    {
      title: "New Product Development",
      description:
        "At Cadqua 3D, we specialize in transforming innovative ideas into market-ready products. Our comprehensive New Product Development (NPD) services encompass every stage of the product lifecycle, ensuring a seamless transition from concept to reality.",
    },
    {
      title: "Rapid Prototyping",
      description:
        "We offer a variety of rapid prototyping technologies to bring your concepts to life quickly and accurately.",
      methods: ["SLA", "SLS", "DLP", "FDM", "MJF", "DMLS", "POLYJET"],
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
        "We offer comprehensive sheet metal fabrication services tailored to meet the diverse needs of industries such as automotive, aerospace, construction, and electronics.",
      includes: ["Laser Cutting", "Forming and Bending", "Post Processing"],
    },
    {
      title: "CNC Prototyping",
      description:
        "At Cadqua 3D, our CNC prototyping services transform your digital designs into precise, functional prototypes with exceptional accuracy. Utilizing advanced CNC machining, we ensure rapid turnaround times, tight tolerances, and compatibility with a wide range of materials, facilitating efficient product development and testing.",
    },
    {
      title: "Large Batch Production",
      description:
        "We offer precision injection molding services utilizing a versatile range of machines from 100 to 450 tons. This allows efficient production of a wide spectrum of plastic components with consistent quality and rapid turnaround.",
      includes: ["Injection Molding", "Tool Development"],
    },
    {
      title: "Mold Design and Analysis",
      description:
        "We specialize in precision mold designs complemented by advanced simulation analyses using Autodesk Moldflow and NX.",
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
      includes: [
        "Paint Shop Services (matte to high-gloss finishes)",
        "Metallizing (vacuum metallization, electroplating)",
        "Surface Finishing (polishing, sandblasting, coatings)",
      ],
    },
    {
      title: "Packaging (On Demand)",
      description:
        "Our custom packaging solutions enhance product appeal, protection, and branding.",
      includes: [
        "Tailored Packaging Design",
        "Material Selection & Prototyping",
        "Branding & Printing Solutions",
        "Sustainable Packaging Options",
      ],
    },
  ];

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
      opacity: 3,
      transition: { delay: i * 0.07 },
    }),
  };

  const text = "SERVICES WE PROVIDE";
  const letters = text.split("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Box
      sx={{ backgroundColor: "#000000", minHeight: "100%", py: 5 }}
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

      <motion.Box
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={variants}
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
            variant="scrollable"
            scrollButtons="auto"
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
              "& .MuiTabs-scrollButtons": {
                color: "#D5AC72",
                fontSize: "2rem",
                "&.Mui-disabled": {
                  opacity: 0.3,
                },
              },
              "& .MuiSvgIcon-root": {
                fontSize: "2rem",
              },
            }}
          >
            {services.map((tab, index) => (
              <Tab key={tab.title} label={tab.title} {...a11yProps(index)} />
            ))}
          </Tabs>
        </Paper>

        {services.map((tab, index) => (
          <CustomTabPanel key={tab.title} value={value} index={index}>
            <div className="flex flex-col gap-4 text-[20px] px-4">
              <span>{tab.description}</span>

              {(tab.methods || tab.includes || tab.features) && (
                <ul className="list-disc pl-5 text-[18px]">
                  {(tab.methods || tab.includes || tab.features).map(
                    (point, idx) => (
                      <li key={idx}>{point}</li>
                    )
                  )}
                </ul>
              )}
            </div>
          </CustomTabPanel>
        ))}
      </motion.Box>
    </Box>
  );
}
