import { useState } from "react";
import { motion } from "framer-motion";
import comma from "../../../assets/landingPage/comma.svg";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const reviews = [
  {
    company: "UKB",
    review: "Best and cost-effective R&D.",
    managerName: "John Doe",
    managerPosition: "R&D Manager",
  },
  {
    company: "Designifying 3D",
    review: "Great B2B synergies and products on time",
    managerName: "Jane Smith",
    managerPosition: "Product Manager",
  },
  {
    company: "Clew Pouches",
    review: "Best 3D design and prototype post-process quality.",
    managerName: "Michael Johnson",
    managerPosition: "Operations Head",
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

export default function Testimonials() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const handleNextReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex < reviews.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePreviousReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : reviews.length - 1
    );
  };

  return (
    <section id="testimonials">
      <div className="bg-[#000000] px-80 max-lg:px-20 max-md:px-10 py-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={variants}
          className="relative flex justify-end"
        >
          <div className="bg-transparent w-4/5 rounded-[25px]">
            <div className="absolute text-[#D5AC72] h-full left-0 flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <span className="text-[50px] font-semibold">
                  What Our <span className="text-[#5E0C1C]">Customers</span>{" "}
                  <br />
                  Are Saying
                </span>
                <span className="text-[20px] text-[#ffffff] text-left">
                  Hear how our clients have benefited from working with us
                </span>
              </div>

              <div className="flex items-center flex-end gap-4 mt-4 w-full">
                <KeyboardBackspaceIcon
                  className="text-[#D5AC72] cursor-pointer hover:text-[#7f6744]"
                  style={{ fontSize: "50px" }}
                  onClick={handlePreviousReview}
                />
                <KeyboardBackspaceIcon
                  className="text-[#D5AC72] cursor-pointer rotate-180 hover:text-[#7f6744]"
                  style={{ fontSize: "50px" }}
                  onClick={handleNextReview}
                />
              </div>
            </div>
            <div className="flex flex-row gap-24 mt-52 py-10 px-4 -ml-12 bg-white/5 backdrop-blur-md rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white/10">
              <div className="flex flex-row items-center border border-[#D5AC72] bg-[#D5AC72] rounded-full w-fit h-fit">
                <img src={comma} alt="comma" className="size-16" />
                <img src={comma} alt="comma" className="size-16 -ml-10" />
              </div>

              <motion.div
                key={reviews[currentReviewIndex].company}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-8 text-[#ffffff] mt-10 w-1/2"
              >
                <span className="text-[32px] font-semibold">
                  The Company Improved Our Productivity
                </span>
                <span className="mb-10">
                  {reviews[currentReviewIndex].review} <br />
                  Focused, efficient, and smart — the R&D approach balances
                  innovation with cost-effectiveness. By prioritizing real needs
                  and rapid experimentation, it delivers high-quality outcomes
                  without overspending.
                </span>
                <span className="text-[24px] font-semibold">
                  {reviews[currentReviewIndex].managerPosition}
                  <br />
                  <span className="text-[18px] font-normal">
                    {reviews[currentReviewIndex].managerName} (
                    {reviews[currentReviewIndex].company})
                  </span>
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
