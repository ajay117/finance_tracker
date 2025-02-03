import PropTypes from "prop-types";
import "../styles/Card.css";

export const Card = ({ icon, title, text1, text2 }) => {
  return (
    <div className="card">
      <div className="d-flex card-head">
        <img src={icon} alt="" />
        <p className="card-title">{title}</p>
      </div>
      <p>{text1}</p>
      <p>{text2}</p>
    </div>
  );
};

Card.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
};
