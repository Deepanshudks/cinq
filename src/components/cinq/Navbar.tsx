import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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

  const go = (label: string) => {
    document
      .getElementById(label.toLowerCase().replace(" ", "-"))
      ?.scrollIntoView({ behavior: "smooth" });

    setOpen(false);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-burgundy/95 shadow-lg backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-360 items-center justify-between px-5 lg:px-10">
          <button
            onClick={() => go("Overview")}
            className="brand-mark text-champagne"
            aria-label="CINQ home"
          >
            <span className="block text-[.9em] tracking-[.28em]">CINQ</span>
            <span className="block -mt-1 text-[.48em] tracking-[.22em]">RAGHAVA</span>
          </button>

          <nav className="hidden items-center gap-6 xl:flex" aria-label="Main navigation">
            {navigation.map((item) => (
              <button key={item} onClick={() => go(item)} className="nav-link">
                {item}
              </button>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button variant="luxuryOutline" onClick={onEnquire}>
              Book a Visit
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="text-champagne lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="size-6" />
          </Button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-80 flex bg-burgundy transition-transform duration-500 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-5 top-5 text-champagne"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          <X />
        </Button>

        <nav className="m-auto flex flex-col items-center gap-5" aria-label="Mobile navigation">
          <p className="brand-mark text-4xl text-champagne">
            <span className="block tracking-[.28em]">CINQ</span>
            <span className="block -mt-1 text-[.48em] tracking-[.22em]">RAGHAVA</span>
          </p>

          {navigation.map((item) => (
            <button
              key={item}
              onClick={() => go(item)}
              className="font-display text-3xl text-ivory"
            >
              {item}
            </button>
          ))}

          <Button
            variant="luxury"
            size="lg"
            className="mt-5"
            onClick={() => {
              setOpen(false);
              onEnquire();
            }}
          >
            Book a Visit
          </Button>
        </nav>
      </div>
    </>
  );
}
