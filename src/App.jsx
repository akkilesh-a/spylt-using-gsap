import { ScrollTrigger } from "gsap/all";
import { NavBar } from "./components";
import { HeroSection, MessageSection } from "./sections";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <MessageSection />
      <div className="h-[300vh] border border-green-500">
        Extra Space for Scrolling
      </div>
    </div>
  );
};

export default App;
