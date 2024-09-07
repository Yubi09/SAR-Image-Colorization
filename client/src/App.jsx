import {
	Navigate,
	BrowserRouter,
	Route,
	Routes,
	useNavigationType,
	useLocation,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/Home";
import "./App.css";
import Auth from "./pages/Login";
import { LoginSignup } from "./pages/Signup";
import { LandingPage } from "./pages/landing/LandingPage";
import { useState, useEffect } from "react";
import RefreshHandler from "./components/RefreshHandler";
import Dashboard from "./pages/Dashboard";

const App = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const PrivateRoute = ({ element }) => {
		return isAuthenticated ? element : <Navigate to="/login" />;
	};
	// const action = useNavigationType();
	// const location = useLocation();
	// const pathname = location.pathname;

	// useEffect(() => {
	// 	if (action !== "POP") {
	// 		window.scrollTo(0, 0);
	// 	}
	// }, [action, pathname]);

	// useEffect(() => {
	// 	let title = "";
	// 	let metaDescription = "";

	// 	switch (pathname) {
	// 		case "/":
	// 			title = "";
	// 			metaDescription = "";
	// 			break;
	// 	}

	// 	if (title) {
	// 		document.title = title;
	// 	}

	// 	if (metaDescription) {
	// 		const metaDescriptionTag = document.querySelector(
	// 			'head > meta[name="description"]'
	// 		);
	// 		if (metaDescriptionTag) {
	// 			metaDescriptionTag.content = metaDescription;
	// 		}
	// 	}
	// }, [pathname]);

	return (
		<div>
			<RefreshHandler setIsAuthenticated={setIsAuthenticated} />
			<Routes>
				<Route path="*" element={<Navigate to={"/home"} />} />
				<Route path="/home" element={<HomePage />} />
				<Route path="/signup" element={<LoginSignup />} />
				<Route path="/login" element={<Auth />} />
				<Route
					path="/landing"
					element={<PrivateRoute element={<LandingPage />} />}
				/>
				<Route
					path="/dashboard"
					element={<PrivateRoute element={<Dashboard />} />}
				/>
			</Routes>
		</div>
	);
};

export default App;
