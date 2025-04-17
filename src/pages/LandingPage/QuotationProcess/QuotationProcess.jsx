import { ArrowUpRight, Check } from "@phosphor-icons/react";
import quotation from "../../../assets/landingPage/quotation.png";
import check from "../../../assets/landingPage/check.svg";

export default function QuotationProcess() {
  return (
    <div className="bg-[#000000] flex flex-col gap-8 text-[#000000] px-40 py-18 max-lg:px-10">
      <span className="text-[#5E0C1C] text-[24px] font-semibold">
        How it works?
      </span>
      <div className="flex flex-row justify-between text-[#ffffff]">
        <h3 className="w-2/5 text-[40px] font-semibold leading-12 max-lg:w-full">
          Instant Online Quotation
        </h3>
        <p className="block text-[#d3d3d3] text-[16px] w-2/3 leading-5 max-xl:hidden">
          State of the art Digital Manufacturing platform that enables you to
          get instant online quote, fabricate and track all your additive
          manufacturing (3d printing), rapid prototyping, batch production and
          mass manufacturing requirements.
        </p>
      </div>
      <div className="flex flex-row justify-between w-full max-lg:flex-col max-lg:gap-8 text-[#ffffff]">
        <div className="flex flex-col gap-4 w-2/5 max-lg:w-full">
          <span className="text-[24px] font-semibold">
            Learn about how our Platform works
          </span>
          <p className="text-[16px] font-medium leading-6">
            We use a precise rule-based system that analyzes your CAD file
            against our comprehensive database of manufacturing parameters. This
            ensures accurate, instant quotes tailored to your part's
            specifications, material needs, and complexity. Our system is
            optimized for speed, accuracy, and reliability, giving you
            confidence in every quote.
          </p>
          <div className="text-[16px] font-medium flex flex-col gap-2 leading-5">
            <span className="flex flex-row items-start gap-2">
              <img src={check} alt="check" className="size-6" />
              Upload a 3D CAD file (STL, STEP, STP, IGES, IGS)
            </span>
            <span className="flex flex-row items-start gap-2">
              <img src={check} alt="check" className="size-6" />
              Prices updates in real-time based on the selected manufacturing
              process, material and other process parameters.
            </span>
            <span className="flex flex-row items-start gap-2">
              <img src={check} alt="check" className="size-6" />
              Choose form a variety of post processing options tailored to suit
              your project.
            </span>
          </div>
          <span className="text-[#B8A082] text-[16px] font-semibold flex flex-row items-center gap-1 cursor-pointer hover:text-[#938068]">
            Read How Instant Quotation Works <ArrowUpRight size={18} />
          </span>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={quotation}
            alt="quotation"
            className="w-[600px] h-80 max-md:w-full max-md:h-full rounded-[12px]"
          />
        </div>
      </div>
    </div>
  );
}
