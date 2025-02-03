import StaffImg from "../assets/images/staff.jpg";
import "../styles/LoremTwo.css";
import { Card } from "./Card";
import BarChartIcon from "../assets/images/icons/bar-chart.svg";
import LineChartIcon from "../assets/images/icons/line-chart.svg";
import PieChartIcon from "../assets/images/icons/Pie-chart.svg";

export const LoremTwo = () => {
  return (
    <section className="lorem-two">
      <div className="fix-container">
        <h3>Lorem ipsum dolor sit amet consectetur </h3>

        <div className="d-flex gap-4">
          <div>
            <img src={StaffImg} alt="" />
          </div>
          <Card
            icon={BarChartIcon}
            title={"Lorem ipsum dolor "}
            text1={
              "Lorem ipsum dolor sit amet consectetur. Lobortis commodo vulputate lorem nisi amet orci in. Lacus ac feugiat sed nibh. Condimentum cras lobortis diam ipsum turpis suspendisse sit. Morbi pellentesque feugiat dui ullamcorper nibh diam."
            }
            text2={
              "Lorem ipsum dolor sit amet consectetur. Lobortis commodo vulputate lorem nisi amet orci in."
            }
          />
        </div>

        <div className="d-flex gap-4 mt-4">
          <Card
            icon={LineChartIcon}
            title={"Lorem ipsum dolor "}
            text1={
              "Lorem ipsum dolor sit amet consectetur. Lobortis commodo vulputate lorem nisi amet orci in. Lacus ac feugiat sed nibh. Condimentum cras lobortis diam ipsum turpis suspendisse sit. Morbi pellentesque feugiat dui ullamcorper nibh diam."
            }
            text2={
              "Lorem ipsum dolor sit amet consectetur. Lobortis commodo vulputate lorem nisi amet orci in."
            }
          />

          <Card
            icon={PieChartIcon}
            title={"Lorem ipsum dolor "}
            text1={
              "Lorem ipsum dolor sit amet consectetur. Lobortis commodo vulputate lorem nisi amet orci in. Lacus ac feugiat sed nibh. Condimentum cras lobortis diam ipsum turpis suspendisse sit. Morbi pellentesque feugiat dui ullamcorper nibh diam."
            }
            text2={
              "Lorem ipsum dolor sit amet consectetur. Lobortis commodo vulputate lorem nisi amet orci in."
            }
          />
        </div>
      </div>
    </section>
  );
};
