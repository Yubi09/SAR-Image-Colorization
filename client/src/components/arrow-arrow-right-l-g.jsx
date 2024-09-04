import PropTypes from "prop-types";

const ArrowArrowRightLG = ({ className = "" }) => {
  return (
    <img
      className={`w-[200px] relative max-w-full overflow-hidden h-[200px] ${className}`}
      alt=""
      src="/arrow--arrow-right-lg.svg"
    />
  );
};

ArrowArrowRightLG.propTypes = {
  className: PropTypes.string,
};

export default ArrowArrowRightLG;
