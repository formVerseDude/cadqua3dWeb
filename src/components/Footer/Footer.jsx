import * as React from "react";
import {
  InstagramLogo,
  Envelope,
  MapPin,
  Clock,
  Phone,
  LinkedinLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import logo from "../../assets/landingPage/logo.png";
import { motion } from "framer-motion";

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

  return (
    <div className="relaive border-t-0 border-[#5E0C1C] backdrop-blur-md rounded-t-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] px-[10%] py-20">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={variants}
        className="flex flex-row justify-between gap-20 max-lg:flex-col max-lg:items-center max-sm:items-start max-md:gap-12"
      >
        <div className="flex flex-1">
          <img src={logo} alt="logo" className="h-52" />
        </div>
        <div className="flex flex-col gap-6 flex-1">
          <div className="flex items-center gap-3">
            <span className="text-[#E0E0E0] text-lg font-semibold">
              Opening Hours
            </span>
          </div>
          <div className="flex flex-col gap-2 text-[#E0E0E0]">
            <div className="flex flex-row items-start gap-4 group cursor-pointer">
              <Clock
                size={26}
                className="text-[#5E0C1C] group-hover:text-[#D5AC72] transition-colors duration-300"
              />
              <div className="flex flex-col gap-2">
                <span className="hover:text-[#D5AC72] transition-colors duration-300">
                  24/7 Instant Quotations <br /> Get a quote anytime, any day.
                </span>
                <span className="hover:text-[#D5AC72] transition-colors duration-300">
                  Express Delivery Across India <br /> Rapid shipping of your 3D
                  models nationwide.
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-8 group cursor-pointer">
            <span className="text-[#E0E0E0] text-lg font-semibold">
              Follow Us
            </span>
            <div className="flex flex-row items-center gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <InstagramLogo
                  size={28}
                  className="text-[#5E0C1C] hover:text-[#D5AC72] transition-colors duration-100"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/shivang-aggarwal-6272a0150"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinLogo
                  size={28}
                  className="text-[#5E0C1C] hover:text-[#D5AC72] transition-colors duration-100"
                />
              </a>

              <a
                href="https://www.youtube.com/@CADQUA3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YoutubeLogo
                  size={28}
                  className="text-[#5E0C1C] hover:text-[#D5AC72] transition-colors duration-100"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 flex-1">
          <div className="flex items-center gap-3">
            <span className="text-[#E0E0E0] text-lg font-semibold">
              Contact
            </span>
          </div>
          <div className="flex flex-col gap-6 text-[#E0E0E0]">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-start group gap-4 cursor-pointer">
                <MapPin
                  size={24}
                  className="text-[#5E0C1C] mt-0.5 group-hover:text-[#D5AC72] transition-colors duration-300"
                />
                <a
                  href="https://www.google.com/maps?q=49/94+SITE+IV+SAHIBABAD+INDUSTRIAL+AREA+GHAZIABAD+UP-201010"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex items-center max-w-[300px] group-hover:text-[#D5AC72] transition-colors duration-300">
                    CADQUA3D
                    <br />
                    49/94, SITE IV, Sahibabad Industrial Area, Ghaziabad Uttar
                    Pradesh <br />
                    201010
                  </span>
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 group cursor-pointer">
                <Envelope
                  size={24}
                  className="mt-0.5 text-[#5E0C1C] group-hover:text-[#D5AC72] transition-colors duration-300"
                />
                <span className="group-hover:text-[#D5AC72] transition-colors duration-300">
                  CADQAU3D@GMAIL.COM
                </span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <Phone
                  size={24}
                  className="text-[#5E0C1C] group-hover:text-[#D5AC72] transition-colors duration-300"
                />
                <span className="group-hover:text-[#D5AC72] transition-colors duration-300">
                  +91 90801 53512, +91 99907 71478
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
              "linear-gradient(to right top, rgb(60, 0, 8, 0) 0%, rgb(60, 0, 8, 0) 10%, rgb(60, 0, 8, 0) 20%, rgb(60, 0, 8, 0) 30%, rgb(60, 0, 8, 0) 40%, rgba(77, 14, 27, 0.8) 100%,  rgb(60, 0, 8, 0.8) 100%",
          }}
        />
      </div>
    </div>
  );
}
