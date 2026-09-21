import { useEffect, useRef, useState } from "react";
import { ArrowRight, CalendarDays, Check, Mail, MessageSquare, Phone, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";

export function EnquiryModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const navigate = useNavigate();

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const dateInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
  });

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setSubmitted(false);
      setLoading(false);
    }
  }, [open]);

  if (!open) return null;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (loading) return;

    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    try {
      setLoading(true);

      const sheetPromise = fetch(import.meta.env.VITE_GOOGLE_SHEET_URL, {
        method: "POST",
        body: new URLSearchParams({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          preferredDate: formData.preferredDate,
        }),
        mode: "no-cors",
      })
        .then(() => true)
        .catch((error) => {
          console.error("Google Sheet submission failed:", error);
          return false;
        });

      const apiPromise = fetch(import.meta.env.VITE_EMAIL_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then(async (response) => {
          if (!response.ok) {
            console.error("Email API failed:", response.status);
            return false;
          }

          return true;
        })
        .catch((error) => {
          console.error("Email API submission failed:", error);
          return false;
        });

      const [sheetSuccess, emailSuccess] = await Promise.all([sheetPromise, apiPromise]);

      console.log({
        sheetSuccess,
        emailSuccess,
      });

      if (sheetSuccess || emailSuccess) {
        setSubmitted(true);

        await navigate({
          to: "/thank-you",
        });

        window.setTimeout(() => {
          onClose();
        }, 2000);

        return;
      }

      toast.error("Unable to submit your enquiry. Please try again.");
    } catch (error) {
      console.error("CINQ enquiry submission failed:", error);

      toast.error("Unable to submit your enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        fixed inset-0 z-110
        flex items-center justify-center
        bg-deep-burgundy/90
        p-4
        sm:p-6
      "
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="
          relative
          w-full
          max-w-2xl
          max-h-[96vh]
          
          overflow-hidden
          border
          border-champagne/20
          bg-deep-burgundy
          text-ivory
          shadow-[0_25px_70px_rgba(0,0,0,0.5)]
        "
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div
          className="
            absolute
            left-0
            right-0
            top-0
            z-50
            h-px
            bg-linear-to-r
            from-transparent
            via-champagne
            to-transparent
          "
        />

        <button
          type="button"
          onClick={onClose}
          aria-label="Close enquiry"
          className="
            group
            absolute
            right-5
            top-5
            z-50
            flex
            size-10
            items-center
            justify-center
            rounded-full
            border
            border-champagne/15
            bg-deep-burgundy/80
            text-ivory/50
            transition-colors
            duration-300
            hover:border-champagne/50
            hover:bg-wine
            hover:text-champagne
          "
        >
          <X
            className="
              size-4
              transition-transform
              duration-200
              group-hover:rotate-90
            "
          />
        </button>

        <div
          className="
            grid
            max-h-[94vh]
            overflow-y-auto
            overflow-x-hidden
          "
        >
          <section
            className="
              relative
              bg-burgundy/60
              px-7
              py-10
              
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                right-0
                top-0
                h-72
                w-72
                rounded-full
                bg-champagne/2.5
              "
            />

            {submitted ? (
              <div
                className="
                  relative
                  z-10
                  flex
                  min-h-140
                  flex-col
                  items-center
                  justify-center
                  text-center
                "
              >
                <div
                  className="
                    relative
                    flex
                    size-24
                    items-center
                    justify-center
                  "
                >
                  <div
                    className="
                      absolute
                      inset-0
                      rounded-full
                      border
                      border-champagne/25
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-3
                      rounded-full
                      border
                      border-warm-gold/20
                    "
                  />

                  <Check className="size-7 text-champagne" />
                </div>

                <p className="eyebrow mt-9 text-champagne/70">Enquiry received</p>

                <h2 className="display-title mt-4 text-5xl text-ivory sm:text-6xl">Thank you.</h2>

                <p
                  className="
                    mx-auto
                    mt-5
                    max-w-sm
                    text-[12px]
                    leading-7
                    text-ivory/45
                  "
                >
                  Your details have been received. Our private client team will be in touch shortly
                  to arrange your presentation.
                </p>

                <div
                  className="
                    mt-9
                    h-px
                    w-12
                    bg-champagne/50
                  "
                />

                <Button variant="luxury" size="lg" className="mt-9 min-w-36" onClick={onClose}>
                  Close
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="
                  relative
                  z-10
                  grid
                  gap-2
                "
              >
                <div className="pr-10">
                  <p
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.3em]
                      text-champagne/70
                    "
                  >
                    Begin your conversation
                  </p>

                  <h3
                    id="enquiry-title"
                    className="
                      display-title
                      mt-5
                      text-[2.8rem]
                      font-light
                      leading-[0.9]
                      tracking-tight
                      text-ivory
                      sm:text-[3.2rem]
                    "
                  >
                    Request a private
                    <br />
                    <em className="font-normal text-champagne">presentation.</em>
                  </h3>

                  <p
                    className="
                      mt-6
                      max-w-md
                      text-[11px]
                      leading-6
                      text-ivory/40
                    "
                  >
                    Tell us a little about yourself and our team will curate your CINQ experience.
                  </p>
                </div>

                <div className="mt-2 grid gap-2">
                  <div className="grid gap-7 sm:grid-cols-2">
                    <label className="group">
                      <span
                        className="
                          text-[8px]
                          font-semibold
                          uppercase
                          tracking-[0.22em]
                          text-warm-gold/60
                          transition-colors
                          group-focus-within:text-champagne
                        "
                      >
                        Full Name
                      </span>

                      <div className="relative mt-3">
                        <User
                          className="
                            absolute
                            left-0
                            top-1/2
                            size-3.5
                            -translate-y-1/2
                            text-warm-gold/45
                            transition-colors
                            group-focus-within:text-champagne
                          "
                        />

                        <input
                          required
                          name="name"
                          type="text"
                          autoComplete="name"
                          value={formData.name}
                          onChange={(event) =>
                            setFormData((current) => ({
                              ...current,
                              name: event.target.value,
                            }))
                          }
                          placeholder="Your full name"
                          className="
                            w-full
                            border-0
                            border-b
                            border-champagne/15
                            bg-transparent
                            py-3
                            pl-7
                            pr-2
                            text-[13px]
                            text-ivory
                            outline-none
                            transition-colors
                            duration-200
                            placeholder:text-ivory/25
                            focus:border-champagne
                          "
                        />
                      </div>
                    </label>

                    <label className="group">
                      <span
                        className="
                          text-[8px]
                          font-semibold
                          uppercase
                          tracking-[0.22em]
                          text-warm-gold/60
                          transition-colors
                          group-focus-within:text-champagne
                        "
                      >
                        Phone Number
                      </span>

                      <div className="relative mt-3">
                        <Phone
                          className="
                            absolute
                            left-0
                            top-1/2
                            size-3.5
                            -translate-y-1/2
                            text-warm-gold/45
                            transition-colors
                            group-focus-within:text-champagne
                          "
                        />

                        <input
                          required
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          pattern="[0-9+() -]{8,}"
                          value={formData.phone}
                          onChange={(event) =>
                            setFormData((current) => ({
                              ...current,
                              phone: event.target.value,
                            }))
                          }
                          placeholder="Your phone number"
                          className="
                            w-full
                            border-0
                            border-b
                            border-champagne/15
                            bg-transparent
                            py-3
                            pl-7
                            pr-2
                            text-[13px]
                            text-ivory
                            outline-none
                            transition-colors
                            duration-200
                            placeholder:text-ivory/25
                            focus:border-champagne
                          "
                        />
                      </div>
                    </label>
                  </div>

                  <label className="group">
                    <span
                      className="
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.22em]
                        text-warm-gold/60
                        transition-colors
                        group-focus-within:text-champagne
                      "
                    >
                      Email Address
                    </span>

                    <div className="relative mt-3">
                      <Mail
                        className="
                          absolute
                          left-0
                          top-1/2
                          size-3.5
                          -translate-y-1/2
                          text-warm-gold/45
                          transition-colors
                          group-focus-within:text-champagne
                        "
                      />

                      <input
                        required
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={(event) =>
                          setFormData((current) => ({
                            ...current,
                            email: event.target.value,
                          }))
                        }
                        placeholder="Your email address"
                        className="
                          w-full
                          border-0
                          border-b
                          border-champagne/15
                          bg-transparent
                          py-3
                          pl-7
                          pr-2
                          text-[13px]
                          text-ivory
                          outline-none
                          transition-colors
                          duration-200
                          placeholder:text-ivory/25
                          focus:border-champagne
                        "
                      />
                    </div>
                  </label>

                  <label className="group">
                    <span className=" text-[8px] font-semibold uppercase tracking-[0.22em] text-warm-gold/60 transition-colors group-focus-within:text-champagne">
                      Preferred Date for Visit
                    </span>

                    <div className="relative mt-3">
                      <button
                        type="button"
                        aria-label="Select preferred visit date"
                        onClick={() => dateInputRef.current?.showPicker()}
                        className=" absolute left-0 top-1/2 z-10 -translate-y-1/2 text-warm-gold/45 transition-colors hover:text-champagne group-focus-within:text-champagne"
                      >
                        <CalendarDays className="size-3.5" />
                      </button>

                      <input
                        ref={dateInputRef}
                        required
                        name="preferredDate"
                        type="date"
                        min={new Date().toISOString().split("T")[0]}
                        value={formData.preferredDate}
                        onChange={(event) =>
                          setFormData((current) => ({
                            ...current,
                            preferredDate: event.target.value,
                          }))
                        }
                        className=" w-full border-0 border-b border-champagne/15 bg-transparent py-3 pl-7 pr-2 text-[13px]  text-ivory outline-none transition-colors duration-200 focus:border-champagne scheme-dark [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none [&::-webkit-datetime-edit]:text-ivory/40 [&::-webkit-datetime-edit-fields-wrapper]:text-ivory/40"
                      />
                    </div>
                  </label>
                </div>

                <Button
                  variant="luxury"
                  size="lg"
                  className="
                    group
                    relative
                    mx-auto
                    py-4
                    px-4!
                    h-14
                    w-[98%]
                    overflow-hidden
                    border
                    border-champagne
                    cinq-premium-btn
                    bg-champagne
                    text-burgundy
                    transition-colors
                    duration-200
                    hover:bg-burgundy
                    hover:text-champagne
                  "
                  type="submit"
                  disabled={loading}
                >
                  <span
                    className="
                      relative
                      z-10
                      flex
                      items-center
                      justify-center
                      
                      gap-4
                    "
                  >
                    {loading ? "Sending..." : "Request a Private Visit"}

                    {!loading && (
                      <ArrowRight
                        className="
                          size-4
                          transition-transform
                          duration-200
                          group-hover:translate-x-1
                        "
                      />
                    )}
                  </span>
                </Button>

                <p
                  className="
                    -mt-2
                    text-center
                    text-[8px]
                    leading-5
                    text-ivory/25
                  "
                >
                  By submitting this form, you agree to be contacted regarding CINQ by Raghava.
                </p>
              </form>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
