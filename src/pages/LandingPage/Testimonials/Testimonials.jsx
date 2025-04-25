import comma from "../../../assets/landingPage/comma.svg";

export default function Testimonials() {
  return (
    <div className="bg-[#000000] px-40 max-lg:px-20 max-md:px-10 pb-20">
      <span className="text-[#B8A082]">
        What Our <span className="text-[#5E0C1C]">Customers</span> Are Saying
      </span>
      <div>
        <div className="flex flex-row items-center">
          <img src={comma} alt="comma" />
          <img src={comma} alt="comma" />
        </div>
        <div></div>
      </div>
    </div>
  );
}
