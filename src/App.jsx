import "./App.css";
import { BrandInfo } from "./components/BrandsInfo";

import { HeroSection } from "./components/HeroSection";
import { LoremOne } from "./components/LoremOne";
import { Nav } from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <HeroSection />
      <BrandInfo />
      <LoremOne />
    </>
  );
}

export default App;
