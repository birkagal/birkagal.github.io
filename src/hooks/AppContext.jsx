import React, { createContext } from "react";
import { dark, light } from "../themes/Theme";
import usePersistedState from "./usePersistedState";
/* Contex using createContex and useContex. Distribute the variables to all component.
 * isDark => Boolean, is dark mode in on or not.
 * theme => Object, The selected theme properties.
 * isMobile => Boolean, is the current user uses mobile display.
 */

export const AppContext = createContext({
  isDark: Boolean,
  setIsDark: () => {},
});

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = usePersistedState("theme", true); // default: dark mode
  const theme = isDark ? dark : light;
  const isMobile = window.matchMedia("(max-device-width: 820px)").matches;
  return (
    <AppContext.Provider value={{ isDark, setIsDark, theme, isMobile }}>
      {children}
    </AppContext.Provider>
  );
};

export default ThemeProvider;
