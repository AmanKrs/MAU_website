/** Editorial section heading: eyebrow, serif title, optional intro and gold rule. */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  as: Tag = "h2",
  align = "left",
  className = "",
  eyebrowClassName = "",
  titleClassName = "",
}) {
  const alignment = align === "center" ? "text-center mx-auto items-center" : "";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow ? <p className={`eyebrow ${eyebrowClassName}`}>{eyebrow}</p> : null}
      <Tag className={`display-lg ${titleClassName}`}>{title}</Tag>
      <span className="rule-gold" aria-hidden="true" />
      {intro ? <p className="text-base text-espresso/75 sm:text-lg">{intro}</p> : null}
    </div>
  );
}
