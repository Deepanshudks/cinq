import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | CINQ by Raghava" },
      {
        name: "description",
        content:
          "Privacy policy for the CINQ by Raghava informational website managed by Mojo Realty.",
      },
      {
        property: "og:title",
        content: "Privacy Policy | CINQ by Raghava",
      },
      {
        property: "og:description",
        content:
          "Privacy policy for the CINQ by Raghava informational website managed by Mojo Realty.",
      },
    ],
  }),
  component: PrivacyPolicy,
});

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-ivory text-ink">
      {/* Header */}
      <section className="border-b border-ink/10 bg-midnight px-6 py-8 text-ivory lg:px-10">
        <div className="mx-auto max-w-360">
          <p className="eyebrow mb-3 text-champagne">CINQ by Raghava</p>

          <h1 className="display-title text-4xl font-light leading-none sm:text-5xl">
            Privacy Policy
          </h1>

          <div className="mt-4 h-px w-16 bg-champagne/60" />

          <p className="mt-5 max-w-3xl text-sm leading-7 text-ivory/55 sm:text-base sm:leading-8">
            This Privacy Policy explains how information is collected, used and protected when you
            interact with this website.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-6 lg:px-10">
        <div className="mx-auto max-w-360">
          <div className="divide-y divide-ink/10">
            <Section title="Information We Collect">
              We may collect personal information such as name, phone number, email address and any
              details submitted through enquiry forms or communication channels.
            </Section>

            <Section title="How We Use Information">
              The information collected is used to respond to enquiries, provide project updates,
              improve user experience and share relevant communication related to the project.
            </Section>

            <Section title="Cookies & Analytics">
              This website may use cookies and third-party analytics tools to understand user
              behaviour, improve performance and enhance the browsing experience.
            </Section>

            <Section title="Data Protection">
              We take reasonable steps to safeguard your personal information and prevent
              unauthorized access, misuse or disclosure.
            </Section>

            <Section title="Third-Party Services">
              The website may integrate third-party tools such as CRM platforms, marketing services
              or analytics providers. These services operate under their own privacy policies.
            </Section>

            <Section title="User Consent">
              By submitting your information on this website, you consent to the collection and use
              of data in accordance with this policy.
            </Section>

            <Section title="Policy Updates">
              This Privacy Policy may be updated from time to time without prior notice. Users are
              encouraged to review this page periodically.
            </Section>

            <Section title="Contact">
              For privacy related queries, please contact the official sales team through the
              contact details provided on this website.
            </Section>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-ink/10 px-6 py-6 lg:px-10">
        <div className="mx-auto flex max-w-360 flex-col gap-2 text-[9px] uppercase tracking-[.14em] text-ink/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Mojo Realty. All Rights Reserved.</span>
          <span>CINQ by Raghava · Financial District, Hyderabad</span>
        </div>
      </footer>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="py-7 sm:py-8">
      <div className="grid gap-3 sm:grid-cols-[220px_minmax(0,1fr)] sm:gap-12 lg:grid-cols-[260px_minmax(0,1fr)]">
        <h2 className="display-title text-2xl font-light leading-tight text-midnight sm:text-3xl">
          {title}
        </h2>

        <p className="max-w-3xl text-sm leading-7 text-ink-soft sm:text-base sm:leading-8">
          {children}
        </p>
      </div>
    </section>
  );
}
