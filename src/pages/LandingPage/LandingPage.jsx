import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import PrintingUses from "./3DPrintingUses/PrintingUses";
import Services from "./3DServices/Services";
import ClientsSlideShow from "./ClientsSlideShow/ClientsSlideShow";
import CompanyStatistics from "./CompanyStatistics/CompanyStatistics";
import FAQ from "./FAQ/FAQ";
import HeroSection from "./HeroImage/HeroSection";
import QuotationProcess from "./QuotationProcess/QuotationProcess";
import WhatWeOffer from "./WhatWeOffer/WhatWeOffer";

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
      <WhatWeOffer />
      <Services />
      <PrintingUses />
      <FAQ />
      <Footer />
    </div>
  );
}
