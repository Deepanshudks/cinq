import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/thank-you")({
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-night px-6 text-ivory">
      <div className="w-full max-w-2xl text-center">
        <p className="eyebrow text-champagne">Enquiry Received</p>

        <h1 className="display-type mt-6 text-7xl font-light sm:text-9xl">
          Thank <em className="text-champagne">you.</em>
        </h1>

        <div className="mx-auto mt-8 h-px w-16 bg-champagne/50" />

        <p className="mx-auto mt-8 max-w-md text-sm leading-7 text-ivory/50">
          Your enquiry has been received. Our team will be in touch shortly to assist you with your
          private presentation and visit.
        </p>

        <Link
          to="/"
          className="mt-10 inline-flex bg-champagne px-7 py-4 text-xs uppercase tracking-[0.2em] text-night transition hover:bg-ivory"
        >
          Back to CINQ
        </Link>
      </div>
    </main>
  );
}
