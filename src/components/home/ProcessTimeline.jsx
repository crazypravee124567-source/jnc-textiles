import SectionHeading from "../ui/SectionHeading.jsx";
import ProcessStepCard from "../cards/ProcessStepCard.jsx";
import { processSteps } from "../../data/home.js";

export default function ProcessTimeline() {
  return (
    <section className="w-full py-24 bg-brand-white border-b border-brand-border">
      <div className="max-w-[1360px] mx-auto px-6">
        <SectionHeading
          className="max-w-2xl mb-16"
          eyebrow="Spinning Sequence"
          title="The Manufacturing Process"
          description="A continuous connected workflow ensuring high tensile strength, consistent count, and zero contamination from bale to finished cone."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {processSteps.map((s) => (
            <ProcessStepCard key={s.step} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
