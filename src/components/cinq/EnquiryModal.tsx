import { useEffect, useState, type FormEvent } from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EnquiryModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!open) return;

    const close = (e: KeyboardEvent) => e.key === "Escape" && onClose();

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", close);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", close);
    };
  }, [open, onClose]);

  if (!open) return null;

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (event.currentTarget.reportValidity()) {
      setSent(true);
    }
  };

  return (
    <div
      className="fixed inset-0 z-110 grid place-items-center bg-charcoal/80 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-title"
    >
      <div className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto bg-ivory p-7 text-charcoal shadow-2xl sm:p-12">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4"
          onClick={onClose}
          aria-label="Close enquiry"
        >
          <X />
        </Button>

        {sent ? (
          <div className="py-16 text-center">
            <Check className="mx-auto mb-6 size-10 text-primary" />

            <p className="eyebrow">Enquiry prepared</p>

            <h2 id="enquiry-title" className="display-title mt-4 text-5xl">
              Thank you
            </h2>

            <p className="mx-auto mt-5 max-w-md text-muted-foreground">
              Your details have been validated. Our team will get in touch with you to arrange your
              private presentation.
            </p>

            <Button size="lg" className="mt-8" onClick={onClose}>
              Close
            </Button>
          </div>
        ) : (
          <>
            <p className="eyebrow">CINQ by Raghava</p>

            <h2 id="enquiry-title" className="display-title mt-3 text-5xl">
              Book a Visit
            </h2>

            <p className="mt-4 text-sm text-muted-foreground">
              Share your preferences and our team will help arrange your private presentation at
              CINQ.
            </p>

            <form onSubmit={submit} className="mt-9 grid gap-5 sm:grid-cols-2">
              <label>
                Full Name
                <input required name="name" autoComplete="name" />
              </label>

              <label>
                Phone Number
                <input
                  required
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  pattern="[0-9+() -]{8,}"
                />
              </label>

              <label className="sm:col-span-2">
                Email
                <input required name="email" type="email" autoComplete="email" />
              </label>

              <label className="sm:col-span-2">
                Message
                <textarea name="message" rows={3} />
              </label>

              <Button variant="luxury" size="lg" className="sm:col-span-2" type="submit">
                Request a Private Visit
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
