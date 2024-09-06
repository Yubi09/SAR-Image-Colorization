import React from "react";

export const LandingPage = () => {
    return (
      <div className="w-full relative xxsm:h-[150vw] ism:h-[125vw] overflow-hidden bg-[url('/public/frame-4@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-16xl text-border-alternate font-text-regular-normal">
        <div className="absolute top-[2vw] xxsm:left-[75vw] xsm:left-[80vw]">
          <div
            className="[border:none] p-0 bg-[transparent] relative ism:text-[20px] xxsm:text-base xsm:text-[25px] leading-[150%] font-bold font-text-regular-normal text-left inline-block text-black"
            disabled={true}
          >
            Profile
          </div>
          <img
          className="absolute xxsm:top-[8px]"
          alt=""
          src="downarrow.svg"
        />
        </div>
        <div className="absolute top-[2vw] left-[75vw] rounded-[32px] flex flex-row items-center justify-end gap-4">
          {/*<div className="border-color-neutral-black border-[1px] border-solid hidden flex-row items-center justify-center py-2 px-5">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[150%] font-roboto text-color-neutral-black text-left inline-block">
              Learn
            </button>
          </div>*/}
        
        </div>
        <b className="absolute top-[8vw] left-[5vw] inline-block w-[71vw] h-[12vw] xxsm:text-[20px] sm:text-[30px] lg:text-[40px] xl:text-[50px] 2xl:text-51xl">
          <p className="m-0">
            <span>
              <span>{`Seamlessly colorize `}</span>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span>{`your black-and-white `}</span>
              <span className="text-color-neutral-black">SAR images!</span>
            </span>
            <span className="text-color-neutral-black">
              <span className="text-[12px]">{` `}</span>
            </span>
          </p>
        </b>
        <b className="absolute xxsm:top-[32vw] ism:top-[28vw] xsm:top-[26vw] left-[5vw] xxsm:text-[15px] xsm:text-[19px] sm:text-[23px] lg:text-[30px] xl:text-[40px] 2xl:text-[50px] inline-block text-color-neutral-black w-[70vw] h-[4vw]">
          Here’s how you do it :
        </b>
        <div className="absolute xxsm:top-[40vw] ism:top-[34vw] xsm:top-[30vw] left-[5vw] rounded-31xl bg-chocolate-200 w-[82vw] ism:h-[51vw] xxsm:h-[65vw]" />
        <b className="absolute xxsm:top-[45vw] ism:top-[38vw] xsm:top-[33vw] xxsm:left-[9vw] xsm:left-[7vw] xxsm:text-[13px] ism:text-[15px] xsm:text-[19px] sm:text-[25px] lg:text-[35px] xl:text-[45px] 2xl:text-[56px] inline-block text-chocolate-100 w-[65vw] h-[21vw]">
          <ol className="m-0 font-inherit text-inherit pl-[5vw]">
            <li className="mb-0">Upload the black and white image</li>
            <li className="mb-0">Click on Submit</li>
            <li className="mb-0">Download the colorized image</li>
          </ol>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">Eg. :</p>
          <p className="m-0">&nbsp;</p>
        </b>
        <img
          className="absolute xxsm:top-[84vw] ism:top-[65vw] xsm:top-[60vw] lg:top-[58vw] xxsm:left-[40vw] xl:left-[37vw] xxsm:w-[10vw] xxsm:h-[10vw] xl:w-[13vw] xl:h-[13vw] overflow-hidden"
          alt=""
          src="/arrow--arrow-right-lg.svg"
        />
        <img
          className="absolute xxsm:top-[80vw] ism:top-[62vw] xsm:top-[58vw] left-[10vw] xxsm:w-[18vw] xxsm:h-[16vw] xsm:w-[20vw] xsm:h-[19vw] object-cover"
          alt=""
          src="/rectangle-336@2x.png"
        />
        <img
          className="absolute xxsm:top-[80vw] ism:top-[62vw] xsm:top-[58vw] left-[63vw] xxsm:w-[18vw] xxsm:h-[16vw] xsm:w-[20vw] xsm:h-[19vw] object-cover"
          alt=""
          src="/rectangle-337@2x.png"
        />
        <img
          className="absolute xxsm:top-[110vw] ism:top-[90vw] xsm:top-[84vw] left-[5vw] rounded-31xl w-[82vw] h-[27vw]"
          alt=""
          src="/rectangle-338.svg"
        />
        <div className="absolute xxsm:top-[120vw] ism:top-[99vw] xsm:top-[95vw] left-[18vw] w-[25vw] h-[6vw]">
          <div className="absolute top-[0px] left-[0px] rounded-xl bg-darkslategray w-[25vw] h-[6vw]" />
          <b className="absolute xxsm:top-[1.5vw] lg:top-[1vw] xxsm:left-[4vw] xl:left-[5vw] xxsm:text-[10px] ism:text-[12px] xsm:text-[15px] sm:text-[20px] lg:text-[30px] xl:text-[40px]">Upload image</b>
        </div>
        <div className="absolute xxsm:top-[120vw] ism:top-[99vw] xsm:top-[95vw] left-[54vw] w-[26vw] h-[6vw]">
          <div className="absolute top-[0px] left-[0px] rounded-xl bg-darkslategray w-[26vw] h-[6vw]" />
          <b className="absolute xxsm:top-[1.5vw] lg:top-[1vw] left-[9vw] inline-block w-[9vw] h-[2vw] xxsm:text-[10px] ism:text-[12px] xsm:text-[15px] sm:text-[20px] lg:text-[30px] xl:text-[40px]">
            Submit
          </b>
        </div>
        <div className="absolute xxsm:top-[130vw] ism:top-[108vw] xsm:top-[105vw] left-[38vw] w-[21vw] h-[5vw]">
          <div className="absolute top-[0px] left-[0px] rounded-xl bg-steelblue w-[21vw] h-[5vw]" />
          <b className="absolute xxsm:top-[1vw] left-[3vw] inline-block w-[11vw] h-8 xxsm:text-[10px] ism:text-[12px] xsm:text-[15px] sm:text-[20px] lg:text-[30px] xl:text-[40px]">
            Download
          </b>
        </div>
        <img
          className="absolute xxsm:top-[131vw] ism:top-[109vw] xsm:top-[106vw] left-[55vw] w-[3vw] h-[3vw] overflow-hidden"
          alt=""
          src="/interface--download.svg"
        />
        <img
          className="absolute h-[3.6%] w-[5.22%] xxsm:top-[75%] xsm:top-[72.23%] right-[45.82%] bottom-[24.18%] left-[45.96%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector.svg"
        />
      </div>
    );
  };
  

  