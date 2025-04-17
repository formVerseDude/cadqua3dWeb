import herovideo from "../../../assets/landingPage/heroVideo.mp4";

export default function HeroSection() {
  return (
    <div className="h-full text-[#ffffff] max-sm:h-[calc(100vh-50px)] flex flex-row justify-between items-center gap-16 pb-20 max-lg:pb-0">
      <div className="block max-lg:hidden w-full h-full flex justify-start items-end flex flex-1">
        <video
          src={herovideo}
          className="w-[calc(100vw-50vw)]"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <div className="pr-40 right-0 top-0 max-sm:top-20 h-4/5 w-1/2 flex flex-col flex-1 gap-4 items-start justify-center pr-10 max-lg:pr-0 max-lg:w-full max-md:px-10 max-lg:items-center max-lg:px-10 max-lg:py-40 max-md:py-0">
        <div className="text-[64px] text-left max-lg:text-center font-bold max-sm:text-[40px] leading-18 max-md:leading-12">
          Online{" "}
          <span className="bg-gradient-to-b from-[#5E0C1C] via-[#480E1A] to-[#480E1A] bg-clip-text text-transparent">
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
          <button className="border-2 border-[#5E0C1C] px-6 max-sm:px-3 py-2 rounded-[20px] max-sm:rounded-[10px] text-[16px] bg-gradient-to-l from-[#480E1A] via-[#480E1A] to-[#320E16] cursor-pointer hover:bg-gradient-to-r hover:from-[#380710] hover:via-[#2f060e] hover:to-[#25040b] transition duration-300 hover:border-[#B8A082]">
            Get Instant Quote
          </button>
          <button className="border-2 border-[#FFFFFF] px-6 max-sm:px-3 py-2 rounded-[20px] max-sm:rounded-[10px] text-[16px] bg-[#1C1C24] hover:bg-transparent cursor-pointer hover:text-[#B8A082] hover:border-[#5E0C1C]">
            How it works ?
          </button>
        </div>
      </div>
    </div>
  );
}
