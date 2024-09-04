

const  = ({ className="" }) => {
  return (
    <div className={`w-full relative bg-menu-colorheadermenubg border-table-colorsplit border-b-[1px] border-solid box-border flex flex-col items-start justify-start text-left text-5xl text-border-alternate font-heading-heading-3 ${className}`}>
      <div className="self-stretch flex flex-row items-center justify-between py-0 px-padding">
        <div className="flex flex-row items-center justify-start gap-marginxs">
          <div className="flex flex-row items-center justify-start p-paddingxs">
            <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="/icon--menuoutlined.svg" />
          </div>
          <div className="flex flex-row items-center justify-start py-2.5 px-0 gap-menu-margin">
            <div className="flex flex-col items-center justify-center">
              <img className="w-[126px] relative h-6" alt="" src="/vector.svg" />
            </div>
            <div className="self-stretch w-px relative bg-coloritemtext" />
            <b className="relative leading-[32px]">出差申請系統</b>
          </div>
        </div>
        <div className="flex flex-row items-center justify-end py-2.5 px-0 gap-menu-margin text-center text-xs text-orange-6">
          <div className="flex flex-row items-center justify-start">
            <div className="flex flex-row items-center justify-start p-paddingxs">
              <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="/icon--belloutlined.svg" />
            </div>
            <div className="flex flex-row items-center justify-start p-paddingxs">
              <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="/icon--globaloutlined.svg" />
            </div>
          </div>
          <div className="w-px relative bg-coloritemtext h-8" />
          <div className="w-controlheightsm rounded-[96px] bg-orange-1 h-controlheightsm flex flex-col items-center justify-center">
            <div className="relative leading-[20px]">U</div>
          </div>
          <div className="flex flex-col items-center justify-start text-left text-sm text-border-alternate">
            <div className="flex flex-row items-center justify-start gap-button-marginxs">
              <div className="relative leading-[22px]">User Name</div>
              <img className="w-3.5 relative h-3.5 overflow-hidden shrink-0" alt="" src="/icon--downoutlined.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch [background:linear-gradient(rgba(255,_255,_255,_0),_rgba(255,_255,_255,_0)),_linear-gradient(90deg,_#9ac258,_#45a2cd)] h-1" />
    </div>);
};

export default ;
