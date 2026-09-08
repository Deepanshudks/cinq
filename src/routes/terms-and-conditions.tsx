import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Brigade Gateway Neopolis" },
      {
        name: "description",
        content:
          "Terms and conditions for the Brigade Gateway Neopolis informational website managed by Mojo Realty.",
      },
      { property: "og:title", content: "Terms & Conditions | Brigade Gateway Neopolis" },
      {
        property: "og:description",
        content:
          "Terms and conditions for the Brigade Gateway Neopolis informational website managed by Mojo Realty.",
      },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-midnight px-5 py-6 text-ivory">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link to="/" className="brand-mark text-champagne">
            <span className="block text-[.55em] tracking-[.25em]">BRIGADE</span>
            <span className="block -mt-1 text-[.72em] tracking-[.02em]">Gateway</span>
          </Link>
          <Link
            to="/"
            className="text-xs uppercase tracking-[.16em] text-ivory/70 hover:text-champagne"
          >
            Back to website
          </Link>
        </div>
      </header>
      <article className="mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:py-28">
        <p className="eyebrow text-primary">Brigade Gateway Neopolis</p>
        <h1 className="display-title mt-4 text-6xl sm:text-7xl">Terms &amp; Conditions</h1>
        <div className="legal-copy mt-10 space-y-6 text-sm leading-8 text-muted-foreground">
          <p>
            This website is an informational website owned and managed by Mojo Realty, an authorised
            channel partner registered under RERA ID: A04500004727. It is not the official website
            of the developer.
          </p>
          <p>
            All project names, trademarks, images, floor plans and descriptions belong to their
            respective owners. Content is provided for general information and may be changed by the
            respective developer without prior notice.
          </p>
          <p>
            Pricing, availability, specifications, dimensions, approvals, timelines and other
            project details should be independently confirmed with the authorised sales
            representative before making any decision.
          </p>
          <p>
            Enquiries submitted through this website are handled solely by Mojo Realty for the
            purpose of responding to your request. Use of this website constitutes acceptance of
            these terms.
          </p>
        </div>
      </article>
    </main>
  );
}
