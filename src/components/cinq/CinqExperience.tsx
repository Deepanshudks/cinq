import { useEffect, useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowRight, Check, Expand, MapPin, Play } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { images } from "@/assets/cinq";
import {
  amenities,
  highlights,
  locationHighlights,
  navigation,
  plans,
  stats,
} from "@/data/projectData";
import { MediaViewer } from "./MediaViewer";
import { Navbar } from "./Navbar";
import { SectionHeading } from "./SectionHeading";
import { EnquiryModal } from "./EnquiryModal";
import FloatingWhatsapp from "../FloatingWhatsapp";

type Viewer = { src: string; alt: string } | null;
const reveal = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7 },
};

export function CinqExperience() {
  const reduce = useReducedMotion();
  const [enquire, setEnquire] = useState(false);
  const [viewer, setViewer] = useState<Viewer>(null);
  const [plan, setPlan] = useState(0);
  const [sent, setSent] = useState(false);

  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (event.currentTarget.reportValidity()) setSent(true);
  };

  const AUTO_MODAL_KEY = "cinqEnquiryAutoClosed";

  useEffect(() => {
    const dismissed = sessionStorage.getItem(AUTO_MODAL_KEY);

    if (dismissed) return;

    const timer = window.setTimeout(() => {
      setEnquire(true);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, []);

  const openEnquiry = () => {
    setEnquire(true);
  };

  const closeEnquiry = () => {
    setEnquire(false);
    sessionStorage.setItem(AUTO_MODAL_KEY, "true");
  };

  return (
    <main className="overflow-clip bg-background">
      <Navbar onEnquire={openEnquiry} />
      <section id="overview" className="relative min-h-svh overflow-hidden bg-midnight">
        <motion.img
          src={images.cinqHero}
          alt="CINQ by Raghava residential towers"
          fetchPriority="high"
          initial={{
            scale: reduce ? 1 : 1.08,
            x: 0,
            y: 0,
          }}
          animate={{
            scale: reduce ? 1 : 1.25,
            x: reduce ? 0 : 8,
            y: reduce ? 0 : -4,
          }}
          transition={{
            duration: 18,
            ease: "easeInOut",
            repeat: reduce ? 0 : Infinity,
            repeatType: "mirror",
          }}
          className=" absolute inset-0 h-full w-full object-cover object-[78%_center] sm:object-[76%_center] lg:object-[center_center] will-change-transform"
        />
        <div className=" absolute inset-0 bg-linear-to-b  from-[#071321]/20  via-[#071321]/10  to-[#071321]/65 sm:bg-linear-to-r  sm:from-[#071321]/65  sm:via-[#071321]/25 sm:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-[#071321]/70 to-transparent sm:hidden" />
        <div className="relative z-10 mx-auto flex min-h-svh max-w-360 items-end px-5 pb-20 pt-32 sm:px-8 lg:px-10 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="max-w-3xl text-ivory"
          >
            <p className="eyebrow text-champagne">CINQ by Raghava</p>

            <h1 className="display-title mt-4 max-w-3xl text-6xl sm:text-8xl lg:text-[8.5rem]">
              Crafted for
              <br />
              <em>fine living.</em>
            </h1>

            <p className="mt-7 max-w-xl text-sm uppercase tracking-[.2em] text-ivory/80">
              Luxury 4 BHK Residences in Financial District, Hyderabad
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-champagne">
              <span>61 Floors</span>
              <span>7.19 Acres</span>
              <span>5 Majestic Towers</span>
              <span>4 Apartments Per Floor</span>
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button className="cinq-premium-btn" variant="luxury" size="lg" onClick={openEnquiry}>
                Enquire Now <ArrowRight />
              </Button>
              <Button
                variant="luxuryOutline"
                size="lg"
                onClick={() =>
                  document.getElementById("highlights")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore <ArrowDown />
              </Button>
            </div>
          </motion.div>
        </div>
        <button
          className="absolute bottom-7 right-7 z-20 hidden items-center gap-3 text-[10px] uppercase tracking-[.22em] text-ivory/80 md:flex"
          onClick={() =>
            document.getElementById("highlights")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Scroll <ArrowDown className="size-4" />
        </button>
      </section>

      <section className="bg-burgundy text-ivory">
        <div className="mx-auto grid max-w-360 grid-cols-2 px-5 py-14 sm:px-8 lg:grid-cols-4 lg:px-10 lg:py-20">
          {stats.map((item, i) => (
            <motion.div
              {...reveal}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              key={item.label}
              className="border-champagne/30 p-5 odd:border-l lg:border-l lg:first:border-l-0"
            >
              <p className="font-display text-5xl text-champagne sm:text-7xl">{item.value}</p>
              <p className="mt-3 max-w-32 text-[10px] uppercase leading-5 tracking-[.2em]">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="highlights" className="bg-ivory py-24">
        <div className="mx-auto max-w-360  px-5 sm:px-8 lg:px-10">
          <div className="grid items-center  gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <SectionHeading
              eyebrow="Welcome to CINQ"
              title="7.19 acres of fine living."
              copy="CINQ by Raghava brings together five majestic towers, expansive residences and thoughtfully curated amenities in the heart of Hyderabad's Financial District."
            />
            <motion.img
              {...reveal}
              src={images.cinqAerial}
              alt="Aerial view of CINQ by Raghava residential towers"
              className="aspect-4/3 w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="mt-20 grid gap-px bg-copper/30 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map(([title, copy], i) => (
              <motion.article
                {...reveal}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                key={title}
                className="bg-ivory p-8 lg:p-10"
              >
                <h3 className="mt-8 font-display text-3xl text-foreground">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{copy}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="amenities" className="bg-midnight py-24 text-ivory ">
        <div className="mx-auto max-w-360 px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="World-Class Facilities"
            title="An Ensemble of Niceties"
            copy="Every detail is conceived to make everyday life feel elevated, effortless and complete."
            light
          />
          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {amenities.map(([title, copy], i) => (
              <motion.article
                {...reveal}
                transition={{ duration: 0.6, delay: i * 0.01 }}
                key={title}
                className="group border border-ivory/15 bg-midnight/60 p-7 transition-colors hover:border-champagne/70 hover:bg-burgundy"
              >
                <span className="eyebrow text-champagne">0{i + 1}</span>
                <h3 className="mt-16 font-display text-3xl">{title}</h3>
                <p className="mt-3 text-sm text-ivory/60">{copy}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="plans" className="bg-warm-white py-24">
        <div className="mx-auto max-w-360 px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="CINQ Floor Plans"
            title="Designed with Intention. Defined by Elegance."
            copy="Explore the collection of residences and request the latest layout for your preferred configuration."
          />
          <div className="mt-12 flex gap-2 overflow-x-auto border-b border-border pb-4">
            {plans.map((item, i) => (
              <button
                key={item.name}
                onClick={() => setPlan(i)}
                className={`min-h-11 shrink-0 px-5 text-xs uppercase tracking-[.12em] ${plan === i ? "bg-primary text-primary-foreground" : "border border-border text-foreground"}`}
              >
                {item.name}
              </button>
            ))}
          </div>
          <motion.div
            key={plans[plan]?.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_.95fr]"
          >
            <div className="relative overflow-hidden bg-midnight">
              <img
                src={plans[plan]?.image ?? images.cinqAerial}
                alt="CINQ by Raghava residential architecture"
                className="aspect-4/3 h-full w-full scale-105 object-cover blur-[3px] opacity-70"
              />

              <div className="absolute inset-0 bg-midnight/45" />

              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <p className="eyebrow text-champagne">{plans[plan]?.detail}</p>

                <p className="mt-3 font-display text-2xl sm:text-4xl text-ivory">
                  {plans[plan]?.title}
                </p>

                <Button
                  variant="luxury"
                  size="lg"
                  className="mt-8 cinq-premium-btn"
                  onClick={openEnquiry}
                >
                  Request Layout <ArrowRight />
                </Button>
              </div>
            </div>
            <div className="border border-border bg-card p-8 sm:p-10">
              <p className="eyebrow text-primary">Starting From</p>
              <p className="mt-3 font-display text-4xl text-foreground">{plans[plan]?.price}</p>
              <p className="mt-3 text-sm text-muted-foreground">{plans[plan]?.area}</p>
              <ul className="mt-8 grid gap-3 border-t border-border pt-7 text-sm text-muted-foreground">
                {plans[plan]?.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="size-4 text-copper" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant="luxury"
                size="lg"
                className="mt-9 cinq-premium-btn w-full"
                onClick={openEnquiry}
              >
                Request Layout <ArrowRight />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="gallery" className="bg-burgundy py-24 text-ivory ">
        <div className="mx-auto max-w-360 px-5 sm:px-8 lg:px-10">
          <SectionHeading eyebrow="Visual Tour" title="Grandeur in Every Element" light />
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            <div className="group relative overflow-hidden">
              <video
                className="aspect-video h-full w-full object-cover"
                src={images.cinqTour1}
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute left-5 top-5 flex items-center gap-2 text-[10px] uppercase tracking-[.18em] text-champagne">
                <Play className="size-3 fill-current" /> Cinematic tour
              </div>
            </div>
            <div className="group relative overflow-hidden">
              <video
                className="aspect-video h-full w-full object-cover"
                src={images.cinqTour2}
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute left-5 top-5 flex items-center gap-2 text-[10px] uppercase tracking-[.18em] text-champagne">
                <Play className="size-3 fill-current" /> Project detail
              </div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[images.cinqTower, images.cinqAerial, images.architecture, images.sky2].map(
              (src, i) => (
                <button
                  key={src}
                  onClick={() => setViewer({ src, alt: `cinq Gateway visual ${i + 1}` })}
                  className="group relative overflow-hidden"
                >
                  <img
                    src={src}
                    alt={`CINQ by Raghava visual ${i + 1}`}
                    className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <Expand className="absolute bottom-4 right-4 size-4 text-champagne" />
                </button>
              ),
            )}
          </div>
        </div>
      </section>

      <section id="location" className="bg-ivory py-24 ">
        <div className="mx-auto max-w-360 px-5 sm:px-8 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">
            <SectionHeading
              eyebrow="Financial District, Hyderabad"
              title="Coveted Location"
              copy="An exceptional address surrounded by Hyderabad's leading business districts, global technology companies, premium hospitality and everyday conveniences."
            />

            <div className="group relative overflow-hidden bg-midnight">
              <img
                src={images.location}
                alt="Location map around CINQ by Raghava"
                loading="lazy"
                className=" aspect-video w-full scale-105 object-cover blur-[1px] sm:blur-[2px] opacity-50 transition-transform duration-1000 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to-br from-[#071B35]/20 via-transparent to-[#020914]/70" />

              <div className="absolute sm:right-6 right-2 top-2 sm:top-6 flex size-8 sm:size-11 items-center justify-center border border-champagne/30 bg-[#071B35]/50 backdrop-blur-md">
                <MapPin className="size-5 text-champagne" />
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  variant="luxury"
                  size="lg"
                  onClick={openEnquiry}
                  className=" min-w-48 cinq-premium-btn shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-0.5"
                >
                  Request Location <ArrowRight />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-16 grid gap-px bg-copper/30 sm:grid-cols-2 lg:grid-cols-3">
            {locationHighlights.map(([place, time]) => (
              <div key={place} className="flex items-center justify-between bg-ivory p-6">
                <span className="text-sm text-foreground">{place}</span>
                <span className="text-xs uppercase tracking-[.14em] text-copper">{time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-midnight py-24 text-ivory ">
        <div className="mx-auto grid max-w-360 gap-12 px-5 sm:px-8 lg:grid-cols-[.75fr_1.25fr] lg:px-10">
          <SectionHeading eyebrow="About Raghava" title="Crafting Fine Living" light />
          <div className="space-y-6 text-sm leading-8 text-ivory/70">
            <p>
              Raghava is committed to creating landmark developments that bring together thoughtful
              design, engineering excellence and elevated everyday living.
            </p>

            <p>
              CINQ represents this vision through a carefully planned residential destination
              featuring five majestic towers, 61 harmonic floors and a curated collection of
              lifestyle amenities.
            </p>

            <p>
              Every aspect of CINQ has been envisioned to offer residents a refined, comfortable and
              distinctive address in Hyderabad's Financial District.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-copper px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-360 gap-12 lg:grid-cols-[.8fr_1.2fr] lg:px-2">
          <div className="flex flex-col justify-center">
            <p className="eyebrow text-burgundy/75">Private Presentation</p>

            <h2 className="display-title mt-4 text-6xl text-burgundy sm:text-7xl">
              Make it yours.
            </h2>

            <div className="mt-6 h-px w-12 bg-burgundy/40" />

            <p className="mt-6 max-w-md text-sm leading-7 text-burgundy/70">
              Leave your details and our team will help you discover CINQ by Raghava and arrange a
              private presentation.
            </p>

            <p className="mt-8 text-[9px] font-semibold uppercase tracking-[0.25em] text-burgundy/55">
              Financial District · Hyderabad
            </p>
          </div>

          {sent ? (
            <div
              className="
          flex
          min-h-80
          items-center
          gap-5
          border
          border-champagne/20
          bg-deep-burgundy
          p-8
          text-ivory
          sm:p-10
        "
            >
              <div
                className="
            flex
            size-14
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-champagne/25
          "
              >
                <Check className="size-6 text-champagne" />
              </div>

              <div>
                <p className="display-title text-4xl text-ivory">Thank you.</p>

                <p className="mt-2 text-sm leading-6 text-ivory/55">
                  Your enquiry has been prepared for the sales team.
                </p>

                <div className="mt-5 h-px w-10 bg-champagne/50" />
              </div>
            </div>
          ) : (
            <form
              onSubmit={submitContact}
              className="
          grid
          gap-7
          border
          border-burgundy/15
          bg-deep-burgundy/90
          p-7
          shadow-[0_20px_60px_rgba(45,24,9,0.12)]
          sm:grid-cols-2
          sm:p-10
          lg:p-12
        "
            >
              <label className="group">
                <span
                  className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-warm-gold/70
              transition-colors
              group-focus-within:text-champagne
            "
                >
                  Full Name
                </span>

                <input
                  required
                  name="name"
                  autoComplete="name"
                  placeholder="Your full name"
                  className="
              mt-2
              border-0
              border-b
              border-champagne/20
              bg-transparent
              px-0
              py-3
              text-sm
              text-ivory
              outline-none
              transition-colors
              placeholder:text-ivory/30
              focus:border-champagne
            "
                />
              </label>

              <label className="group">
                <span
                  className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-warm-gold/70
              transition-colors
              group-focus-within:text-champagne
            "
                >
                  Phone Number
                </span>

                <input
                  required
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  pattern="[0-9+() -]{8,}"
                  placeholder="Your phone number"
                  className="
              mt-2
              border-0
              border-b
              border-champagne/20
              bg-transparent
              px-0
              py-3
              text-sm
              text-ivory
              outline-none
              transition-colors
              placeholder:text-ivory/30
              focus:border-champagne
            "
                />
              </label>

              <label className="group sm:col-span-2">
                <span
                  className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-warm-gold/70
              transition-colors
              group-focus-within:text-champagne
            "
                >
                  Email
                </span>

                <input
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Your email address"
                  className="
              mt-2
              border-0
              border-b
              border-champagne/20
              bg-transparent
              px-0
              py-3
              text-sm
              text-ivory
              outline-none
              transition-colors
              placeholder:text-ivory/30
              focus:border-champagne
            "
                />
              </label>

              <label className="group sm:col-span-2">
                <span
                  className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-warm-gold/70
              transition-colors
              group-focus-within:text-champagne
            "
                >
                  Message
                </span>

                <textarea
                  name="message"
                  rows={3}
                  placeholder="Tell us how we can assist you"
                  className="
              mt-2
              w-full
              resize-none
              border-0
              border-b
              border-champagne/20
              bg-transparent
              px-0
              py-3
              text-sm
              leading-6
              text-ivory
              outline-none
              transition-colors
              placeholder:text-ivory/30
              focus:border-champagne
            "
                />
              </label>

              <Button
                variant="luxury"
                size="lg"
                className="
            group
            h-14
            w-full
            border
            border-champagne
            bg-champagne
            text-burgundy
            transition-colors
            duration-200
            hover:bg-burgundy
            hover:text-champagne
            sm:col-span-2
          "
                type="submit"
              >
                <span className="flex items-center justify-center gap-4">
                  Enquire Now
                  <ArrowRight
                    className="
                size-4
                transition-transform
                duration-200
                group-hover:translate-x-1
              "
                  />
                </span>
              </Button>

              <p
                className="
            -mt-2
            text-center
            text-[8px]
            leading-5
            text-ivory/30
            sm:col-span-2
          "
              >
                By submitting this form, you agree to be contacted regarding CINQ by Raghava.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* <section id="contact" className="bg-copper px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-360 gap-12 lg:grid-cols-[.8fr_1.2fr] lg:px-2">
          <div className="flex flex-col justify-center">
            <p className="eyebrow text-champagne/75">Private Presentation</p>

            <h2 className="display-title mt-4 text-6xl text-ivory sm:text-7xl">Make it yours.</h2>

            <div className="mt-6 h-px w-12 bg-champagne/50" />

            <p className="mt-6 max-w-md text-sm leading-7 text-ivory/55">
              Leave your details and our team will help you discover CINQ by Raghava and arrange a
              private presentation.
            </p>

            <p className="mt-8 text-[9px] font-semibold uppercase tracking-[0.25em] text-warm-gold/60">
              Financial District · Hyderabad
            </p>
          </div>
          {sent ? (
            <div className="flex items-center gap-4 bg-midnight p-8 text-ivory">
              <Check className="size-8 text-champagne" />
              <div>
                <p className="font-display text-3xl">Thank you.</p>
                <p className="mt-2 text-sm text-ivory/65">
                  Your enquiry has been prepared for the sales team.
                </p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={submitContact}
              className="
          grid
          gap-7
          border
          border-champagne/15
          bg-burgundy
          p-7
          sm:grid-cols-2
          sm:p-10
          lg:p-12
        "
            >
              <label className="group">
                <span
                  className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-warm-gold/65
              transition-colors
              group-focus-within:text-champagne
            "
                >
                  Full Name
                </span>

                <input
                  required
                  name="name"
                  autoComplete="name"
                  placeholder="Your full name"
                  className="
              mt-2
              border-0
              border-b
              border-champagne/15
              bg-transparent
              px-0
              py-3
              text-sm
              text-ivory
              outline-none
              transition-colors
              placeholder:text-ivory/25
              focus:border-champagne
            "
                />
              </label>

              <label className="group">
                <span
                  className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-warm-gold/65
              transition-colors
              group-focus-within:text-champagne
            "
                >
                  Phone Number
                </span>

                <input
                  required
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  pattern="[0-9+() -]{8,}"
                  placeholder="Your phone number"
                  className="
              mt-2
              border-0
              border-b
              border-champagne/15
              bg-transparent
              px-0
              py-3
              text-sm
              text-ivory
              outline-none
              transition-colors
              placeholder:text-ivory/25
              focus:border-champagne
            "
                />
              </label>

              <label className="group sm:col-span-2">
                <span
                  className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-warm-gold/65
              transition-colors
              group-focus-within:text-champagne
            "
                >
                  Email
                </span>

                <input
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Your email address"
                  className="
              mt-2
              border-0
              border-b
              border-champagne/15
              bg-transparent
              px-0
              py-3
              text-sm
              text-ivory
              outline-none
              transition-colors
              placeholder:text-ivory/25
              focus:border-champagne
            "
                />
              </label>

              <label className="group sm:col-span-2">
                <span
                  className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-warm-gold/65
              transition-colors
              group-focus-within:text-champagne
            "
                >
                  Message
                </span>

                <textarea
                  name="message"
                  rows={3}
                  placeholder="Tell us how we can assist you"
                  className="
              mt-2
              w-full
              resize-none
              border-0
              border-b
              border-champagne/15
              bg-transparent
              px-0
              py-3
              text-sm
              leading-6
              text-ivory
              outline-none
              transition-colors
              placeholder:text-ivory/25
              focus:border-champagne
            "
                />
              </label>

              <Button
                variant="luxury"
                size="lg"
                className="
            group
            h-14
            w-full
            border
            border-champagne
            bg-champagne
            text-burgundy
            transition-colors
            duration-200
            hover:bg-burgundy
            hover:text-champagne
            sm:col-span-2
          "
                type="submit"
              >
                <span className="flex items-center justify-center gap-4">
                  Enquire Now
                  <ArrowRight
                    className="
                size-4
                transition-transform
                duration-200
                group-hover:translate-x-1
              "
                  />
                </span>
              </Button>

              <p
                className="
            -mt-2
            text-center
            text-[8px]
            leading-5
            text-ivory/25
            sm:col-span-2
          "
              >
                By submitting this form, you agree to be contacted regarding CINQ by Raghava.
              </p>
            </form>
          )}
        </div>
      </section> */}

      <footer className="bg-midnight px-5 pb-28 pt-16 text-ivory lg:pb-12">
        <div className="mx-auto max-w-360">
          <div className="grid gap-12 border-b border-ivory/15 pb-12 md:grid-cols-[1.15fr_.85fr_.85fr]">
            <div>
              <p className="brand-mark text-5xl text-champagne">
                <span className="block tracking-[.28em]">CINQ</span>
                <span className="-mt-1 block text-[.48em] tracking-[.22em]">RAGHAVA</span>
              </p>

              <p className="mt-5 font-display text-2xl">CINQ Residences</p>

              <p className="mt-3 max-w-sm text-xs leading-6 text-ivory/55">
                A refined residential address by Raghava in the Financial District, Hyderabad.
              </p>
            </div>

            <div>
              <p className="eyebrow text-champagne">Explore</p>

              <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-xs uppercase tracking-[.12em] text-ivory/65">
                {navigation.map((item) => (
                  <button
                    key={item}
                    className="text-left transition-colors hover:text-champagne"
                    onClick={() =>
                      document
                        .getElementById(item.toLowerCase())
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="eyebrow text-champagne">Authorised Sales Partner</p>

              <p className="mt-3 font-display text-4xl">Mojo Realty</p>

              <p className="mt-3 max-w-xs text-xs leading-6 text-ivory/55">
                Your authorised channel partner for enquiries and private presentations.
              </p>

              <Button
                variant="luxuryOutline"
                className="mt-6 cinq-premium-btn"
                onClick={openEnquiry}
              >
                Book a Visit
              </Button>
            </div>
          </div>

          <div className="border-b border-ivory/10 py-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto]">
              <div className="max-w-5xl">
                <p className="text-[10px] font-medium uppercase tracking-[.14em] text-champagne/80">
                  RERA &amp; Disclaimer
                </p>

                <p className="mt-3 text-[10px] leading-5 text-ivory/45">
                  PROJECT RERA: 1234567890 · CHANNEL PARTNER RERA: A04500004727
                </p>

                <p className="mt-3 text-[10px] leading-5 text-ivory/45">
                  This is an informational website owned and managed by Mojo Realty, an authorized
                  channel partner registered under RERA ID: A04500004727. This is not the official
                  website of the developer. All images, floor plans, and project details are for
                  representational purposes only and may be subject to change by the respective
                  developer. All trademarks and project information belong to their respective
                  owners. Enquiries from this site are handled solely by Mojo Realty.
                </p>

                <p className="mt-3 text-[10px] leading-5 text-ivory/45">
                  All images, renders, illustrations and visual representations displayed on this
                  website are for reference purposes only and are intended to provide an artistic
                  representation of the proposed development. Actual specifications, finishes,
                  landscaping, amenities and surroundings may vary.
                </p>
              </div>

              <div className="flex flex-col gap-3 text-[10px] uppercase tracking-[.14em] text-ivory/55 lg:min-w-40 lg:items-end">
                <Link to="/privacy-policy" className="transition-colors hover:text-champagne">
                  Privacy Policy
                </Link>

                <Link to="/terms-and-conditions" className="transition-colors hover:text-champagne">
                  Terms &amp; Conditions
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-6 text-[10px] uppercase tracking-[.15em] text-ivory/35 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Mojo Realty. All Rights Reserved.</p>

            <p>CINQ by Raghava · Financial District, Hyderabad</p>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-champagne/30 bg-midnight p-3 lg:hidden">
        <Button variant="luxury" size="lg" className="w-full" onClick={openEnquiry}>
          Book a Visit
        </Button>
      </div>
      <FloatingWhatsapp isHidden={enquire} />

      <EnquiryModal open={enquire} onClose={closeEnquiry} />
      <MediaViewer
        open={Boolean(viewer)}
        onClose={() => setViewer(null)}
        src={viewer?.src ?? images.cinqHero}
        alt={viewer?.alt ?? "cinq Gateway visual"}
      />
    </main>
  );
}
