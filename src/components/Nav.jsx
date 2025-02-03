import "../styles/Nav.css";
import BrandLogo from "../assets/images/brand-logo.png";
import { PrimaryButton, SecondaryButton } from "./Button";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";

export const Nav = () => {
  return (
    <>
      <nav>
        <div className="nav-container fix-container">
          <img src={BrandLogo} alt="logo" />

          <ul>
            <li>
              <a href="/#home">Home</a>
            </li>
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#pricing">Pricing</a>
            </li>
            <li>
              <a href="/#service">Service</a>
            </li>
            <li>
              <a href="/#team">Team</a>
            </li>
          </ul>

          <div className="btn-container">
            <SecondaryButton btnText={"LOG IN"} url={"/login"} />
            <PrimaryButton btnText={"GET STARTED"} url={"/"} />
          </div>
        </div>
      </nav>

      <Outlet />

      <Footer />
    </>
  );
};
