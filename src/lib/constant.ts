import { AnimeTitle } from "./types";

export const ANIMATION_CONFIG = {
  initial: {
    scaleY: 1.15,
  },
  hover: {
    scaleY: 1.3,
  },
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 10,
    mass: 0.8,
  },
} as const;

export const ANIME_TITLES: AnimeTitle[] = [
  { id: "demonSlayer", displayName: "demon slayer" },
  { id: "silentVoice", displayName: "a silent voice" },
  { id: "attackOnTitan", displayName: "attack on titan" },
  { id: "spiritedAway", displayName: "spirited away" },
  { id: "bunnyGirl", displayName: "Rascal Does Not Dream" },
];