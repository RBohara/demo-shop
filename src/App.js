import { BrowserRouter as Router, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Watches from "./pages/Watches";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/watches">
          <Watches />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
