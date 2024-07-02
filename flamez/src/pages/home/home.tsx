import LandingSection from "./sections/LandingSection/LandingSection.tsx";
import WhatWeDo from "./sections/ServicesSection/WhatWeDoSection.tsx";
import Footer from "../../components/Footer.tsx";
import NavbarSimple from "../../components/NavbarSimple.tsx";
import OurServices from "./sections/OurServices/OurServices.tsx";
import OurClients from "./sections/OurClients/OurClients.tsx";
import Testamonials from "./sections/Testamonials/Testamonials.tsx";

export default function home() {
  return (
    <div className="">
      <NavbarSimple />
      <LandingSection />
      <WhatWeDo />
      <OurServices />
      <OurClients />
      <Testamonials />
      <Footer />
    </div>
  );
}
