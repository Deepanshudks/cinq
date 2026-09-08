import { motion } from "framer-motion";

const PHONE = "917569272101";

export default function FloatingWhatsapp({ isHidden = false }: { isHidden?: boolean }) {
  if (isHidden) return null;

  const link = `https://wa.me/${PHONE}?text=${encodeURIComponent(
    "Hi, I'm interested in CINQ by Raghava. I'd like to know more about the residences.",
  )}`;

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        delay: 1,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.96 }}
      className="group fixed bottom-5 right-4 z-999 sm:bottom-8 sm:right-8"
    >
      <div className="relative">
        <motion.span
          className="absolute inset-0 rounded-full border border-champagne/50"
          animate={{
            scale: [1, 1.35],
            opacity: [0.35, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />

        <span
          className="
            absolute -inset-2
            rounded-full
            bg-champagne/10
            blur-xl
            opacity-70
          "
        />

        <motion.div
          animate={{
            y: [0, -2, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            relative flex size-14 items-center justify-center
            rounded-full
            border border-champagne/70
            bg-midnight/70
            shadow-[0_10px_35px_rgba(0,0,0,0.35)]
            transition-all duration-500
            group-hover:border-champagne
            group-hover:bg-[#101d2d]
            group-hover:shadow-[0_15px_45px_rgba(212,175,55,0.22)]
            sm:size-16
          "
        >
          <span
            className="
              absolute inset-1.5
              rounded-full
              border border-champagne/15
            "
          />

          <svg
            viewBox="0 0 32 32"
            fill="currentColor"
            aria-hidden="true"
            className="
              relative z-10
              size-6
              text-champagne
              transition-transform
              duration-500
              group-hover:scale-105
              sm:size-7
            "
          >
            <path d="M19.11 17.27c-.28-.14-1.65-.81-1.91-.9-.26-.1-.45-.14-.64.14-.19.28-.73.9-.9 1.08-.17.19-.33.21-.61.07-.28-.14-1.2-.44-2.28-1.4-.84-.75-1.41-1.67-1.57-1.95-.17-.28-.02-.43.12-.57.13-.13.28-.33.42-.49.14-.17.19-.28.28-.47.09-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.13-.23-.56-.46-.48-.64-.49l-.54-.01c-.19 0-.5.07-.76.36-.26.28-1 1-1 2.44s1.02 2.83 1.16 3.02c.14.19 2 3.05 4.85 4.27.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.11.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.26-.19-.54-.33z" />
            <path d="M16.01 2.67c-7.36 0-13.34 5.98-13.34 13.34 0 2.35.62 4.56 1.7 6.47L2.67 29.33l7.02-1.64c1.85 1.01 3.98 1.58 6.32 1.58 7.36 0 13.34-5.98 13.34-13.34S23.37 2.67 16.01 2.67zm0 24.34c-2.13 0-4.12-.57-5.84-1.56l-.42-.25-4.17.98.89-4.07-.27-.42c-1.1-1.72-1.69-3.72-1.69-5.78 0-6.02 4.9-10.92 10.92-10.92s10.92 4.9 10.92 10.92-4.9 10.92-10.92 10.92z" />
          </svg>
        </motion.div>

        <div
          className="
            pointer-events-none
            absolute right-full top-1/2 mr-4
            hidden -translate-y-1/2
            whitespace-nowrap
            border border-champagne/20
            bg-midnight/95
            px-4 py-2.5
            text-[9px] uppercase
            tracking-[0.22em]
            text-champagne
            opacity-0
            shadow-xl
            backdrop-blur-md
            transition-all duration-300
            group-hover:-translate-x-1
            group-hover:opacity-100
            sm:block
          "
        >
          Chat with us
        </div>
      </div>
    </motion.a>
  );
}
