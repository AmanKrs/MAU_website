import Link from "next/link";

const base =
  "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[0.78rem] font-medium uppercase tracking-[0.18em] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2";

const variants = {
  primary:
    "bg-espresso text-ivory hover:bg-gold-dark border border-espresso hover:border-gold-dark",
  gold: "bg-gold text-espresso hover:bg-espresso hover:text-ivory border border-gold hover:border-espresso",
  outline:
    "border border-espresso text-espresso hover:bg-espresso hover:text-ivory",
  outlineLight:
    "border border-ivory/70 text-ivory hover:bg-ivory hover:text-espresso",
  link: "px-0 py-1 border-b border-gold text-espresso hover:text-gold-dark tracking-[0.16em]",
};

/**
 * Link-styled button. Internal hrefs use next/link; pass `external`
 * for WhatsApp and other outside links (opens in a new tab safely).
 */
export default function Button({
  href,
  external = false,
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
