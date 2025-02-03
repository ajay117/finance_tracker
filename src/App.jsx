import "./App.css";
import { Home } from "./components/Home";
// import { BrandInfo } from "./components/BrandsInfo";
// import { Footer } from "./components/Footer";

// import { HeroSection } from "./components/HeroSection";
// import { LoremOne } from "./components/LoremOne";
// import { LoremTwo } from "./components/LoremTwo";
import { Nav } from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
