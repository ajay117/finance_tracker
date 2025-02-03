import PropTypes from "prop-types";

export const PrimaryButton = ({ btnText, url }) => {
  return (
    <a className="btn btn-primary" href={url}>
      {btnText}
    </a>
  );
};

export const SecondaryButton = ({ btnText, url }) => {
  return (
    <a className="btn btn-secondary" href={url}>
      {btnText}
    </a>
  );
};

PrimaryButton.propTypes = {
  btnText: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
SecondaryButton.propTypes = {
  btnText: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
