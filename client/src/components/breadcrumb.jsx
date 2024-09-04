

const  = ({ className="" }) => {
  return (
    <div className={`relative w-full flex flex-row items-center justify-start text-left text-sm text-breadcrumb-colortextdescription font-heading-heading-3 ${className}`}>
      <div className="rounded-breadcrumb-borderradiussm flex flex-row items-center justify-start py-0 px-breadcrumb-paddingxxs">
        <div className="relative leading-[22px]">Homepage</div>
      </div>
      <div className="overflow-hidden flex flex-row items-center justify-start py-0 px-breadcrumb-marginxxs">
        <div className="flex flex-col items-start justify-start">
          <div className="relative leading-[22px]">/</div>
        </div>
      </div>
      <div className="rounded-breadcrumb-borderradiussm flex flex-row items-center justify-start py-0 px-breadcrumb-paddingxxs">
        <div className="relative leading-[22px]">差旅</div>
      </div>
      <div className="overflow-hidden flex flex-row items-center justify-start py-0 px-breadcrumb-marginxxs">
        <div className="flex flex-col items-start justify-start">
          <div className="relative leading-[22px]">/</div>
        </div>
      </div>
      <div className="rounded-breadcrumb-borderradiussm flex flex-row items-center justify-start py-0 px-breadcrumb-paddingxxs text-pagination-colortext">
        <div className="relative leading-[22px]">出差申請</div>
      </div>
    </div>);
};

export default ;
