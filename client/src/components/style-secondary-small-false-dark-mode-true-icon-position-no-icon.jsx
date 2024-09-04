import PropTypes from "prop-types";

const StyleSecondarySmallFalseDarkModeTrueIconPositionNoIcon = ({
  className = "",
}) => {
  return (
    <div
      className={`relative border-border-alternate border-[1px] border-solid flex flex-row items-center justify-center py-3 px-6 text-left text-base text-border-alternate font-heading-desktop-h5 ${className}`}
    >
      <div className="relative leading-[150%]">Button</div>
    </div>
  );
};

StyleSecondarySmallFalseDarkModeTrueIconPositionNoIcon.propTypes = {
  className: PropTypes.string,
};

export default StyleSecondarySmallFalseDarkModeTrueIconPositionNoIcon;
