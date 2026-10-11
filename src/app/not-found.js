import Button from "@/components/ui/Button";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-5 py-28 text-center sm:px-8">
      <p className="eyebrow">404</p>
      <h1 className="display-lg mt-5">This page could not be found.</h1>
      <span className="rule-gold mt-7 block" aria-hidden="true" />
      <p className="mt-7 text-espresso/75">
        The page may have moved. Head back home or browse the services.
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Button href="/">Back to home</Button>
        <Button href="/services" variant="outline">
          View services
        </Button>
      </div>
    </section>
  );
}
