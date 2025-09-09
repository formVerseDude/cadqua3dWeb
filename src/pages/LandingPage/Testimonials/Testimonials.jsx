import { useEffect, useState } from "react";
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

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextReview();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="scroll-mt-12 md:scroll-mt-8">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={variantsfadeIn}
        className="flex justify-end px-[10%] py-20"
      >
        <div className="text-[#D5AC72] h-full flex flex-col gap-16">
          <div className="flex flex-col gap-2 w-full">
            <span
              className="font-semibold font-vonique text-[32px] sm:text-[36px] md:text-[42px] lg:text-[48px]"
              style={{ wordSpacing: "0.5rem" }}
            >
              What Our <span className="text-[#5E0C1C]">Customers</span> <br />
              Are Saying
            </span>

            <span className="text-[20px] text-[#ffffff] text-left">
              Hear how our clients have benefited from working with us
            </span>
          </div>

          <div className="w-full flex justify-center">
            <div className="mx-[10%] max-md:mx-0 flex flex-col gap-8 py-10 pl-8 pr-16 bg-white/5 backdrop-blur-md rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white/10 max-2xl:w-4/5 max-lg:w-full w-3/5">
              <div className="flex flex-row items-center border border-[#D5AC72] bg-[#D5AC72] rounded-full w-fit h-fit">
                <img src={comma} alt="comma" className="size-16" />
                <img src={comma} alt="comma" className="size-16 -ml-10" />
              </div>

              <div className="flex flex-row max-md:flex-col px-[10%] max-md:px-0">
                <motion.div
                  key={reviews[currentReviewIndex].company}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="flex flex-col gap-8 text-[#ffffff] "
                >
                  <span className="text-[32px] font-semibold">
                    The Company Improved Our Productivity
                  </span>
                  <span className="mb-10">
                    {reviews[currentReviewIndex].review} <br />
                    Focused, efficient, and smart — the R&D approach balances
                    innovation with cost-effectiveness. By prioritizing real
                    needs and rapid experimentation, it delivers high-quality
                    outcomes without overspending.
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
                <div className="flex items-end flex-end gap-4 mt-4 w-fit">
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
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
