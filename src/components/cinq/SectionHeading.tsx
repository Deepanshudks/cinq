import { motion } from "motion/react";

export function SectionHeading({
  eyebrow,
  title,
  copy,
  light = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  light?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl"
    >
      <p className={`eyebrow ${light ? "text-champagne" : "text-primary"}`}>{eyebrow}</p>
      <h2
        className={`display-title mt-4 text-5xl sm:text-6xl lg:text-7xl ${light ? "text-ivory" : "text-foreground"}`}
      >
        {title}
      </h2>
      {copy && (
        <p
          className={`mt-6 max-w-xl leading-7 ${light ? "text-ivory/70" : "text-muted-foreground"}`}
        >
          {copy}
        </p>
      )}
    </motion.div>
  );
}
