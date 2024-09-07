import React from 'react'
import './LoginSignup.css'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

export const Login = () => {
  return (
    <div className="w-full xxsm:h-[250vw] xsm:h-[90vw] imd:h-[80vw] md:h-[70vw] lg:h-[55vw] pr-[50px] xxsm:bg-[url('SignUp_mobile.png')] xsm:bg-[url('login_bg.png')] md:bg-[url('SignUp_Login.png')] bg-cover bg-[top] login-container">
        <div className="absolute top-0 left-0 xsm:w-[50vw] xsm:p-[20px] text-left xxsm:w-full xxsm:p-[11px] image-overlay">
        <p className="xxsm:text-[30px] xsm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px] xsm:text-white xxsm:text-black pr-[20px] font-bold">Login </p>
      </div>
    <div className="absolute max-w-[500px] xxsm:h-[48vh] xsm:h-[47vw] md:h-[43vw] lg:h-[36vw] xl:h-[30vw] 2xl:h-[23vw] xxsm:w-[60vw] imd:w-[30vw] xl:w-full xxsm:top-[25vh] ism:top-[45vw] xsm:top-[10vw] xxsm:p-[15px] lg:p-[20px] xxsm:left-[15vw] xsm:left-[52vw] md:left-[60vw] xsm:w-[40vw] md:w-[30vw] login-form">
      <h2 className="xxsm:mb-[10px] md:mb-[20px] lg:text-[20px] xxsm:text-[12px] md:text-[16px]">Login</h2>
      <form className="flex flex-col xxsm:gap-[0vw] md:gap-[1vw]">
        <div className="mb-[15px]">
          <label className="block xxsm:mb-[3px] lg:mb-[5px] xxsm:text-[9px] md:text-[12px] lg:text-[15px]" htmlFor="email">Email Address</label>
          <img className="mx-0 my-0 xxsm:w-[9px] md:w-[12px]  lg:w-[18px]" src={email_icon} alt="" />
          <input className="w-full xxsm:p-[2px] lg:p-[8px] form-group-input" type="email" id="email" />
        </div>
        <div className="mb-[15px]">
          <label className="block xxsm:mb-[3px] lg:mb-[5px] lg:text-[15px] xxsm:text-[9px] md:text-[12px]" htmlFor="password">Password</label>
          <img className="mx-0 my-0 xxsm:w-[9px] md:w-[12px]  lg:w-[18px]" src={password_icon} alt="" />
          <input className="w-full xxsm:p-[2px] lg:p-[8px] form-group-input" type="password" id="password" />
        </div>
        <button className="xxsm:mt-[6vw] ism:mt-[0vw] sm:mt-[5vw] imd:mt-[5vw] lg:mt-[2vw] xl:mt-[2vw] 2xl:mt-[0vw] px-[10px] md:py-[18px] xxsm:py-[10px] xxsm:text-[12px] md:text-base w-full md:top-[0px] button" type="submit">Login</button>
      </form>
    </div>
  </div>
  )
}
