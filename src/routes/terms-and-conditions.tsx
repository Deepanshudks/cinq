import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | CINQ by Raghava" },
      {
        name: "description",
        content:
          "Terms and conditions for the CINQ by Raghava informational website managed by Mojo Realty.",
      },
      {
        property: "og:title",
        content: "Terms & Conditions | CINQ by Raghava",
      },
      {
        property: "og:description",
        content:
          "Terms and conditions for the CINQ by Raghava informational website managed by Mojo Realty.",
      },
    ],
  }),
  component: TermsAndConditions,
});

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-ivory text-ink">
      <section className="border-b border-ink/10 bg-midnight px-6 py-8 text-ivory lg:px-10">
        <div className="mx-auto max-w-360">
          <p className="eyebrow mb-3 text-champagne">CINQ by Raghava</p>

          <h1 className="display-title text-4xl font-light leading-none sm:text-5xl">
            Terms &amp; Conditions
          </h1>

          <div className="mt-4 h-px w-16 bg-champagne/60" />

          <p className="mt-5 max-w-3xl text-sm leading-7 text-ivory/55 sm:text-base sm:leading-8">
            By accessing or using this website, you agree to the following terms and conditions
            governing usage, content and information provided on this landing page.
          </p>
        </div>
      </section>

      <section className="px-6 py-6 lg:px-10">
        <div className="mx-auto max-w-360">
          <div className="divide-y divide-ink/10">
            <Section title="Intellectual Property">
              All content including text, images, graphics, logos and materials are owned by the
              developer or licensors and protected under intellectual property laws. Unauthorized
              copying, distribution or modification is prohibited.
            </Section>

            <Section title="Property Information">
              Project specifications, pricing, availability and timelines are subject to change
              without prior notice. Information displayed on this website is indicative and should
              be verified with the official sales team.
            </Section>

            <Section title="User Responsibilities">
              Users must provide accurate information when submitting enquiries and must not engage
              in unlawful activities including hacking, spamming or misuse of the website.
            </Section>

            <Section title="Privacy & Data Usage">
              Personal information submitted through the website may be used for communication,
              marketing updates and service improvement in accordance with the Privacy Policy.
            </Section>

            <Section title="Disclaimer of Liability">
              The company shall not be liable for any direct or indirect losses, damages or reliance
              on information provided on this website.
            </Section>

            <Section title="Third-Party Links">
              The website may contain links to external platforms. We do not control or assume
              responsibility for third-party content or practices.
            </Section>

            <Section title="Modifications to Terms">
              These terms may be revised at any time without prior notice. Continued use of the
              website constitutes acceptance of updates.
            </Section>

            <Section title="Governing Law & Jurisdiction">
              Any disputes arising from use of this website shall be governed by applicable
              jurisdiction laws and resolved in the relevant courts.
            </Section>
          </div>
        </div>
      </section>

      <footer className="border-t border-ink/10 px-6 py-6 lg:px-10">
        <div className="mx-auto flex max-w-360 flex-col gap-2 text-[9px] uppercase tracking-[.14em] text-ink/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Mojo Realty. All Rights Reserved.</span>
          <span>CINQ by Raghava · Financial District · Hyderabad</span>
        </div>
      </footer>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="py-7 sm:py-8">
      <div className="grid gap-3 sm:grid-cols-[220px_minmax(0,1fr)] sm:gap-12 lg:grid-cols-[260px_minmax(0,1fr)]">
        <h2 className="display-type text-2xl font-light leading-tight text-midnight sm:text-3xl">
          {title}
        </h2>

        <p className="max-w-3xl text-sm leading-7 text-ink-soft sm:text-base sm:leading-8">
          {children}
        </p>
      </div>
    </section>
  );
}
