import * as React from "react";
import { InstagramLogo, Envelope, MapPin, Clock } from "@phosphor-icons/react";
import logo from "../../assets/landingPage/logo.png";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const faqItems = [
  {
    id: "panel1",
    question: "Why 3D Printing?",
    answer:
      "Additive Manufacturing is better than traditional manufacturing as it reduces pollution, accelerates product development, and allows for the creation of complex geometries that are impossible or highly impractical with traditional manufacturing methods. It opens up a world of possibilities for custom designs and prototyping, ultimately helping to streamline the production process while being more sustainable and efficient.",
  },
  {
    id: "panel2",
    question: "How much accuracy can be expected?",
    answer:
      "3D printing offers higher accuracy and durability compared to traditionally manufactured products or materials. The precision can vary based on the type of 3D printing technology used, such as SLA or FDM, but generally, 3D printing provides fine resolution, especially in terms of layer height and detailed geometries. With the right settings and materials, parts can achieve tolerances of less than 0.1mm, making it ideal for applications that require detailed and high-precision components.",
  },
  {
    id: "panel3",
    question: "Is it cost effective?",
    answer:
      "For complex designs, 3D printing is highly cost-effective since such designs are hard to achieve via traditional methods. It eliminates the need for costly molds, tooling, and assembly processes. Additionally, 3D printing is ideal for small-batch and custom production. However, for high-volume production, the cost per part may increase due to slower production times and material costs, making traditional manufacturing methods more economical in these scenarios. It all depends on the volume and complexity of the parts being produced.",
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
    opacity: 1,
    transition: { delay: i * 0.07 },
  }),
};

export default function Footer() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const text = "Frequently Asked Question";
  const letters = text.split("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="relaive backdrop-blur-md rounded-l-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] px-40 max-lg:px-20 max-md:px-10 py-16">
      <motion.h3
        ref={ref}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={variantsflow}
        viewport={{ once: true }}
        className="text-[#D5AC72] text-[32px] font-vonique my-10"
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
      <div className="bg-tansparent max-lg:px-20 max-md:px-10 pb-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={variants}
        >
          {faqItems.map((item) => (
            <Accordion
              key={item.id}
              expanded={expanded === item.id}
              onChange={handleChange(item.id)}
              sx={{
                bgcolor: "#000",
                color: "#fff",
                mb: 2,
                borderBottom: "2px solid #111",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                aria-controls={`${item.id}-content`}
                id={`${item.id}-header`}
              >
                <Typography
                  component="span"
                  sx={{ fontWeight: 500, fontSize: "1rem", width: "100%" }}
                  style={{ fontFamily: "Varela Round, sans-serif" }}
                >
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{ color: "#ccc" }}
                  style={{ fontFamily: "Varela Round, sans-serif" }}
                >
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={variants}
        className="flex flex-row justify-between max-md:flex-col max-md:items-center max-md:gap-12"
      >
        <img src={logo} alt="logo" className="h-52" />
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="text-[#E0E0E0] text-lg font-semibold">
              Opening Hours
            </span>
          </div>
          <div className="flex flex-col gap-2 text-[#E0E0E0]">
            <div className="flex flex-row items-center gap-2 group cursor-pointer">
              <Clock
                size={24}
                className="text-[#5E0C1C] group-hover:text-[#D5AC72] transition-colors duration-300"
              />
              <span className="group-hover:text-[#D5AC72] transition-colors duration-300">
                Mon - Fri 10:00 am - 8:00 pm
              </span>
            </div>
            <div className="flex flex-row items-center gap-2 group cursor-pointer">
              <Clock
                size={24}
                className="text-[#5E0C1C] group-hover:text-[#D5AC72] transition-colors duration-300"
              />
              <span className="group-hover:text-[#D5AC72] transition-colors duration-300">
                Saturday 10:00 am - 7:00 pm
              </span>
            </div>
          </div>
          <span className="text-[#E0E0E0] text-lg font-semibold">
            Follow Us
          </span>
          <div className="flex items-center gap-3 group cursor-pointer">
            <InstagramLogo
              size={28}
              className="text-[#5E0C1C] group-hover:text-[#D5AC72] transition-colors duration-300"
            />
            <span className="text-[#E0E0E0] group-hover:text-[#D5AC72] transition-colors duration-300">
              @cadqua3d
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="text-[#E0E0E0] text-lg font-semibold">
              Contact
            </span>
          </div>
          <div className="flex flex-col gap-4 text-[#E0E0E0]">
            <div className="flex flex-col gap-2">
              <span className="text-[#D5AC72]">Address</span>
              <div className="flex flex-row items-start gap-1">
                <MapPin size={24} className="text-[#5E0C1C] mt-0.5" />
                <a
                  href="https://www.google.com/maps?q=49/94+SITE+IV+SAHIBABAD+INDUSTRIAL+AREA+GHAZIABAD+UP-201010"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex items-center max-w-[300px] hover:text-[#D5AC72] transition-colors duration-300 cursor-pointer">
                    49/94 SITE IV SAHIBABAD INDUSTRIAL AREA GHAZIABAD UP-201010
                  </span>
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[#D5AC72]">Email</span>
              <div className="flex items-center gap-1 group cursor-pointer">
                <Envelope
                  size={24}
                  className="mt-0.5 text-[#5E0C1C] group-hover:text-[#D5AC72] transition-colors duration-300"
                />
                <span className="group-hover:text-[#D5AC72] transition-colors duration-300">
                  CADQAU3D@GMAIL.COM
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="absolute top-0 left-0 w-3/6 h-full -z-10 bg-transparent">
        <div
          className="h-full"
          style={{
            background:
              "linear-gradient(to left bottom, rgb(60, 0, 8, 0) 0%, rgb(60, 0, 8, 0) 10%, rgb(60, 0, 8, 0) 20%, rgb(60, 0, 8, 0) 30%, rgb(60, 0, 8, 0) 40%, rgba(77, 14, 27, 0.8) 100%,  rgb(60, 0, 8, 0.8) 100%",
          }}
        />
      </div>
      <div className="absolute top-0 right-0 w-3/6 h-full -z-10 bg-transparent">
        <div
          className="h-full"
          style={{
            background:
              "linear-gradient(to right bottom, rgb(60, 0, 8, 0) 0%, rgb(60, 0, 8, 0) 10%, rgb(60, 0, 8, 0) 20%, rgb(60, 0, 8, 0) 30%, rgb(60, 0, 8, 0) 40%, rgba(77, 14, 27, 0.8) 100%,  rgb(60, 0, 8, 0.8) 100%",
          }}
        />
      </div>
    </div>
  );
}
