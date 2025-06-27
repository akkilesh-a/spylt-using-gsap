import { ScrollTrigger } from "gsap/all";
import { NavBar } from "./components";
import { HeroSection } from "./sections";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <div className="h-[300vh] border border-green-500">
        Extra Space for Scrolling
      </div>
    </div>
  );
};

export default App;
