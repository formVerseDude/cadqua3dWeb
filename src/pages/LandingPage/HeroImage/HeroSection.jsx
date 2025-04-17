import herovideo from "../../../assets/landingPage/heroVideo.mp4";

export default function HeroSection() {
  return (
    <div className="h-[calc(100vh-150px)] text-[#ffffff] max-sm:h-[calc(100vh-50px)]">
      <div className="block max-lg:hidden w-full h-full flex justify-start items-end px-40">
        <video
          src={herovideo}
          className="w-[calc(100vw-50vw)] h-[calc(100vh-200px)]"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <div className="px-40 absolute right-0 top-10 max-sm:top-20 h-4/5 w-1/2 flex flex-col gap-4 items-start justify-center px-10 max-lg:w-full max-md:px-10">
        <div className="text-[64px] text-left font-bold max-sm:text-[40px] leading-18 max-md:leading-12">
          Online{" "}
          <span className="bg-gradient-to-b from-[#B8A082] via-[#938068] to-[#6E604E] bg-clip-text text-transparent">
            3D
          </span>{" "}
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
          <button className="border-2 border-[#B8A082] px-6 max-sm:px-3 py-2 rounded-[20px] max-sm:rounded-[10px] text-[16px] bg-[#B8A082] cursor-pointer hover:bg-[#938068] hover:border-[#938068]">
            Get Instant Quote
          </button>
          <button className="border-2 border-[#FFFFFF] px-6 max-sm:px-3 py-2 rounded-[20px] max-sm:rounded-[10px] text-[16px] bg-[#1C1C24] cursor-pointer hover:text-[#B8A082] hover:border-[#B8A082]">
            How it works ?
          </button>
        </div>
      </div>
    </div>
  );
}
