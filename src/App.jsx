import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import { NavBar } from "./components";
import {
  FlavorSection,
  HeroSection,
  MessageSection,
  NutritionSection,
  BenefitSection,
  TestimonailsSection,
  FooterSection,
} from "./sections";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });

  return (
    <div>
      <NavBar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <FlavorSection />
          <NutritionSection />
          <div>
            <BenefitSection />
            <TestimonailsSection />
          </div>
          <FooterSection />
        </div>
      </div>
    </div>
  );
};

export default App;
