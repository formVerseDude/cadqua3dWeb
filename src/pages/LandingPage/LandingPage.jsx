import NavBar from "../../components/NavBar/NavBar";
import ClientsSlideShow from "./ClientsSlideShow/ClientsSlideShow";
import CompanyStatistics from "./CompanyStatistics/CompanyStatistics";
import HeroSection from "./HeroImage/HeroSection";
import QuotationProcess from "./QuotationProcess/QuotationProcess";

export default function LandingPage() {
  return (
    <div className="h-full">
      <div
        style={{
          backgroundImage:
            "linear-gradient(to right bottom, #5e0c1c, #4d0e1b, #3d0f19, #2d0e15, #1e0a0f, #000000, #000000, #000000, #000000, #000000, #000000, #000000)",
        }}
      >
        <NavBar />
        <HeroSection />
        <CompanyStatistics />
      </div>
      <QuotationProcess />
      <ClientsSlideShow />
    </div>
  );
}
