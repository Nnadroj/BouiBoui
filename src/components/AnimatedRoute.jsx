import React from "react";
import { useLocation, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Page1 from "../Pages/Page1";
import Page2 from "../Pages/Page2";
import Page3 from "../Pages/Page3";
import GlobalCard from "../components/card/GlobalCard";

function AnimatedRoute({ userCoords }) {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Page1 />} />
        <Route path="/:category" element={<Page2 />} />
        <Route
          path="/:category/:list"
          element={<Page3 userCoords={userCoords} />}
        />
        <Route path="/global-card" element={<GlobalCard />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoute;
