import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/home/Home";

import ArticlePage from "./views/post/ArticlePage";
import "./style.css";
import About from "./views/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:slug" element={<ArticlePage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<About />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
