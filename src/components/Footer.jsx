import LogoWhiteImg from "../assets/images/logo-white.png";
import FacebookIcon from "../assets/images/icons/facebook.png";
import InstagramIcon from "../assets/images/icons/instagram.png";
import LinkedinIcon from "../assets/images/icons/linkedin.png";
import MailIcon from "../assets/images/icons/mail-icon.png";
import "../styles/Footer.css";

export const Footer = () => {
  return (
    <footer>
      <section className="fix-container">
        <div className="info">
          <img src={LogoWhiteImg} alt="" />
          <p>
            Lorem ipsum dolor sit amet consecter. Lobortis commodo vulputate.
          </p>
        </div>
        <div>
          <ul>
            <li>
              <img src={FacebookIcon} alt="" />
            </li>
            <li>
              <img src={InstagramIcon} alt="" />
            </li>
            <li>
              <img src={LinkedinIcon} alt="" />
            </li>
          </ul>
        </div>
      </section>

      <section className="fix-container">
        <div className="mail-info">
          <img src={MailIcon} alt="" />
          <p className="mail-address">support@FinanceTracker.com</p>
        </div>

        <div className="links">
          <p>QUICK LINKS</p>
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="/service">Service</a>
            </li>
            <li>
              <a href="/team">Team</a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};
