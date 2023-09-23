import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import { Context } from "./context";
import Layout from "./components/layout/Layout";
import Home from "./components/pages/Home";
import Destination from "./components/pages/destination/Destination";
import Moon from "./components/pages/destination/Moon";
import Mars from "./components/pages/destination/Mars";
import Europa from "./components/pages/destination/Europa";
import Titan from "./components/pages/destination/Titan";
import Crew from "./components/pages/crew/Crew";
import Technology from "./components/pages/technology/Technology";
import "./App.css";

function App() {
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  const burgerStateHandler = (prevState) => {
    setIsBurgerActive((prevState) => !prevState);
  };

  return (
    <Context.Provider
      value={{ isBurgerActive, burgerStateHandler, setIsBurgerActive }}
    >
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/home" element={<Home />} exact />
          <Route path="/destination/*" element={<Destination />}>
            <Route path="" element={<Moon />} />;
            <Route path="moon" element={<Moon />} />;
            <Route path="mars" element={<Mars />} />;
            <Route path="europa" element={<Europa />} />;
            <Route path="titan" element={<Titan />} />;
          </Route>
          <Route path="/crew/*" element={<Crew />} exact />
          <Route path="/technology/*" element={<Technology />} exact />
        </Routes>
      </Layout>
    </Context.Provider>
  );
}

export default App;
