import "./App.css";
import { BrandInfo } from "./components/BrandsInfo";
import { HeroSection } from "./components/HeroSection";
import { Nav } from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <HeroSection />
      <BrandInfo />
    </>
  );
}

export default App;
