import CreditCardImg from "../assets/images/credit-card.jpg";
import { PrimaryButton, SecondaryButton } from "./Button";
import "../styles/HeroSection.css";

export const HeroSection = () => {
  return (
    <section>
      <div className="hero-container fix-container">
        <div className="info">
          <h1>
            Empowering your <span>financial future</span>
          </h1>
          <p>
            Managing your money shouldn’t be complicated. Our powerful finance
            tracking platform helps you track your income, expenses, savings,
            and investments—all in one place.{" "}
          </p>
          <div className="btn-container">
            <PrimaryButton btnText={"Get Started"} url={"/"} />
            <SecondaryButton btnText={"Learn More"} url={"#"} />
          </div>
        </div>
        <div className="text-center">
          <img src={CreditCardImg} alt="Picture of two credit card" />
        </div>
      </div>
    </section>
  );
};
