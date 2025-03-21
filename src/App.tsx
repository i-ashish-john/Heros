
// import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from './theme-provider';
import About from "./About";
import Home from "./Home";
import Details from "./Details"

import './App.css'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Details/:id" element={<Details/>}/>
          {/* <Route path="/services" element={<Home />} /> 
          <Route path="/contact" element={<Home />} />  */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;