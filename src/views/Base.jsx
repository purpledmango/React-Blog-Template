import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "../components/Nav";
import Home from "../pages/Home";
import ArticlePage from "../pages/ArticlePage";
import About from "../pages/About";
import Footer from "../components/Footer";
import ReactGA from 'react-ga';
const TRACKING_ID = "G-JPJ3VWY20K";

ReactGA.initialize(TRACKING_ID);

const Base = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/article/:slug" element={<ArticlePage />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default Base;
