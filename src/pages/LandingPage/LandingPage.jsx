import { useEffect, useState } from "react";
import HeroSection from "./HeroSection/HeroSection";
import CompanyStatistics from "./CompanyStatistics/CompanyStatistics";
import QuotationProcess from "./QuotationProcess/QuotationProcess";
import ClientsSlideShow from "./ClientsSlideShow/ClientsSlideShow";
import WhatWeOffer from "./WhatWeOffer/WhatWeOffer";
import Services from "./3DServices/Services";
import PrintingUses from "./3DPrintingUses/PrintingUses";
import Testimonials from "./Testimonials/Testimonials";
import FAQ from "./FAQ/FAQ";
import Footer from "../../components/Footer/Footer";
import CommunityFormVerse from "./Community/CommunityFormVerse";
import NavBar from "../../components/NavBar/NavBar";

export default function LandingPage() {
  const [openNavModal, setOpenNavModal] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div>
      <NavBar setOpenNavModal={setOpenNavModal} />
      <HeroSection
        openNavModal={openNavModal}
        setOpenNavModal={setOpenNavModal}
      />
      <CompanyStatistics />
      <QuotationProcess />
      <ClientsSlideShow />
      <WhatWeOffer />
      <Services />
      <PrintingUses />
      <Testimonials />
      <CommunityFormVerse />
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
