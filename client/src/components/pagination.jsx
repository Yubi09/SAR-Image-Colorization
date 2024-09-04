

const  = ({ className="" }) => {
  return (
    <div className={`relative w-full flex flex-row items-start justify-start py-table-padding px-0 box-border gap-pagination-marginxs text-center text-sm text-pagination-colortext font-heading-heading-3 ${className}`}>
      <div className="w-pagination-controlheight rounded-pagination-borderradius h-pagination-controlheight flex flex-col items-center justify-center py-0 px-1.5 box-border">
        <img className="w-3.5 relative h-3.5 overflow-hidden shrink-0" alt="" src="/icon--leftoutlined.svg" />
      </div>
      <div className="w-pagination-controlheight rounded-pagination-borderradius border-pagination-colorprimary border-[1px] border-solid box-border h-pagination-controlheight flex flex-col items-center justify-center py-0 px-1.5 text-pagination-colorprimary">
        <b className="self-stretch relative leading-[22px]">1</b>
      </div>
      <div className="w-pagination-controlheight rounded-pagination-borderradius h-pagination-controlheight flex flex-col items-center justify-center py-0 px-1.5 box-border">
        <div className="self-stretch relative leading-[22px]">2</div>
      </div>
      <div className="w-pagination-controlheight rounded-pagination-borderradius h-pagination-controlheight flex flex-col items-center justify-center py-0 px-1.5 box-border">
        <div className="self-stretch relative leading-[22px]">3</div>
      </div>
      <div className="w-pagination-controlheight rounded-pagination-borderradius h-pagination-controlheight flex flex-col items-center justify-center py-0 px-1.5 box-border">
        <div className="self-stretch relative leading-[22px]">4</div>
      </div>
      <div className="w-pagination-controlheight rounded-pagination-borderradius h-pagination-controlheight flex flex-col items-center justify-center py-0 px-1.5 box-border">
        <div className="self-stretch relative leading-[22px]">5</div>
      </div>
      <div className="w-pagination-controlheight rounded-pagination-borderradius h-pagination-controlheight flex flex-col items-center justify-center py-0 px-1.5 box-border">
        <img className="w-3.5 relative h-3.5 overflow-hidden shrink-0" alt="" src="/icon--rightoutlined.svg" />
      </div>
    </div>);
};

export default ;
