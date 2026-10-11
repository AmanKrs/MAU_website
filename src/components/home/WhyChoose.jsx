import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const strengths = [
  {
    title: "A personalised approach",
    text: "Every look starts from your features, skin and preferences rather than a fixed template.",
  },
  {
    title: "Tailored to you",
    text: "Share references, your outfit and the finish you love; the look is shaped around them.",
  },
  {
    title: "Detail and finish",
    text: "Careful attention to skin, eyes, lips and the overall finish, so the look is refined up close and on camera.",
  },
  {
    title: "Clear communication",
    text: "Dates, availability and pricing are discussed openly before anything is confirmed.",
  },
  {
    title: "A professional process",
    text: "A simple enquiry and booking flow, directly with Pallavi, from first message to the day itself.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-espresso text-ivory" aria-labelledby="why-heading">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <SectionHeading
          eyebrow="Why Pallavi"
          eyebrowClassName="text-gold"
          title="Makeup that feels considered."
          titleClassName="!text-ivory"
        />
        <ol className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:mt-12 lg:grid-cols-6 lg:gap-x-10">
          {strengths.map((item, index) => (
            <li
              key={item.title}
              className={`border-t border-ivory/20 pt-5 lg:col-span-2 ${
                index === 3
                  ? "lg:col-start-2"
                  : index === 4
                    ? "lg:col-start-4"
                    : ""
              } ${index === 4 ? "sm:col-span-2 lg:col-span-2" : ""}`}
            >
              <Reveal delay={(index % 3) * 0.08}>
                <p className="font-serif text-3xl text-gold">0{index + 1}</p>
                <h3 className="!text-ivory mt-3 text-xl sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-ivory/75">{item.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
