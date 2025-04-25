import Footer from "../../components/Footer/Footer";
import PrintingUses from "./3DPrintingUses/PrintingUses";
import Services from "./3DServices/Services";
import ClientsSlideShow from "./ClientsSlideShow/ClientsSlideShow";
import CompanyStatistics from "./CompanyStatistics/CompanyStatistics";
import FAQ from "./FAQ/FAQ";
import HeroSection from "./HeroImage/HeroSection";
import QuotationProcess from "./QuotationProcess/QuotationProcess";
import Testimonials from "./Testimonials/Testimonials";
import WhatWeOffer from "./WhatWeOffer/WhatWeOffer";

export default function LandingPage() {
  return (
    <div>
      <HeroSection />
      <CompanyStatistics />
      <QuotationProcess />
      <ClientsSlideShow />
      <WhatWeOffer />
      <Services />
      <PrintingUses />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

/*
        style={{
          backgroundImage:
            "linear-gradient(to right bottom, #5e0c1c, #4d0e1b, #3d0f19, #2d0e15, #1e0a0f, #000000, #000000, #000000, #000000, #000000, #000000, #000000)",
        }}
            */
