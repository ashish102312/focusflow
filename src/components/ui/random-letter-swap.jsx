import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

export function RandomLetterSwap({ label, className, staggerDuration = 0.05 }) {
  const [text, setText] = useState(label);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      setText(label);
      return;
    }

    let iteration = 0;
    let interval = null;

    interval = setInterval(() => {
      setText((currentText) =>
        currentText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return label[index];
            }
            return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
          })
          .join("")
      );

      if (iteration >= label.length) {
        clearInterval(interval);
      }

      iteration += 1 / (staggerDuration * 60); // approx based on stagger duration
    }, 30);

    return () => clearInterval(interval);
  }, [label, isHovered, staggerDuration]);

  return (
    <motion.span
      className={className}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ display: "inline-block" }}
    >
      {text}
    </motion.span>
  );
}
