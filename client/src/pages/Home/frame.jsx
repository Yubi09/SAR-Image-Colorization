import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { handleSuccess } from '../../utils/toast';

const Frame = () => {
  const [loggedInUser, setLoggedInUser] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setLoggedInUser(localStorage.getItem('loggedInUser'));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    handleSuccess('Logged out successfully');
    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };

  return (
    <div className="w-full relative h-[502vh] overflow-hidden bg-[url('/Frame_3.png')] bg-cover bg-no-repeat bg-[top] flex gap-0 text-center text-base text-border-alternate font-heading-desktop-h5 hover:flex hover:w-full hover:h-[502vh]">
      <div className="absolute top-[21vh] left-[5vw] w-[39vw] h-[150vh] flex flex-col items-start justify-start gap-6 text-left text-37xl">
        <div className="self-stretch flex flex-col items-start justify-start gap-6">
          <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-[inherit]">
            Transforming SAR Images with Colorization Technology
          </h1>
          <h4 className="m-0 self-stretch relative text-lg leading-[150%] font-normal font-[inherit]">
            Experience the power of color in SAR images like never before.
          </h4>
        </div>
        <div className="flex flex-row items-start justify-start pt-4 px-0 pb-0">
          <div className="rounded-md border-border-alternate border-[1px] border-solid flex flex-row items-center justify-center py-3 px-6">
            <Link
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[150%] font-roboto text-border-alternate text-left inline-block no-underline"
              to={loggedInUser ? '/landing' : '/login'}
            >
              Convert Now
            </Link>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start pt-4 px-0 pb-0">
          {loggedInUser && (
            <div className="rounded-md border-border-alternate border-[1px] border-solid flex flex-row items-center justify-center py-3 px-6">
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[150%] font-roboto text-border-alternate text-left inline-block"
                onClick={handleLogout}
              >
                LOGOUT
              </button>
            </div>
          )}
        </div>
      </div>
      {loggedInUser ? (
        <div className="absolute top-[25px] left-[86vw] rounded-26xl border-border-alternate border-[3px] border-solid flex flex-row items-center justify-center py-2 px-5">
          Hello {loggedInUser.split(' ')[0]}!!
        </div>
      ) : (
        <div>
          <div className="absolute top-[25px] left-[86vw] rounded-26xl border-border-alternate border-[3px] border-solid flex flex-row items-center justify-center py-2 px-5">
            <Link
              className="[border:none] p-0 bg-[transparent] relative text-base leading-[150%] font-bold font-heading-desktop-h5 text-border-alternate text-left inline-block no-underline"
              disabled={true}
              to={'/signup'}
            >
              SIGNUP
            </Link>
          </div>
          <div className="absolute top-[28px] left-[76vw] rounded-[32px] flex flex-row items-center justify-end">
            <div className="rounded-26xl border-border-alternate border-[3px] border-solid flex flex-row items-center justify-center py-2 px-5">
              <Link
                className="[border:none] p-0 bg-[transparent] relative text-base leading-[150%] font-bold font-heading-desktop-h5 text-border-alternate text-left inline-block no-underline"
                disabled={true}
                onClick={handleLogout}
                to={'/login'}
              >
                LOGIN
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="absolute top-[120vh] left-[97px] w-[91vw] flex flex-row items-center justify-start gap-20">
        <img
          className="flex-1 relative max-w-full overflow-hidden h-[91vh] object-cover"
          alt=""
          src="/home_display.jpg"
        />
        <div className="flex-1 flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-start justify-start gap-4">
            <div className="relative leading-[150%] font-semibold">
              Transform
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-6 text-left text-29xl">
              <b className="self-stretch relative leading-[120%]">
                Revolutionize SAR Image Colorization Technology for Stunning
                Results
              </b>
              <div className="self-stretch relative text-lg leading-[150%]">
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
        className="absolute top-[294vh] left-[43vw] w-[14vw] h-[29vh] overflow-hidden object-cover"
        alt=""
        src="/arrow--arrow-right-lg@2x.png"
      />
      <div className="absolute top-[237vh] left-[23vw] w-[53vw] flex flex-col items-center justify-start gap-6 text-29xl">
        <b className="self-stretch relative leading-[120%]">
          Here’s an example
        </b>
        <div className="self-stretch relative text-lg leading-[150%]">
          This is what we do
        </div>
      </div>
      <img
        src={'/home_input_img.jpg'}
        className="absolute top-[269vh] left-[7vw] w-[30vw] h-[76vh]"
      />
      <img
        src={'/home_output_img.jpg'}
        className="absolute top-[269vh] left-[63vw] bg-border-default-default w-[30vw] h-[76vh]"
      />
      <b className="absolute top-[260vh] left-[7vw] text-13xl leading-[130%] inline-block w-[428px] h-[34px]">
        Input image
      </b>
      <b className="absolute top-[261vh] left-[63vw] text-13xl leading-[130%] inline-block w-[30vw] h-[34px]">
        Output image
      </b>
      <div className="absolute top-[374vh] left-[5vw] w-[91vw] flex flex-row items-start justify-start gap-20 text-right text-91xl text-text-primary">
        <div className="flex-1 overflow-hidden flex flex-col items-start justify-start text-left text-21xl">
          <b className="self-stretch relative leading-[120%]">
            Transform your black-and-white SAR images into vibrant, colorized
            masterpieces
          </b>
        </div>
        <b className="relative leading-[120%]">|</b>
        <div className="flex-1 overflow-hidden flex flex-col items-start justify-start">
          <b className="self-stretch relative leading-[120%]">About Us</b>
        </div>
      </div>
      <div className="absolute top-[406vh] left-[5vw] w-[91vw] h-80 flex flex-row items-start justify-center gap-12 text-left text-text-primary">
        <div className="flex-1 flex flex-col items-start justify-start gap-6">
          <img
            className="w-12 relative h-12 overflow-hidden shrink-0"
            alt=""
            src="/bullet.svg"
          />
          <b className="self-stretch relative text-5xl leading-[140%]">
            Securely handle your sensitive SAR images with confidence
          </b>
          <div className="self-stretch relative leading-[150%]">
            Our platform employs state-of-the-art security measures to protect
            your data at every step
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-2 px-0 pb-0 font-roboto">
            <div className="flex flex-row items-center justify-center gap-2"></div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-6">
          <img
            className="w-12 relative h-12 overflow-hidden shrink-0"
            alt=""
            src="/bullet.svg"
          />
          <b className="self-stretch relative text-5xl leading-[140%]">
            Effortlessly manage your colorization projects with our intuitive
            dashboard
          </b>
          <div className="self-stretch relative leading-[150%]">
            Track the progress of your images and easily access your colorized
            results
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-2 px-0 pb-0 font-roboto">
            <div className="flex flex-row items-center justify-center gap-2"></div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-6">
          <img
            className="w-12 relative h-12 overflow-hidden shrink-0"
            alt=""
            src="/bullet.svg"
          />
          <b className="self-stretch relative text-5xl leading-[140%]">
            Experience the power of SAR image colorization for yourself
          </b>
          <div className="self-stretch relative leading-[150%]">
            Unlock a new level of visual insight with our cutting-edge
            technology
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-2 px-0 pb-0 font-roboto">
            <div className="flex flex-row items-center justify-center gap-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
