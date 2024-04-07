import { BrowserRouter, Route } from "react-router-dom";
import Nav from "../common/Nav";
import Home from "../pages/Home";
import ArticlePage from "../pages/ArticlePage";
import About from "../pages/About";

const Base = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Route path="*" element={<Home />} />
            <Route path="/article/:slug" element={<ArticlePage />} />
            <Route path="/about" element={<About />} />
        </BrowserRouter>
    );
};

export default Base;
