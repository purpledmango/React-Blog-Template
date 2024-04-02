import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/home/Home";
import AuthorLogin from "./views/admin/AuthorLogIn";
import Dashboard from "./views/admin/dashboard";

import ArticlePage from "./views/post/ArticlePage";
import "./style.css";
// import Article from "./views/home/Article";
import Posts from "./views/admin/Posts";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/posts" element={<Posts />} />
          <Route path="/admin/*" element={<AuthorLogin />} />
          <Route path="/admin/*" element={<AuthorLogin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
