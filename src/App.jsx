import "./App.css";
import { BrandInfo } from "./components/BrandsInfo";
import { Footer } from "./components/Footer";

import { HeroSection } from "./components/HeroSection";
import { LoremOne } from "./components/LoremOne";
import { LoremTwo } from "./components/LoremTwo";
import { Nav } from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <HeroSection />
      <BrandInfo />
      <LoremOne />
      <LoremTwo />
      <Footer />
    </>
  );
}

export default App;
