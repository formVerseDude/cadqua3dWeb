import * as React from "react";
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

export default function FAQ() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const text = "Frequently Asked Question";
  const letters = text.split("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="faq">
      <motion.h3
        ref={ref}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={variantsflow}
        viewport={{ once: true }}
        className="text-[#D5AC72] text-[32px] px-40 font-vonique my-10"
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
      <div className="bg-tansparent px-40 max-lg:px-20 max-md:px-10 pb-20">
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
    </section>
  );
}
