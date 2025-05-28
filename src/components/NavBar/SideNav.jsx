import React from "react";
import Modal from "@mui/material/Modal";
import { motion } from "framer-motion";
import logo from "../../assets/landingPage/logo.png";
import { X } from "@phosphor-icons/react";
import {
  InstagramLogo,
  LinkedinLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";

export default function SideNav({ open, handleClose }) {
  const modalVariants = {
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 300 },
  };

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

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      disableEnforceFocus
    >
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.5 }}
        style={{ backgroundColor: "#000000" }}
        className="flex flex-col justify-between absolute z-50 w-full h-full right-0 bg-white border-2 border-[#FF8213CC] shadow-xl px-8 py-5 overflow-y-auto max-h-screen"
      >
        <div className="flex flex-col gap-20">
          <div className="flex flex-row justify-between items-center">
            <img
              src={logo}
              alt="logo"
              className="cursor-pointer size-28"
              onClick={handleClose}
            />
            <X
              color="#D5AC72"
              size={32}
              onClick={handleClose}
              className="cursor-pointer"
            />
          </div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={variantsfadeIn}
            className="flex flex-col gap-4 text-[#DAAC69] text-[20px]"
          >
            <span
              className="hover:text-[#6D5634] cursor-pointer"
              onClick={() => {
                document
                  .getElementById("how-it-works")
                  ?.scrollIntoView({ behavior: "smooth" });
                handleClose();
              }}
            >
              How it works?
            </span>

            <span
              className="hover:text-[#6D5634] cursor-pointer"
              onClick={() => {
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" });
                handleClose();
              }}
            >
              Services
            </span>

            <span
              className="hover:text-[#6D5634] cursor-pointer"
              onClick={() => {
                navigate("/gallery");
                handleClose();
              }}
            >
              Gallery
            </span>

            <span
              className="hover:text-[#6D5634] cursor-pointer"
              onClick={() => {
                document
                  .getElementById("testimonials")
                  ?.scrollIntoView({ behavior: "smooth" });
                handleClose();
              }}
            >
              Testimonials
            </span>

            <span
              className="hover:text-[#6D5634] cursor-pointer"
              onClick={() => {
                document
                  .getElementById("formverse")
                  ?.scrollIntoView({ behavior: "smooth" });
                handleClose();
              }}
            >
              FormVerse
            </span>

            <span
              className="hover:text-[#6D5634] cursor-pointer"
              onClick={() => {
                document
                  .getElementById("faq")
                  ?.scrollIntoView({ behavior: "smooth" });
                handleClose();
              }}
            >
              FAQ
            </span>
          </motion.div>
        </div>

        <div className="flex flex-row justify-end items-center gap-8 group cursor-pointer">
          <span className="text-[#E0E0E0] text-xl font-semibold">
            Follow Us
          </span>
          <div className="flex flex-row items-center gap-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <InstagramLogo
                size={36}
                className="text-[#5E0C1C] hover:text-[#D5AC72] transition-colors duration-100"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/shivang-aggarwal-6272a0150"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinLogo
                size={36}
                className="text-[#5E0C1C] hover:text-[#D5AC72] transition-colors duration-100"
              />
            </a>

            <a
              href="https://www.youtube.com/@CADQUA3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeLogo
                size={36}
                className="text-[#5E0C1C] hover:text-[#D5AC72] transition-colors duration-100"
              />
            </a>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-3/6 h-full -z-10 bg-transparent">
          <div
            className="h-full"
            style={{
              background:
                "linear-gradient(to left top, rgb(60, 0, 8, 0) 0%, rgb(60, 0, 8, 0) 10%, rgb(60, 0, 8, 0) 20%, rgb(60, 0, 8, 0) 30%, rgb(60, 0, 8, 0) 40%, rgba(77, 14, 27, 0.8) 100%,  rgb(60, 0, 8, 0.8) 100%",
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
      </motion.div>
    </Modal>
  );
}
