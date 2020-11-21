import "../globalStyles/scss/index.scss";

import React from "react";

import { Footer, MainMenu, MetaConsumer, OverlayManager } from "../components";
import { Routes } from "./routes";

const App: React.FC = () => {
  return (
    <>
      <MetaConsumer />



      <Routes />

      <Footer />
      <OverlayManager />
    </>
  );
};

export default App;
