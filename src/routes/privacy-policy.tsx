import { Link, createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Brigade Gateway Neopolis" },
      {
        name: "description",
        content:
          "Privacy policy for the Brigade Gateway Neopolis informational website managed by Mojo Realty.",
      },
      { property: "og:title", content: "Privacy Policy | Brigade Gateway Neopolis" },
      {
        property: "og:description",
        content:
          "Privacy policy for the Brigade Gateway Neopolis informational website managed by Mojo Realty.",
      },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" eyebrow="Brigade Gateway Neopolis">
      <p>
        Mojo Realty respects your privacy. Information shared through this website, including your
        name, phone number, email address and preferences, is used to respond to your enquiry and
        coordinate a project presentation.
      </p>
      <p>
        We do not sell your personal information. Your enquiry may be shared with the authorised
        sales team handling Brigade Gateway Neopolis so they can respond to your request.
      </p>
      <p>
        By submitting a form, you confirm that the details provided are accurate and that you
        consent to being contacted about this project. You may request that we stop contacting you
        at any time.
      </p>
      <p>
        This informational website may be updated as project information changes. Please contact the
        sales representative for the latest details.
      </p>
    </LegalPage>
  );
}

function LegalPage({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow: string;
  children: ReactNode;
}) {
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
        <p className="eyebrow text-primary">{eyebrow}</p>
        <h1 className="display-title mt-4 text-6xl sm:text-7xl">{title}</h1>
        <div className="legal-copy mt-10 space-y-6 text-sm leading-8 text-muted-foreground">
          {children}
        </div>
      </article>
    </main>
  );
}
