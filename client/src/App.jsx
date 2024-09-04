import {
	Navigate,
	BrowserRouter,
	Route,
	Routes,
	useNavigationType,
	useLocation,
} from "react-router-dom";

import HomePage from "./pages/Home";
import "./App.css";
import Auth from "./pages/Login";
import { LoginSignup } from "./pages/Signup";
import { LandingPage } from "./pages/landing/LandingPage";

function App() {
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
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to={"/login"} />} />
				<Route path="/landing" element={<LandingPage />} />
				<Route path="/home" element={<HomePage />} />
				<Route path="/signup" element={<LoginSignup />} />
				<Route path="/login" element={<Auth />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
