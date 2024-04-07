import { BrowserRouter as Router } from "react-router-dom";
import "./style.css";
import Base from "./views/Base";

function App() {
  return (
    <Router>
      <div className="App">
        <Base />
      </div>
    </Router>
  );
}

export default App;
