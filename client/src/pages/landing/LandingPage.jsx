import React from 'react';
import { Link } from 'react-router-dom';

export const LandingPage = () => {
  const handleSubmit = (e) => {
    e.preventdefault();
  };

  return (
    <div className="w-full relative h-[1847px] overflow-hidden bg-[url('/frame-4@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-16xl text-border-alternate font-text-regular-normal">
      <div className="absolute top-[32px] left-[1140px] rounded-[32px] flex flex-row items-center justify-end gap-4">
        <div className="border-color-neutral-black border-[1px] border-solid hidden flex-row items-center justify-center py-2 px-5">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[150%] font-roboto text-color-neutral-black text-left inline-block">
            Learn
          </button>
        </div>
        <div className="rounded-26xl border-border-alternate border-[3px] border-solid flex flex-row items-center justify-center py-2 px-5">
					<Link className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[150%] font-bold font-text-regular-normal text-border-alternate text-left inline-block no-underline"
					to={"/home"}
					>
            HOME
          </Link>
        </div>
      </div>
      <b className="absolute top-[123px] left-[81px] inline-block w-[1079px] h-[188px] text-51xl">
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
      <b className="absolute top-[342px] left-[81px] text-[50px] inline-block text-color-neutral-black w-[1071px] h-[63px]">
        Here’s how you do it :
      </b>
      <div className="absolute top-[456px] left-[81px] rounded-31xl bg-chocolate-200 w-[1253px] h-[780px]" />
      <b className="absolute top-[503px] left-[147px] text-[56px] inline-block text-chocolate-100 w-[993px] h-[328px]">
        <ol className="m-0 font-inherit text-inherit pl-[75px]">
          <li className="mb-0">Upload the black and white image</li>
          <li className="mb-0">Click on Submit</li>
          <li className="mb-0">Download the colorized image</li>
        </ol>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">Eg. :</p>
        <p className="m-0">&nbsp;</p>
      </b>
      <img
        className="absolute top-[889px] left-[568px] w-[200px] h-[200px] overflow-hidden"
        alt=""
        src="/arrow--arrow-right-lg.svg"
      />
      <img
        className="absolute top-[889px] left-[147px] w-64 h-56 object-cover"
        alt=""
        src="/rectangle-336@2x.png"
      />
      <img
        className="absolute top-[889px] left-[964px] w-64 h-56 object-cover"
        alt=""
        src="/rectangle-337@2x.png"
      />
      <img
        className="absolute top-[1287px] left-[81px] rounded-31xl w-[1253px] h-[421px]"
        alt=""
        src="/rectangle-338.svg"
      />

      <form
        action="http://localhost:3001/upload"
        method="post"
        id="imageForm"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <input type="file" id="imageInput" name="image" />
        <label htmlFor="imageInput">
          <div className="upload_button">
            <div className="absolute top-[1453px] left-[281px] w-[387px] h-[89px]">
              <div className="absolute top-[0px] left-[0px] rounded-xl bg-darkslategray w-[387px] h-[89px]" />
              <b className="absolute top-[16px] left-[82px]">Upload image</b>
            </div>
          </div>
        </label>
        <div
          className="submit_button"
          onClick={() => document.getElementById('imageForm').submit()}
        >
          <div className="absolute top-[1453px] left-[826px] w-[391px] h-[89px]">
            <div className="absolute top-[0px] left-[0px] rounded-xl bg-darkslategray w-[391px] h-[89px]" />
            <b className="absolute top-[25px] left-[138px] w-[150.1px] h-[43.9px] text-2xl text-white">
              Submit
            </b>
          </div>
        </div>
      </form>

      <div className="download_button">
        <div className="absolute top-[1593px] left-[580px] w-[326px] h-[84px]">
          <div className="absolute top-[0px] left-[0px] rounded-xl bg-steelblue w-[326px] h-[84px]" />
          <b className="absolute top-[16px] left-[53px] inline-block w-[180px] h-8">
            Download
          </b>
        </div>
        <img
          className="absolute top-[1609px] left-[826px] w-[47px] h-[47px] overflow-hidden"
          alt=""
          src="/interface--download.svg"
        />
      </div>
      <img
        className="absolute h-[3.6%] w-[5.22%] top-[72.23%] right-[45.82%] bottom-[24.18%] left-[48.96%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector.svg"
      />
    </div>
  );
};
