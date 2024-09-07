import { useState, useRef } from "react";

const InputStyle = () => {
	return (
		<div className="flex flex-col items-center justify-center pt-5 pb-6">
			<svg
				className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 20 16"
			>
				<path
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
				/>
			</svg>
			<p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
				<span className="font-semibold">Click to upload</span> or drag
				and drop
			</p>
			<p className="text-xs text-gray-500 dark:text-gray-400">
				SVG, PNG, JPG or GIF (MAX. 800x400px)
			</p>
		</div>
	);
};

export const LandingPage = () => {
	const fileInputRef = useRef(null);
	const [image, setImage] = useState(null);
	const [genImageUrl, setGenImageUrl] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const handleImageUpload = (event) => {
		if (event.target.files) {
			setImage(event.target.files[0]);
			setGenImageUrl(null);
		}
	};

	const handleConvert = async () => {
		console.log("submit was clicked");
		if (!image) return;

		setIsLoading(true);

		const formData = new FormData();
		formData.append("image", image);

		try {
			const response = await fetch(`http://localhost:9000/upload`, {
				method: "POST",
				body: formData,
			});

			console.log("Image received");

			const blob = await response.blob();
			const url = URL.createObjectURL(blob);
			setGenImageUrl(url);
		} catch (e) {
			console.log("error:", e);
		} finally {
			setIsLoading(false);
		}
	};

	const handleDownload = () => {
		const link = document.createElement("a");
		link.href = genImageUrl;
		link.download = "converted-image.png";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<div className="w-full relative h-[1847px] overflow-x-auto bg-[url('/frame-4@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-16xl text-border-alternate font-text-regular-normal">
			<div className="absolute top-[29px] left-[1284px] rounded-26xl border-border-alternate border-[3px] border-solid flex flex-row items-center justify-center py-2 px-5">
				<button
					className="[border:none] p-0 bg-[transparent] relative text-base leading-[150%] font-bold font-text-regular-normal text-border-alternate text-left inline-block"
					disabled={true}
				>
					Sign Up
				</button>
			</div>
			<div className="absolute top-[32px] left-[1140px] rounded-[32px] flex flex-row items-center justify-end gap-4">
				<div className="border-color-neutral-black border-[1px] border-solid hidden flex-row items-center justify-center py-2 px-5">
					<button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[150%] font-roboto text-color-neutral-black text-left inline-block">
						Learn
					</button>
				</div>
				<div className="rounded-26xl border-border-alternate border-[3px] border-solid flex flex-row items-center justify-center py-2 px-5">
					<button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[150%] font-bold font-text-regular-normal text-border-alternate text-left inline-block">
						Login
					</button>
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
						<span className="text-color-neutral-black">
							SAR images!
						</span>
					</span>
					<span className="text-color-neutral-black">
						<span className="text-[12px]">{` `}</span>
					</span>
				</p>
			</b>
			<div className="image_conversion">
				<img
					className="absolute top-[310px] left-[81px] rounded-31xl w-[1253px] h-[430px]"
					alt=""
					src="/rectangle-338.svg"
				/>
				<div className="absolute top-[360px] left-[81px] rounded-31xl w-[1253px] h-[421px] flex flex-col items-center justify-content">
					<div className="w-1/2 flex flex-col items-center p-4 border-dashed border-2 border-black-300 rounded-lg">
						{!image && (
							<div class="flex items-center justify-center w-full">
								<label
									for="dropzone-file"
									className="flex flex-col items-center justify-center h-40 w-80 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
								>
									{!image && <InputStyle />}
									<input
										id="dropzone-file"
										type="file"
										ref={fileInputRef}
										className="hidden"
										onChange={handleImageUpload}
									/>
								</label>
							</div>
						)}

						{image && (
							<div className="mb-4 border-2 border-black flex flex-row gap-20">
								<img
									src={URL.createObjectURL(image)}
									alt="selected preview"
									className="max-w-40 h-auto border-2 border-black"
								/>
								{genImageUrl && (
									<img
										src={genImageUrl}
										alt="Converted Preview"
										className="max-w-40 h-auto border"
									/>
								)}
							</div>
						)}
						<div className="image_buttons flex p-3 gap-5">
							<button
								onClick={() => {
									if (fileInputRef.current) {
										fileInputRef.current.click();
									} else {
										setImage(null);
										setGenImageUrl(null);
									}
								}}
								className="mt-4 px-4 py-2 text-white text-white rounded-xl bg-darkslategray w-[100px] h-[40px] disabled:opacity-50"
							>
								{" "}
								{image ? "Remove" : "Upload"}
							</button>
							<button
								onClick={handleConvert}
								className="mt-4 px-4 py-2 text-white rounded-xl bg-darkslategray w-[100px] h-[40px] disabled:opacity-50"
								disabled={!image || isLoading}
							>
								{isLoading ? "Converting..." : "Convert"}
							</button>
							{genImageUrl && (
								<button
									onClick={handleDownload}
									className="mt-4 px-4 py-2 text-white text-white rounded-xl bg-darkslategray w-[110px] h-[50px]"
								>
									Download Image
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
			<div className="absolute top-[790px] left-[81px] rounded-31xl bg-chocolate-200 w-[1253px] h-[780px]" />
			<b className="absolute top-[800px] left-[147px] text-[56px] inline-block text-chocolate-100 w-[993px] h-[328px]">
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
				className="absolute top-[1050px] left-[568px] w-[200px] h-[200px] overflow-hidden"
				alt=""
				src="/arrow--arrow-right-lg.svg"
			/>
			<img
				className="absolute top-[1050px] left-[147px] w-64 h-56 object-cover"
				alt=""
				src="/rectangle-336@2x.png"
			/>
			<img
				className="absolute top-[1050px] left-[964px] w-64 h-56 object-cover"
				alt=""
				src="/rectangle-337@2x.png"
			/>
		</div>
	);
};
