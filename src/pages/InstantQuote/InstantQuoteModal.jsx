import { Box, Modal } from "@mui/material";
import { X } from "@phosphor-icons/react";
import logo from "../../assets/landingPage/logo.png";

export default function InstantQuoteModal({ open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      className="rounded-[12px]"
      sx={{
        backgroundColor: "rgba(26, 26, 26, 0.2)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          bgcolor: "#000000",
          boxShadow: 24,
          borderRadius: "12px",
        }}
      >
        <div className="bg-[#1A1A1A] m-4 rounded-[12px] px-6 py-4 text-white space-y-6">
          <div className="flex flex-row justify-between items-start">
            <div className="flex flex-row items-center gap-4">
              <img src={logo} alt="logo" className="h-32" />
              <span className="text-[#D5AC72] text-[28px] font-blacksword leading-snug">
                Together, Let’s Print the Future
              </span>
            </div>
            <button onClick={handleClose} className="cursor-pointer mt-4">
              <X color="#5E0C1C" size={32} />
            </button>
          </div>

          <div className="text-lg font-semibold text-[#D5AC72] cursor-pointer">
            Get Your Instant Quote Now
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-[#2A2A2A] text-white placeholder-gray-400 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D5AC72] w-full sm:w-2/3"
            />
            <button className="bg-[#D5AC72] text-black px-6 py-2 rounded-md font-semibold hover:bg-[#c69b54] transition cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </Box>
    </Modal>
  );
}
