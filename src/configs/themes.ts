import type {Themes} from "../types";

export const themes: Themes = {
  dark: {
    key: "dark",
    primaryTextColor: "#FFF",
    secondaryTextColor: "#CCC",
    tertiaryTextColor: "#999",
    background: "#000",
    shadowColor: "rgba(0, 0, 0, 0.5)",
  },
  light: {
    key: "light",
    primaryTextColor: "#000",
    secondaryTextColor: "#333",
    tertiaryTextColor: "#444",
    background: "#FFF",
    shadowColor: "rgba(255, 255, 255, 0.5)",
  }
};