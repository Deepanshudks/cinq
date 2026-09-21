import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";

export const Route = createFileRoute("/thank-you")({
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-deep-burgundy px-6 text-ivory">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-champagne/3 blur-3xl" />

        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-champagne/40 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-champagne/20 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-3xl text-center">
        <div className="mx-auto flex size-20 items-center justify-center rounded-full border border-champagne/25">
          <div className="flex size-14 items-center justify-center rounded-full border border-champagne/15 bg-champagne/5">
            <Check className="size-6 text-champagne" strokeWidth={1.5} />
          </div>
        </div>

        <p className="eyebrow mt-9 text-champagne/70">Enquiry Received</p>

        <h1 className="display-type mt-5 text-6xl font-light tracking-tight text-ivory sm:text-8xl lg:text-9xl">
          Thank <em className="font-normal text-champagne">you.</em>
        </h1>

        <div className="mx-auto mt-8 h-px w-16 bg-champagne/50" />

        <p className="mx-auto mt-8 max-w-lg text-[13px] leading-7 text-ivory/45 sm:text-sm">
          Your enquiry has been received. Our private client team will be in touch shortly to
          arrange your presentation and preferred visit to CINQ by Raghava.
        </p>

        <Link
          to="/"
          className="
            group
            mx-auto
            mt-10
            inline-flex
            h-14
            items-center
            justify-center
            gap-3
            border
            border-champagne
            bg-champagne
            px-8
            text-[10px]
            uppercase
            tracking-[0.25em]
            text-deep-burgundy
            transition-all
            duration-300
            hover:bg-transparent
            hover:text-champagne
          "
        >
          <ArrowLeft
            className="
              size-3.5
              transition-transform
              duration-300
              group-hover:-translate-x-1
            "
          />
          Back to CINQ
        </Link>

        <div className="mt-16">
          <p className="text-[9px] uppercase tracking-[0.4em] text-champagne/40">CINQ</p>

          <p className="mt-2 text-[8px] uppercase tracking-[0.3em] text-ivory/20">By Raghava</p>
        </div>
      </div>
    </main>
  );
}
