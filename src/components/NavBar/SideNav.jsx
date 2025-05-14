import React from "react";
import Modal from "@mui/material/Modal";
import { motion } from "framer-motion";
import logo from "../../assets/landingPage/logo.png";
import { X } from "@phosphor-icons/react";

export default function SideNav({ open, handleClose }) {
  const modalVariants = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -300 },
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
        className="flex flex-col justify-between absolute z-100 w-full h-full right-0 bg-white border-2 border-[#FF8213CC] shadow-xl px-8 py-5 overflow-y-auto max-h-screen"
      >
        <div className="flex flex-row justify-between items-center">
          <img
            src={logo}
            alt="logo"
            className="cursor-pointer size-20"
            onClick={handleClose}
          />
          <X size={20} onClick={handleClose} />
        </div>
      </motion.div>
    </Modal>
  );
}
