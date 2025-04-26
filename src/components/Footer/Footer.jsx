import {
  InstagramLogo,
  Envelope,
  MapPin,
  Clock,
  ArrowSquareOut,
} from "@phosphor-icons/react";
import logo from "../../assets/landingPage/logo.png";
import { motion } from "framer-motion";

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

export default function Footer() {
  return (
    <div className="bg-[#1A1A1A] px-40 max-lg:px-20 max-md:px-10 py-16">
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
    </div>
  );
}
