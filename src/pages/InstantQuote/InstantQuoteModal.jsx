import { useState } from "react";
import { Box, Modal } from "@mui/material";
import { X } from "@phosphor-icons/react";
import logo from "../../assets/landingPage/logo.png";
import toast from "react-hot-toast";

export default function InstantQuoteModal({ open, handleClose }) {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.", {
        style: {
          background: "#5E0C1C",
          color: "#D5AC72",
          fontWeight: "bold",
        },
        iconTheme: {
          primary: "#D5AC72",
          secondary: "#5E0C1C",
        },
      });
      return;
    }

    toast.success("Successfully subscribed!", {
      style: {
        background: "#5E0C1C",
        color: "#D5AC72",
        fontWeight: "bold",
      },
      iconTheme: {
        primary: "#D5AC72",
        secondary: "#5E0C1C",
      },
    });

    setEmail("");
  };

  return (
    <>
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
          <div className="bg-[#1A1A1A] m-4 rounded-[12px] px-6 py-4 text-white space-y-4">
            <div className="flex flex-row justify-between items-start">
              <div className="flex flex-row items-center gap-10">
                <img src={logo} alt="logo" className="h-32" />
                <span
                  className="text-[#D5AC72] text-[28px] font-vonique font-bold"
                  style={{ wordSpacing: "0.75rem" }}
                >
                  Together, Let’s Print <br /> the Future
                </span>
              </div>
              <button onClick={handleClose} className="cursor-pointer mt-4">
                <X color="#5E0C1C" size={32} />
              </button>
            </div>

            <a href="/quotation" target="_blank" rel="noopener noreferrer">
              <div className="text-lg font-semibold text-[#D5AC72] cursor-pointer my-10">
                Get Your Instant Quote Now
              </div>
            </a>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-[#2A2A2A] text-white placeholder-gray-400 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D5AC72] w-full sm:w-2/3"
              />
              <button
                onClick={handleSubscribe}
                className="bg-[#D5AC72] text-black px-6 py-2 rounded-md font-semibold hover:bg-[#c69b54] transition cursor-pointer"
              >
                Subscribe
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}
