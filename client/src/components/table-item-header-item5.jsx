

const  = ({ className="" }) => {
  return (
    <div className={`flex-1 w-full relative flex flex-row items-center justify-start text-left text-sm text-pagination-colortext font-heading-heading-3 ${className}`}>
      <div className="flex-1 bg-table-colorfillalter border-table-colorsplit border-b-[1px] border-solid flex flex-row items-center justify-start py-table-paddingcontentverticallg px-0">
        <div className="flex-1 border-table-colorsplit border-r-[0.5px] border-solid border-table-colorsplit border-l-[0.5px] border-solid flex flex-row items-center justify-start py-0 px-table-padding gap-2">
          <b className="flex-1 relative leading-[22px]">時間</b>
          <img className="w-2 relative h-3" alt="" src="/sort.svg" />
        </div>
      </div>
    </div>);
};

export default ;
