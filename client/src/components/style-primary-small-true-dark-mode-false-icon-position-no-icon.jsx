import PropTypes from "prop-types";

const StylePrimarySmallTrueDarkModeFalseIconPositionNoIcon = ({
  className = "",
}) => {
  return (
    <div
      className={`relative bg-text-primary border-text-primary border-[1px] border-solid flex flex-row items-center justify-center py-2 px-5 text-left text-base text-border-alternate font-heading-desktop-h5 ${className}`}
    >
      <div className="relative leading-[150%]">Button</div>
    </div>
  );
};

StylePrimarySmallTrueDarkModeFalseIconPositionNoIcon.propTypes = {
  className: PropTypes.string,
};

export default StylePrimarySmallTrueDarkModeFalseIconPositionNoIcon;
