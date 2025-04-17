import { ArrowUpRight, SignIn } from "@phosphor-icons/react";
import logo from "../../assets/landingPage/logo.png";

export default function NavBar() {
  return (
    <div className="absolute w-full bg-transparent backdrop-blur-3xl text-[#ffffff] flex flex-row justify-between max-sm:justify-center items-center px-40 max-lg:px-10 max-sm:px-10 py-5">
      <div>
        <img src={logo} alt="logo" className="h-12 w-44 cursor-pointer" />
      </div>
      <div className="block max-sm:hidden flex flex-row gap-8 max-sm:gap-2">
        <button className="group flex flex-row gap-1 items-center border-2 border-[#ffffff] px-3 py-2 rounded-[20px] text-[16px] cursor-pointer text-white hover:text-[#B8A082] hover:border-[#B8A082]">
          <SignIn
            size={20}
            className="text-white group-hover:text-[#938068] transition-colors duration-200"
          />
          Login
        </button>
        <button className="flex flex-row gap-1 items-center border-2 border-[#B8A082] px-3 py-2 rounded-[20px] text-[16px] bg-[#B8A082] cursor-pointer hover:bg-[#938068] hover:border-[#938068]">
          <ArrowUpRight size={20} />
          Get Quote
        </button>
      </div>
    </div>
  );
}
