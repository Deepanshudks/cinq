import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navigation } from "@/data/projectData";

export function Navbar({ onEnquire }: { onEnquire: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40);

    update();

    window.addEventListener("scroll", update, { passive: true });

    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  const go = (label: string) => {
    const id = label.toLowerCase().replace(/\s+/g, "-");

    setOpen(false);

    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  const handleEnquire = () => {
    setOpen(false);
    onEnquire();
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
          scrolled ? "bg-burgundy/95 shadow-lg backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-360 items-center justify-between px-5 sm:px-8 lg:px-10">
          <button
            onClick={() => go("Overview")}
            className="brand-mark text-champagne text-left"
            aria-label="CINQ home"
          >
            <span className="block text-[0.9em] font-medium tracking-[0.28em]">CINQ</span>

            <span className="-mt-1 block text-[0.48em] font-medium tracking-[0.22em]">RAGHAVA</span>

            <span className="mt-2 block border-t border-champagne/30 pt-1.5 font-sans text-[0.24em] font-medium uppercase tracking-[0.16em] text-ivory/70">
              Authorized Sales Partner
            </span>
          </button>

          <nav className="hidden items-center gap-6 xl:flex" aria-label="Main navigation">
            {navigation.map((item) => (
              <button key={item} onClick={() => go(item)} className="nav-link">
                {item}
              </button>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button variant="luxury" onClick={onEnquire} className="cinq-premium-btn group ">
              <span className="flex items-center justify-center gap-2.5">
                Book a Visit
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="text-champagne hover:bg-transparent hover:text-champagne lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu className="size-6" />
          </Button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-80 lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-deep-burgundy transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          className={`relative flex min-h-dvh w-full flex-col transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-20 items-center justify-between px-5 sm:px-8">
            <button
              onClick={() => go("Overview")}
              className="brand-mark text-champagne"
              aria-label="CINQ home"
            >
              <span className="block text-[.9em] tracking-[.28em]">CINQ</span>

              <span className="-mt-1 block text-[.48em] tracking-[.22em]">RAGHAVA</span>
            </button>

            <Button
              variant="ghost"
              size="icon"
              className="text-champagne hover:bg-transparent hover:text-champagne"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X className="size-6" />
            </Button>
          </div>

          <nav
            className="flex flex-1 flex-col items-center justify-center px-6"
            aria-label="Mobile navigation"
          >
            <p className="eyebrow mb-8 text-champagne/60">CINQ by Raghava</p>

            <div className="flex flex-col items-center gap-5">
              {navigation.map((item, index) => (
                <button
                  key={item}
                  onClick={() => go(item)}
                  className={`
                    font-display
                    text-3xl
                    leading-none
                    text-ivory
                    transition-all
                    duration-300
                    hover:text-champagne
                    sm:text-4xl
                    ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
                  `}
                  style={{
                    transitionDelay: open ? `${index * 45 + 100}ms` : "0ms",
                  }}
                >
                  {item}
                </button>
              ))}
            </div>

            <Button
              variant="luxury"
              size="lg"
              className={`
                mt-10
                min-w-48
                transition-all
                duration-300
                ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
              `}
              style={{
                transitionDelay: open ? `${navigation.length * 45 + 150}ms` : "0ms",
              }}
              onClick={handleEnquire}
            >
              Book a Visit
            </Button>
          </nav>

          <div className="px-5 pb-8 text-center sm:px-8">
            <div className="mx-auto mb-5 h-px w-10 bg-champagne/30" />

            <p className="text-[8px] font-semibold uppercase tracking-[.22em] text-ivory/40">
              Financial District · Hyderabad
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
