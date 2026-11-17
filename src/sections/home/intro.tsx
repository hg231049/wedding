import { motion } from "framer-motion";
export default function Intro() {
  return (
    <motion.div
      className="intro"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        delay: 3.6,
        duration: 1.1,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <motion.div
        className="intro-content"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <span className="font-ns">HAPPY</span>

        <h1 className="font-pds typing-title">
          {["OUR", "WEDDING", "DAY"].map((word, wordIndex) => (
            <span key={word} className="typing-line">
              {[...word].map((char, charIndex) => (
                <motion.span
                  key={`${word}-${charIndex}`}
                  className="typing-char"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 0.8 + wordIndex * 0.75 + charIndex * 0.12,
                    duration: 0.08,
                    ease: "linear",
                  }}
                >
                  {char}
                </motion.span>
              ))}
              {wordIndex < 2 && <br />}
            </span>
          ))}
        </h1>

        <p>HAN HUN GU & LEE EUN SEO</p>
      </motion.div>
    </motion.div>
  );
}
