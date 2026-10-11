import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    title: "Share your details",
    text: "Tell Pallavi the occasion, event date, service you need and the location.",
  },
  {
    title: "Discuss your look",
    text: "Talk through your preferred look, her availability and the pricing.",
  },
  {
    title: "Confirm directly",
    text: "Confirm the booking details directly with Pallavi.",
  },
];

export default function BookingSteps() {
  return (
    <section aria-labelledby="steps-heading">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="How booking works"
          title="Three simple steps."
        />
        <ol className="mt-14 grid gap-10 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="border-t border-gold pt-6">
              <Reveal delay={index * 0.1}>
                <p className="eyebrow">Step {index + 1}</p>
                <h3 className="display-md mt-3">{step.title}</h3>
                <p className="mt-3 text-espresso/75">{step.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
