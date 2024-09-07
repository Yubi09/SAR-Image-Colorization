import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleSuccess } from "../../utils/toast";
import { IoPowerOutline } from "react-icons/io5";
import { Tooltip } from "react-tooltip";
import Records from "../../components/records";

const Dashboard = () => {
	const [loggedInUser, setLoggedInUser] = useState("");
	const [images, setImages] = useState([]);
	const navigate = useNavigate();
	const token = localStorage.getItem("token");

	const handleLogout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("loggedInUser");
		handleSuccess("Logged out successfully");
		setTimeout(() => {
			navigate("/login");
		}, 1000);
	};

	useEffect(() => {
		setLoggedInUser(localStorage.getItem("loggedInUser"));

		const getData = async () => {
			try {
				const fetch_images = await fetch(
					"http://localhost:9000/upload",
					{
						method: "GET",
						headers: {
							auth: `bearer ${token}`,
						},
					}
				)
					.then((result) => result.json())
					.then((data) => data.imagePairs);
				console.log("images", fetch_images);
				setImages(fetch_images);
			} catch (err) {
				console.log("Error: ", err);
			}
		};
		if (token) {
			getData();
		}
	}, [token]);

	return (
		<>
			<div className="bg-gray-100 min-h-screen">
				<div className="mb-6 p-9 rounded-lg shadow-lg bg-blue-600 text-white">
					<h2 className="flex items-center justify-between text-2xl font-semibold">
						<span>
							Welcome to Your Dashboard,{" "}
							{loggedInUser.split(" ")[0]}!!
						</span>
						<div className="relative">
							<a id="not-clickable">
								<IoPowerOutline
									className="text-white text-2xl cursor-pointer"
									onClick={handleLogout}
								/>
							</a>
							<Tooltip anchorSelect="#not-clickable" clickable>
								Logout
							</Tooltip>
						</div>
					</h2>
				</div>
				{images.map((ele, i) => {
					const [date, inImg, outImg] = ele;
					const input_url = URL.createObjectURL(new Blob([inImg]));
					const output_url = URL.createObjectURL(new Blob([outImg]));
					return (
						<Records
							key={i}
							date={date}
							input_image={input_url}
							output_image={output_url}
						/>
					);
				})}
			</div>
		</>
	);
};

export default Dashboard;
