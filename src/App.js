import "./App.css";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./comp/nav";
import Home from "./comp/home";
import Footer from "./comp/footer";
import About from "./comp/about";
import Awareness from "./comp/awareness";
import Chat from "./comp/Chat.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container bg-dark">
      <Router>
        <Nav></Nav>
        <Chat></Chat>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/awareness" element={<Awareness />}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
