import company1 from "../../../assets/landingPage/company1.avif";
import company2 from "../../../assets/landingPage/company2.avif";
import company3 from "../../../assets/landingPage/company3.avif";
import company4 from "../../../assets/landingPage/company4.avif";

export default function ClientsSlideShow() {
  return (
    <div className="my-10">
      <style>{`
  @keyframes loopScroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
  }

  .loop-scroll {
    animation: loopScroll 50s linear infinite;
  }

  .paused {
    animation-play-state: paused;
  }
`}</style>

      <span className="w-full flex justify-center text-center mb-10 max-md:px-10">
        Trusted manufacturing platform for 1000+ product development companies
        across the globe.
      </span>

      <div className="flex space-x-16 overflow-hidden group">
        <div className="flex space-x-16 loop-scroll group-hover:paused">
          <img
            src={company1}
            alt="company1"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company2}
            alt="company2"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company3}
            alt="company3"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company4}
            alt="company4"
            className="w-32 h-20 object-contain max-w-none"
          />
        </div>
        <div
          className="flex space-x-16 loop-scroll group-hover:paused"
          aria-hidden="true"
        >
          <img
            src={company1}
            alt="company1"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company2}
            alt="company2"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company3}
            alt="company3"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company4}
            alt="company4"
            className="w-32 h-20 object-contain max-w-none"
          />
        </div>
        <div
          className="flex space-x-16 loop-scroll group-hover:paused"
          aria-hidden="true"
        >
          <img
            src={company1}
            alt="company1"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company2}
            alt="company2"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company3}
            alt="company3"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company4}
            alt="company4"
            className="w-32 h-20 object-contain max-w-none"
          />
        </div>
        <div
          className="flex space-x-16 loop-scroll group-hover:paused"
          aria-hidden="true"
        >
          <img
            src={company1}
            alt="company1"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company2}
            alt="company2"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company3}
            alt="company3"
            className="w-32 h-20 object-contain max-w-none"
          />
          <img
            src={company4}
            alt="company4"
            className="w-32 h-20 object-contain max-w-none"
          />
        </div>
      </div>
    </div>
  );
}
