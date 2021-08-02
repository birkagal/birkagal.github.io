import React from "react";
import ThemeProvider from "./hooks/AppContext";
import { Toggle, Content, Buttons, Footer, Particles } from "./components";
import "./App.css";

const App = () => {
  return (
    <ThemeProvider>
      <div className="app">
        <Toggle />
        <Content />
        <Buttons />
        <Footer />
        <Particles />
      </div>
    </ThemeProvider>
  );
};

export default App;
