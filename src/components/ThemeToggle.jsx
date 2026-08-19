import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";

const getPositionCoords = (position) => {
  switch (position) {
    case "top-left": return { cx: "0", cy: "0" };
    case "top-right": return { cx: "40", cy: "0" };
    case "bottom-left": return { cx: "0", cy: "40" };
    case "bottom-right": return { cx: "40", cy: "40" };
    case "center": return { cx: "20", cy: "20" };
    default: return { cx: "20", cy: "20" };
  }
};

const getTransformOrigin = (start) => {
  switch (start) {
    case "top-left": return "top left";
    case "top-right": return "top right";
    case "bottom-left": return "bottom left";
    case "bottom-right": return "bottom right";
    case "center": return "center";
    default: return "center";
  }
};

export const createAnimation = (variant, start = "center", blur = false, url = "") => {
  const positionCoords = getPositionCoords(start);
  const { cx, cy } = positionCoords;

  if (variant === "circle") {
    const clipPosition = start === "center" ? "50% 50%" : 
                         start === "top-left" ? "0% 0%" : 
                         start === "top-right" ? "100% 0%" : 
                         start === "bottom-left" ? "0% 100%" : 
                         start === "bottom-right" ? "100% 100%" : "50% 50%";

    return {
      name: `circle-${start}`,
      css: `
       ::view-transition-group(root) {
        animation-duration: 1s;
        animation-timing-function: var(--expo-out, cubic-bezier(0.16, 1, 0.3, 1));
      }
            
      ::view-transition-new(root) {
        animation-name: reveal-light-${start};
      }

      ::view-transition-old(root),
      .dark::view-transition-old(root) {
        animation: none;
        z-index: -1;
      }
      .dark::view-transition-new(root) {
        animation-name: reveal-dark-${start};
      }

      @keyframes reveal-dark-${start} {
        from { clip-path: circle(0% at ${clipPosition}); }
        to { clip-path: circle(150.0% at ${clipPosition}); }
      }

      @keyframes reveal-light-${start} {
        from { clip-path: circle(0% at ${clipPosition}); }
        to { clip-path: circle(150.0% at ${clipPosition}); }
      }
      `,
    };
  }
  
  return { name: "default", css: "" };
};

export const useThemeToggle = ({ variant = "circle", start = "bottom-right", blur = false, gifUrl = "" } = {}) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const styleId = "theme-transition-styles";

  const updateStyles = useCallback((css, name) => {
    if (typeof window === "undefined") return;

    let styleElement = document.getElementById(styleId);

    if (!styleElement) {
      styleElement = document.createElement("style");
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }

    styleElement.textContent = css;
  }, []);

  const toggleTheme = useCallback(() => {
    const nextDark = !isDark;
    setIsDark(nextDark);

    const animation = createAnimation(variant, start, blur, gifUrl);
    updateStyles(animation.css, animation.name);

    const switchTheme = () => {
      if (nextDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    if (!document.startViewTransition) {
      switchTheme();
      return;
    }

    document.startViewTransition(switchTheme);
  }, [isDark, variant, start, blur, gifUrl, updateStyles]);

  return { isDark, toggleTheme };
};

export const ThemeToggle = ({ className = "" }) => {
  const { isDark, toggleTheme } = useThemeToggle({
    variant: "circle",
    start: "bottom-right",
  });

  return (
    <button
      type="button"
      className={`fixed bottom-6 right-6 z-50 size-12 cursor-pointer rounded-full bg-foreground dark:bg-background p-2 transition-all duration-300 active:scale-95 shadow-lg border border-border ${className}`}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <span className="sr-only">Toggle theme</span>
      <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <motion.g
          animate={{ rotate: isDark ? -180 : 0 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          <path
            d="M120 67.5C149.25 67.5 172.5 90.75 172.5 120C172.5 149.25 149.25 172.5 120 172.5"
            fill="currentColor"
            className="text-background dark:text-foreground"
          />
          <path
            d="M120 67.5C90.75 67.5 67.5 90.75 67.5 120C67.5 149.25 90.75 172.5 120 172.5"
            fill="currentColor"
            className="text-foreground dark:text-background"
          />
        </motion.g>
        <motion.path
          animate={{ rotate: isDark ? 180 : 0 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          d="M120 3.75C55.5 3.75 3.75 55.5 3.75 120C3.75 184.5 55.5 236.25 120 236.25C184.5 236.25 236.25 184.5 236.25 120C236.25 55.5 184.5 3.75 120 3.75ZM120 214.5V172.5C90.75 172.5 67.5 149.25 67.5 120C67.5 90.75 90.75 67.5 120 67.5V25.5C172.5 25.5 214.5 67.5 214.5 120C214.5 172.5 172.5 214.5 120 214.5Z"
          fill="currentColor"
          className="text-background dark:text-foreground"
        />
      </svg>
    </button>
  );
};
