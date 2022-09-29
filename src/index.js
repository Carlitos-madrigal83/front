import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import Homepage from "pages/homepage";
import MapRandom from "pages/map-random";
import Context from "store";
import { useMap } from "hooks";

// const Guard = ({ component: Component }) => {
//   const { user } = useGetter();
//   return user ? Component : <Navigate to="/login" replace />;
// };

const Container = () => {
  const [map, setMap] = useMap()
  return (
    <Context.Provider
      value={{ map, setMap }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} >
          <Route path="/" element={<Homepage />}/>
          <Route path="/map-random" element={<MapRandom />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Context.Provider>

  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>
);