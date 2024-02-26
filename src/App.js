import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import News from "./components/pages/News";
import "./App.css";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/news' element={<News />} />
            </Routes>
        </BrowserRouter>
        <Banner />
        <Footer />
    </div>
  );
}
export default App;
