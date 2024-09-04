import PropTypes from "prop-types";

const StyleLinkSmallFalseDarkModeFalseIconPositionTrailing = ({
  className = "",
}) => {
  return (
    <div
      className={`relative flex flex-row items-center justify-center gap-2 text-left text-base text-text-primary font-heading-desktop-h5 ${className}`}
    >
      <div className="relative leading-[150%]">Button</div>
      <img
        className="w-6 relative h-6 overflow-hidden shrink-0"
        alt=""
        src="/icon--relume1.svg"
      />
    </div>
  );
};

StyleLinkSmallFalseDarkModeFalseIconPositionTrailing.propTypes = {
  className: PropTypes.string,
};

export default StyleLinkSmallFalseDarkModeFalseIconPositionTrailing;
