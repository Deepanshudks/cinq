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
      initial={{
        opacity: 0,
        scale: 0.8,
        y: 20,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        delay: 1,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        scale: 1.06,
        y: -3,
      }}
      whileTap={{
        scale: 0.94,
        y: 0,
      }}
      className=" group fixed bottom-18 right-4 z-999 sm:bottom-8 sm:right-8"
    >
      <div className="relative">
        <motion.span
          className="
            absolute
            inset-0
            rounded-full
            border
            border-champagne/50
          "
          animate={{
            scale: [1, 1.12, 1.3, 1.45],
            opacity: [0.4, 0.28, 0.12, 0],
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />

        <motion.span
          className="
            absolute
            -inset-1
            rounded-full
            border
            border-champagne/20
          "
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.span
          className="
            absolute
            -inset-3
            rounded-full
            bg-champagne/10
            blur-2xl
          "
          animate={{
            scale: [0.85, 1.08, 0.85],
            opacity: [0.2, 0.45, 0.2],
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          animate={{
            scale: [1, 1.035, 1],

            backgroundColor: ["#0b192a", "#101d2d", "#0b192a"],

            boxShadow: [
              "0 10px 35px rgba(0,0,0,0.35)",
              "0 16px 45px rgba(212,175,55,0.20)",
              "0 10px 35px rgba(0,0,0,0.35)",
            ],
          }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.1,
            y: -4,
            boxShadow: "0 20px 60px rgba(212,175,55,0.38)",
          }}
          whileTap={{
            scale: 0.92,
            y: 0,
          }}
          className="  relative flex size-14 items-center justify-center rounded-full border border-champagne/70 transition-colors duration-500 group-hover:border-champagne sm:size-16 "
        >
          <motion.span
            className="
              absolute
              inset-1.5
              rounded-full
              border
              border-champagne/15
            "
            animate={{
              scale: [0.98, 1, 0.98],
              opacity: [0.35, 0.7, 0.35],
            }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.svg
            viewBox="0 0 32 32"
            fill="currentColor"
            aria-hidden="true"
            animate={{
              scale: [1, 1.045, 1],
            }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className=" relative z-10 size-6 text-champagne transition-all duration-200 group-hover:scale-110 group-hover:text-[#e8c86a] sm:size-7 "
          >
            <path d="M19.11 17.27c-.28-.14-1.65-.81-1.91-.9-.26-.1-.45-.14-.64.14-.19.28-.73.9-.9 1.08-.17.19-.33.21-.61.07-.28-.14-1.2-.44-2.28-1.4-.84-.75-1.41-1.67-1.57-1.95-.17-.28-.02-.43.12-.57.13-.13.28-.33.42-.49.14-.17.19-.28.28-.47.09-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.13-.23-.56-.46-.48-.64-.49l-.54-.01c-.19 0-.5.07-.76.36-.26.28-1 1-1 2.44s1.02 2.83 1.16 3.02c.14.19 2 3.05 4.85 4.27.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.11.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.26-.19-.54-.33z" />

            <path d="M16.01 2.67c-7.36 0-13.34 5.98-13.34 13.34 0 2.35.62 4.56 1.7 6.47L2.67 29.33l7.02-1.64c1.85 1.01 3.98 1.58 6.32 1.58 7.36 0 13.34-5.98 13.34-13.34S23.37 2.67 16.01 2.67zm0 24.34c-2.13 0-4.12-.57-5.84-1.56l-.42-.25-4.17.98.89-4.07-.27-.42c-1.1-1.72-1.69-3.72-1.69-5.78 0-6.02 4.9-10.92 10.92-10.92s10.92 4.9 10.92 10.92-4.9 10.92-10.92 10.92z" />
          </motion.svg>
        </motion.div>

        <div className=" pointer-events-none absolute right-full top-1/2 mr-4 hidden -translate-y-1/2 translate-x-2 whitespace-nowrap border border-champagne/20 bg-midnight/95 px-4 py-2.5 text-[9px] font-medium uppercase tracking-[0.22em] text-champagne opacity-0 shadow-xl backdrop-blur-md transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 sm:block">
          Chat with us
        </div>
      </div>
    </motion.a>
  );
}
