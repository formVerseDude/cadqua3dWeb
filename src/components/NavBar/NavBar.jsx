import { ArrowUpRight, SignIn } from "@phosphor-icons/react";

export default function NavBar() {
  return (
    <div className="absolute w-full bg-[#030303] backdrop-blur-3xl text-[#ffffff] flex flex-row justify-between items-center px-40 max-lg:px-10 max-sm:px-10 py-5">
      <div>Logo</div>
      <div className="flex flex-row gap-8 max-sm:gap-2">
        <button className="group block max-sm:hidden flex flex-row gap-1 items-center border-2 border-[#ffffff] px-3 py-2 rounded-[20px] text-[16px] cursor-pointer text-white hover:text-[#d23d37] hover:border-[#d23d37]">
          <SignIn
            size={20}
            className="text-white group-hover:text-[#d23d37] transition-colors duration-200"
          />
          Login
        </button>
        <button className="flex flex-row gap-1 items-center border-2 border-[#FB5650] px-3 py-2 rounded-[20px] text-[16px] bg-[#FB5650] cursor-pointer hover:bg-[#d23d37]">
          <ArrowUpRight size={20} />
          Get Quote
        </button>
      </div>
    </div>
  );
}
