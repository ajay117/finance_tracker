import { PrimaryButton, SecondaryButton } from "./Button";
import DeviceImg from "../assets/images/devices.jpg";
import MoneyPlantImg from "../assets/images/money-plant.jpg";
import "../styles/LoremOne.css";

export const LoremOne = () => {
  return (
    <section className="lorem-one">
      <div className="d-flex fix-container">
        <div className="info">
          <h3>Empowering your financial future</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lobortis commodo vulputate
            lorem nisi amet orci in. Lacus ac feugiat sed nibh. Condimentum cras
            lobortis diam ipsum turpis suspendisse sit. Morbi pellentesque
            feugiat dui ullamcorper nibh diam.
          </p>
          <div className="btn-container">
            <PrimaryButton btnText={"Lorem Ipsum"} url={"#"} />
            <SecondaryButton btnText={"Learn More"} url={"#"} />
          </div>
        </div>

        <div className="d-flex gallery">
          <div className="box1">
            <img src={DeviceImg} alt="picture of a laptop and a mobile" />
          </div>

          <div className="box2">
            <p>Lorem ipsum dolor sit amet consectetur </p>
            <div>
              <img className="w-100" src={MoneyPlantImg} alt="picture of a laptop and a mobile" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
