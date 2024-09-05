const Frame = () => {
  return (
    <div className="w-full relative:xxsm:h-[300vw] relative:xsm:h-[244vw]  overflow-hidden xxsm:bg-[url('Frame_6.png')] xsm:bg-[url('Frame_3.png')] bg-cover bg-no-repeat bg-[top] flex gap-0 text-center text-base text-border-alternate font-heading-desktop-h5 hover:flex hover:w-full xsm:h-[244vw] xxsm:h-[350vh] ism:h-[400vh]">
      <div className="absolute xxsm:top-[10vw] xxsm:left-[5vw] xxsm:w-[39vw] xxsm:h-[73vw] flex flex-col items-start justify-start gap-6 text-left text-37xl">
        <div className="self-stretch flex flex-col items-start justify-start xxsm:gap-3 md:gap-6">
          <h1 className="m-0 xxsm:pt-[34px] xsm:p-0 self-stretch relative xxsm:text-[30px] xsm:text-[20px] md:text-11xl lg:text-21xl xl:text-inherit leading-[120%] font-bold font-[inherit]">
            Transforming SAR Images with Colorization Technology
          </h1>
          <h4 className="m-0 self-stretch relative xxsm:text-[12px] xsm:text-[9px] md:text-[11px] lg:text-base xl:text-lg leading-[150%] font-normal font-[inherit]">
            Experience the power of color in SAR images like never before.
          </h4>
        </div>
        <div className="flex flex-row items-start justify-start xxsm:pt-0 md:pt-4 px-0 pb-0">
          <div className="rounded-lg border-border-alternate border-[1px] border-solid flex flex-row items-center justify-center xxsm:py-2 xxsm:px-4 md:py-3 md:px-6">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[150%] font-roboto xxsm:text-[9px] md:text-[12px] text-border-alternate text-left inline-block">
              Convert now
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-[25px] xxsm:left-[10vw] xsm:left-[80vw] lg:left-[86vw] rounded-26xl border-border-alternate border-[3px] border-solid flex flex-row items-center justify-center xxsm:py-1 xxsm:px-3 md:py-2 md:px-5">
        <button
          className="[border:none] p-0 bg-[transparent] relative xxsm:text-[12px] md:text-base leading-[150%] font-bold font-heading-desktop-h5 text-border-alternate text-left inline-block"
          disabled={true}
        >
          Sign Up
        </button>
      </div>
      <div className="absolute top-[25px] xxsm:left-[65vw] lg:left-[76vw] rounded-[32px] flex flex-row items-center justify-end">
        <div className="rounded-26xl border-border-alternate border-[3px] border-solid flex flex-row items-center justify-center xxsm:py-1 xxsm:px-3 md:py-2 md:px-5">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative xxsm:text-[12px] md:text-base leading-[150%] font-bold font-heading-desktop-h5 text-border-alternate text-left inline-block">
            Login
          </button>
        </div>
      </div>
      <div className="absolute xsm:top-[58vw] lg:top-[0vw] xxsm:left-[7vw] xxsm:w-[91vw] flex  xxsm:flex-col xsm:flex-row items-center justify-start gap-20">
        <img
          className="flex-1 relative max-w-full xxsm:top-[80vh] xsm:top-[0vw] md:top-[0vw] lg:top-[58vw] overflow-hidden xxsm:h-[44vw] object-cover"
          alt=""
          src="/home_display.jpg"
        />
        <div className="flex-1 flex flex-col items-start justify-start xsm:text-white xxsm:text-black">
          <div className="self-stretch flex flex-col items-start justify-start gap-4">
            <div className="relative leading-[150%] xxsm:left-[35vw] xsm:left-[0vw] xxsm:top-[75vh] xsm:top-[0vw] md:top-[0vw] lg:top-[58vw] xsm:text-[10px] md:text-[16px] font-semibold">
              Transform
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-6 text-left xxsm:text-[16px] md:text-[25px] lg:text-29xl">
              <b className="self-stretch relative leading-[120%] xxsm:text-center xsm:text-left xxsm:top-[75vh] xsm:top-[0vw] md:top-[0vw] lg:top-[58vw]">
                Revolutionize SAR Image Colorization Technology for Stunning
                Results
              </b>
              <div className="self-stretch relative xxsm:top-[75vh] xsm:top-[0vw] md:top-[0vw] lg:top-[58vw] xxsm:text-[12px] ism:text-[20px] xsm:text-[10px] md:text-[15px] lg:text-lg leading-[150%] xsm:text-left xxsm:text-center">
                Our cutting-edge SAR Image Colorization technology utilizes
                advanced algorithms to bring vibrant colors to black and white
                images. With our innovative solution, you can now transform your
                SAR images into stunning visual representations, enabling better
                analysis and interpretation.
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute xxsm:top-[217vh] xsm:top-[143vw] xxsm:left-[43vw] xxsm:w-[14vw] xxsm:h-[14vw] overflow-hidden object-cover"
        alt=""
        src="/arrow--arrow-right-lg@2x.png"
      />
      <div className="absolute xxsm:top-[115vw] xxsm:left-[23vw] xxsm:w-[53vw] flex flex-col items-center justify-start gap-6 text-29xl xsm:text-white xxsm:text-black">
        <b className="self-stretch relative leading-[120%] xsm:top-[0vw] xxsm:top-[110vh] xxsm:text-[20px] md:text-[40px]">
          Here’s an example
        </b>
        <div className="self-stretch relative xsm:top-[0vw] xxsm:top-[110vh] xxsm:text-[15px] md:text-lg leading-[150%]">
          This is what we do
        </div>
      </div>
      <img src={'/home_input_img.jpg'} className="absolute xxsm:top-[212vh] xsm:top-[135vw] xxsm:left-[7vw] xxsm:w-[30vw] xxsm:h-[37vw]" />
      <img src={'/home_output_img.jpg'} className="absolute xxsm:top-[212vh] xsm:top-[135vw] xxsm:left-[63vw] bg-border-default-default xxsm:w-[30vw] xxsm:h-[37vw]" />
      <b className="absolute xxsm:top-[208vh] xsm:top-[130vw] xxsm:left-[7vw] xxsm:text-[12px] xsm:text-[20px] lg:text-13xl leading-[130%] inline-block xxsm:w-[30vw] h-[34px]">
        Input image
      </b>
      <b className="absolute xxsm:top-[208vh] xsm:top-[130vw] xxsm:left-[63vw] xxsm:text-[12px] xsm:text-[20px] lg:text-13xl leading-[130%] inline-block xxsm:w-[30vw] h-[34px]">
        Output image
      </b>
      <div className="absolute xxsm:top-[240vh] ism:top-[250vh] xsm:top-[181vw] xxsm:left-[5vw] xxsm:w-[91vw] flex flex-row items-start justify-start gap-[20px] text-right text-91xl text-text-primary">
        <div className="flex-1 overflow-hidden flex flex-col items-start justify-start text-left text-21xl">
          <b className="self-stretch relative leading-[120%] xxsm:text-[10px] ism:text-[20px] xsm:text-[15px] sm:text-[20px] lg:text-[30px] xl:text-[50px]  xxsm:m-0 xxsm:p-0">
            Transform your black-and-white SAR images into vibrant, colorized
            masterpieces
          </b>
        </div>
        <b className="relative leading-[120%] xxsm:text-[30px] md:text-[50px] lg:text-[70px]">|</b>
        <div className="flex-1 overflow-hidden flex flex-col items-start justify-start">
          <b className="self-stretch relative leading-[120%] xxsm:text-[20px] xsm:text-[30px] ism:text-[35px] md:text-[50px] lg:text-[70px] xl:text-[90px]">About Us</b>
        </div>
      </div>
      <div className="absolute xxsm:top-[280vh] ism:top-[300vh] xsm:top-[197vw] xxsm:left-[5vw] xxsm:w-[91vw] xxsm:h-[15vw] md:h-[22vw] flex xxsm:flex-col xsm:flex-row items-start justify-center xxsm:gap-6 xsm:gap-12 text-left text-text-primary xxsm:pt-0 xsm:pt-2 sm:pt-6">
        <div className="flex-1 flex flex-col items-start justify-start xxsm:gap-3 md:gap-6">
          <img
            className="xxsm:w-8 lg:w-12 relative xxsm:h-8 lg:h-12 overflow-hidden shrink-0"
            alt=""
            src="/bullet.svg"
          />
          <b className="self-stretch relative xxsm:text-[13px] md:text-[18px] lg:text-5xl leading-[140%]">
            Securely handle your sensitive SAR images with confidence
          </b>
          <div className="self-stretch relative leading-[150%] xxsm:text-[9px] md:text-[16px]">
            Our platform employs state-of-the-art security measures to protect
            your data at every step
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-2 px-0 pb-0 font-roboto">
            <div className="flex flex-row items-center justify-center gap-2">
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start xxsm:gap-3 md:gap-6">
          <img
            className="xxsm:w-8 lg:w-12 relative xxsm:h-8 lg:h-12 overflow-hidden shrink-0"
            alt=""
            src="/bullet.svg"
          />
          <b className="self-stretch relative xxsm:text-[13px] md:text-[18px] lg:text-5xl leading-[140%]">
            Effortlessly manage your colorization projects with our intuitive
            dashboard
          </b>
          <div className="self-stretch relative xxsm:text-[9px] md:text-[16px] leading-[150%]">
            Track the progress of your images and easily access your colorized
            results
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-2 px-0 pb-0 font-roboto">
            <div className="flex flex-row items-center justify-center gap-2">
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start xxsm:gap-3 md:gap-6">
          <img
            className="xxsm:w-8 lg:w-12 relative xxsm:h-8 lg:h-12 overflow-hidden shrink-0"
            alt=""
            src="/bullet.svg"
          />
          <b className="self-stretch relative xxsm:text-[13px] md:text-[18px] lg:text-5xl leading-[140%]">
            Experience the power of SAR image colorization for yourself
          </b>
          <div className="self-stretch relative xxsm:text-[9px] md:text-[16px] leading-[150%]">
            Unlock a new level of visual insight with our cutting-edge
            technology
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-2 px-0 pb-0 font-roboto">
            <div className="flex flex-row items-center justify-center gap-2">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
