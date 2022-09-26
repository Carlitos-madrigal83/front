import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import Homepage from "pages/homepage";

// const Guard = ({ component: Component }) => {
//   const { user } = useGetter();
//   return user ? Component : <Navigate to="/login" replace />;
// };

const Container = () => {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} >
          <Route path="/" element={<Homepage />}/>
          </Route>
        
        </Routes>
      </BrowserRouter>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>
);