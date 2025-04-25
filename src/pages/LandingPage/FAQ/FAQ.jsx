import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqItems = [
  {
    id: "panel1",
    question: "Why 3D Printing?",
    answer:
      "Additive Manufacturing is better than traditional manufacturing as it reduces pollution and accelerates product development.",
  },
  {
    id: "panel2",
    question: "How much accuracy can be expected?",
    answer:
      "It offers higher accuracy and durability compared to traditionally manufactured products or materials.",
  },
  {
    id: "panel3",
    question: "Is it cost effective?",
    answer:
      "For complex designs, it's cost-effective since such designs are hard to achieve via traditional methods. For bulk production, it may be slightly more expensive.",
  },
];

export default function FAQ() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="bg-black px-40 max-lg:px-20 max-md:px-10 pb-20">
      {faqItems.map((item) => (
        <Accordion
          key={item.id}
          expanded={expanded === item.id}
          onChange={handleChange(item.id)}
          sx={{ bgcolor: "#111", color: "#fff", mb: 2 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls={`${item.id}-content`}
            id={`${item.id}-header`}
          >
            <Typography
              component="span"
              sx={{ fontWeight: 500, fontSize: "1rem", width: "100%" }}
            >
              {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#ccc" }}>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
