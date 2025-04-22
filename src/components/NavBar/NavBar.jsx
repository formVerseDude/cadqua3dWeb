import { ArrowUpRight, SignIn } from "@phosphor-icons/react";
import logo from "../../assets/landingPage/logo.png";

export default function NavBar() {
  return (
    <div className="w-full relative bg-transparent text-[#ffffff] flex flex-row justify-between max-sm:justify-center items-center px-40 max-lg:px-10 max-sm:px-10 py-5">
      <div className="absolute -top-2">
        <img src={logo} alt="logo" className="h-40 w-44 cursor-pointer" />
      </div>
      <div className="block max-sm:hidden flex flex-row gap-8 max-sm:gap-2 w-full justify-end">
        <button className="group flex flex-row gap-1 items-center border-2 border-[#FFFFFF] px-6 max-sm:px-3 py-2 rounded-[20px] max-sm:rounded-[10px] text-[16px] bg-[#1C1C24] hover:bg-transparent cursor-pointer hover:text-[#B8A082] hover:border-[#5E0C1C]">
          <SignIn
            size={20}
            className="text-white group-hover:text-[#938068] transition-colors duration-200"
          />
          Login
        </button>
        <button className="flex flex-row gap-1 items-center border-2 border-[#5E0C1C] px-6 max-sm:px-3 py-2 rounded-[20px] max-sm:rounded-[10px] text-[16px] bg-gradient-to-l from-[#480E1A] via-[#480E1A] to-[#320E16] cursor-pointer hover:bg-gradient-to-r hover:from-[#380710] hover:via-[#2f060e] hover:to-[#25040b] transition duration-300 hover:border-[#B8A082]">
          <ArrowUpRight size={20} />
          Get Quote
        </button>
      </div>
    </div>
  );
}
