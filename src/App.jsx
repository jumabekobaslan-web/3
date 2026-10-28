import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Settings from "./pages/Settings";
import About from "./pages/About";

const App = () => {
  return (
    <div className="flex justify-between items-center px-[100px] py-[30px]">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/about" element={<About />} />

      </Routes>
    </div>
  )
}


export default App