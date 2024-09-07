import "./LoginSignup.css";
import user_icon from "../../assets/person.png";
import email_icon from "../../assets/email.png";
import password_icon from "../../assets/password.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../../utils/toast";
export const LoginSignup = () => {
	const [confirmPassword, setConfirmPassword] = useState("");
	const [signupInfo, setSignupInfo] = useState({
		name: "",
		email: "",
		password: "",
	});

	const navigate = useNavigate();

	const handleSignup = async (e) => {
		e.preventDefault();
		const { name, email, password } = signupInfo;
		if (!name || !email || !password) {
			return handleError("All fields are required");
		}
		if (password !== confirmPassword) {
			return handleError("Passwords do not match");
		}
		try {
			const url = `http://localhost:9000/auth/signup`;
			const response = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(signupInfo),
			});

			const result = await response.json();

			const { success, message, error } = result;
			if (success) {
				handleSuccess(message);
				setTimeout(() => {
					navigate("/login");
				}, 1000);
			} else if (error) {
				const details = error?.details[0].message;
				handleError(details);
			} else if (!success) {
				handleError(message);
			}
			console.log(result);
		} catch (err) {
			handleError(err);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		console.log(name, value);
		const copySignupInfo = { ...signupInfo };
		copySignupInfo[name] = value;
		setSignupInfo(copySignupInfo);
	};

	return (
		<div className="w-full xxsm:h-[250vw] xsm:h-[90vw] imd:h-[80vw] md:h-[80vw] lg:h-[80vw] pr-[50px] xxsm:bg-[url('SignUp_mobile.png')] xsm:bg-[url('login_bg.png')] bg-cover bg-[top] login-container">
			<div className="absolute top-0 left-0 xsm:w-[50vw] xsm:p-[20px] text-left xxsm:w-full xxsm:p-[11px] image-overlay">
				<p className="xxsm:text-[30px] xsm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px] xsm:text-white xxsm:text-black pr-[20px] font-bold">
					Sign Up !
				</p>
			</div>
			<div className="absolute max-w-[500px] xxsm:h-[55vh] xsm:h-[80vw] sm:h-[70vw] md:h-[65vw] lg:h-[60vw] xl:h-[48vw] 2xl:h-[40vw] xxsm:w-[60vw] imd:w-[30vw] xl:w-full xxsm:top-[25vh] ism:top-[45vw] xsm:top-[10vw] xxsm:p-[15px] lg:p-[20px] xxsm:left-[15vw] xsm:left-[52vw] md:left-[60vw] xsm:w-[40vw] md:w-[30vw] login-form">
				<h2 className="xxsm:mb-[10px] md:mb-[20px] lg:text-[20px] xxsm:text-[12px] md:text-[16px]">
					Sign Up
				</h2>
				<form
					className="flex flex-col xxsm:gap-[0vw] md:gap-[1vw]"
					onSubmit={handleSignup}
				>
					<div className="mb-[15px]">
						<label
							className="block xxsm:mb-[3px] lg:mb-[5px] xxsm:text-[9px] md:text-[12px] lg:text-[15px]"
							htmlFor="name"
						>
							Name
						</label>
						<img
							className="mx-0 my-0 xxsm:w-[9px] md:w-[12px]  lg:w-[18px]"
							src={user_icon}
							alt=""
						/>
						<input
							className="w-full xxsm:p-[2px] lg:p-[8px] form-group-input"
							type="text"
							name="name"
							id="username"
							onChange={handleChange}
							autoFocus
							placeholder="Enter your name..."
							value={signupInfo.name}
						/>
					</div>
					<div className="mb-[15px]">
						<label
							className="block xxsm:mb-[3px] lg:mb-[5px] lg:text-[15px] xxsm:text-[9px] md:text-[12px]"
							htmlFor="email"
						>
							Email Address
						</label>
						<img
							className="mx-0 my-0 xxsm:w-[9px] md:w-[12px]  lg:w-[18px]"
							src={email_icon}
							alt=""
						/>
						<input
							className="w-full xxsm:p-[2px] lg:p-[8px] form-group-input"
							type="email"
							id="email"
							name="email"
							placeholder="Email"
							onChange={handleChange}
							value={signupInfo.email}
						/>
					</div>
					<div className="mb-[15px]">
						<label
							className="block xxsm:mb-[3px] lg:mb-[5px] lg:text-[15px] xxsm:text-[9px] md:text-[12px]"
							htmlFor="password"
						>
							Password
						</label>
						<img
							className="mx-0 my-0 xxsm:w-[9px] md:w-[12px]  lg:w-[18px]"
							src={password_icon}
							alt=""
						/>
						<input
							className="w-full xxsm:p-[2px] lg:p-[8px] form-group-input"
							type="password"
							id="password"
							name="password"
							placeholder="********"
							onChange={handleChange}
							value={signupInfo.password}
						/>
					</div>
					<div className="mb-[15px]">
						<label
							className="block xxsm:mb-[3px] lg:mb-[5px] lg:text-[15px] xxsm:text-[9px] md:text-[12px]"
							htmlFor="confirmPassword"
						>
							Confirm Password
						</label>
						<img
							className="mx-0 my-0 xxsm:w-[9px] md:w-[12px]  lg:w-[18px]"
							src={password_icon}
							alt=""
						/>
						<input
							className="w-full xxsm:p-[2px] lg:p-[8px] form-group-input"
							type="password"
							id="confirmPassword"
							name="confirmPassword"
							placeholder="********"
							onChange={(e) => setConfirmPassword(e.target.value)}
							value={confirmPassword}
						/>
					</div>
					<button
						className="xxsm:mt-[0vw] ism:mt-[0vw] sm:mt-[5vw] imd:mt-[5vw] lg:mt-[2vw] xl:mt-[2vw] 2xl:mt-[0vw] px-[10px] md:py-[18px] xxsm:py-[10px] xxsm:text-[12px] md:text-base w-full xl:top-[0px] button"
						type="submit"
					>
						Sign Up
					</button>
				</form>
				<h5>
					<span>Already have an account? </span>
					<Link className="text-black" to={"/login"}>
						Login
					</Link>
				</h5>
				<ToastContainer />
			</div>
		</div>
	);
};
