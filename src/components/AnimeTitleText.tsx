import { motion } from "framer-motion";
import { ANIMATION_CONFIG } from "../lib/constant";
import { AnimeTitle } from "../lib/types";

type AnimeTitleTextProps = {
  title: AnimeTitle;
  onHover: (text: string) => void;
  onHoverEnd: () => void;
};

export const AnimeTitleText = ({
  title,
  onHover,
  onHoverEnd,
}: AnimeTitleTextProps) => (
  <motion.span
    data-text={title.id}
    className="transition-colors duration-300 hover:text-zinc-500"
    animate={ANIMATION_CONFIG.initial}
    whileHover={ANIMATION_CONFIG.hover}
    transition={ANIMATION_CONFIG.transition}
    onMouseEnter={(e) => onHover(e.currentTarget.dataset.text!)}
    onMouseMove={(e) => onHover(e.currentTarget.dataset.text!)}
    onMouseLeave={onHoverEnd}
  >
    {title.displayName}
  </motion.span>
);
