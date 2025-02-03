import "../styles/BrandInfo.css";
import { Brand } from "./Brand";

export const BrandInfo = () => {
  return (
    <section className="brands-info">
      <div className="fix-container">
        {/* <h3>Trusted by next-gen startups</h3> */}
        <h3>TRUSTED BY NEXT-GEN STARTUPS</h3>
        <div className="d-flex justify-content-evenly ">
          <Brand />
          <Brand />
          <Brand />
          <Brand />
          <Brand />
        </div>
      </div>
    </section>
  );
};
