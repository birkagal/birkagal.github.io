import { createContext } from "react";
import type {Theme} from "../types";
import { themes } from "../configs/themes";
import usePersistedState from "./usePersistedState";

type Context = {
  isDark: boolean;
  setIsDark: (updatedValue: boolean) => void;
  theme: Theme;
  isMobile: boolean;
}

const AppContextInitialValue: Context = {
  isDark: true,
  setIsDark: (updatedValue: boolean) => {},
  theme: themes.dark,
  isMobile: false,
};

export const AppContext = createContext(AppContextInitialValue);

const ThemeProvider = ({ children }: any) => {
  const [isDark, setIsDark] = usePersistedState("theme", true); // default: dark mode

  const theme = isDark ? themes.dark : themes.light;
  const isMobile = window.matchMedia("(max-device-width: 820px)").matches;

  return (
    <AppContext.Provider value={{ isDark, setIsDark, theme, isMobile }}>
      {children}
    </AppContext.Provider>
  );
};

export default ThemeProvider;
