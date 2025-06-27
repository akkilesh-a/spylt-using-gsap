import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import { NavBar } from "./components";
import {
  FlavorSection,
  HeroSection,
  MessageSection,
  NutritionSection,
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
            <h1 className="text-center text-4xl font-bold py-10">
              Scroll down to see the effects
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
