import Hero from "../components/home/Hero.jsx";
import AboutPreview from "../components/home/AboutPreview.jsx";
import Capabilities from "../components/home/Capabilities.jsx";
import ProcessTimeline from "../components/home/ProcessTimeline.jsx";
import CottonWasteCallout from "../components/home/CottonWasteCallout.jsx";
import ContactSection from "../components/home/ContactSection.jsx";

export default function HomePage() {
  return (
    <div className="w-full">
      <Hero />
      <AboutPreview />
      <Capabilities />
      <ProcessTimeline />
      <CottonWasteCallout />
      <ContactSection />
    </div>
  );
}
