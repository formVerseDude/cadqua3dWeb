export default function HeroSection() {
  return (
    <div className="h-[calc(100vh-150px)] text-[#ffffff] bg-gradient-to-b from-[#030303] via-[#252525] to-[#434343] px-40 max-sm:h-[calc(100vh-50px)]">
      <div className="absolute right-0 top-10 max-sm:top-20 h-4/5 w-1/2 flex flex-col gap-4 items-start justify-center px-10 max-lg:w-full max-md:px-10">
        <div className="text-[64px] text-left font-bold max-sm:text-[40px] leading-18 max-md:leading-12">
          Online{" "}
          <span className="bg-gradient-to-b from-[#de485b] via-[#ba3390] to-[#5349b7] bg-clip-text text-transparent">
            3D
          </span>{" "}
          <br />
          Printing Services
        </div>
        <span className="text-[24px] font-semibold">
          Digital Manufacturing services at unbeatable <br /> prices in India
        </span>
        <ol className="text-[#AEAFB1] text-[16px] font-normal list-decimal list-inside">
          <li>
            Choose from 50+ materials and various manufacturing processes.
          </li>
          <li>Rapid Quotation for quantities between 1 & 1000 parts.</li>
          <li>Turnaround time as quick as 1 business Day.</li>
        </ol>
        <div className="flex flex-row gap-4">
          <button className="border-2 border-[#FB5650] px-10 max-sm:px-4 py-3 rounded-[20px] text-[16px] bg-[#FB5650] cursor-pointer hover:bg-[#d23d37]">
            Get Instant Quote
          </button>
          <button className="border-2 border-[#FFFFFF] px-10 max-sm:px-4 py-3 rounded-[20px] text-[16px] bg-[#1C1C24] cursor-pointer hover:text-[#d23d37] hover:border-[#d23d37]">
            How it works ?
          </button>
        </div>
      </div>
    </div>
  );
}
