import { createBrowserRouter } from "react-router-dom";
import HomePage from "../page/HomePage";
import ContactPage from "../page/ContactPage";
import BaseLayout from "../layout/BaseLayout";
import PrestationPage from "../page/PrestationPage";
import ReserverPage from "../page/ReserverPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <BaseLayout />,
		children: [
			{
				path: "",
				element: <HomePage />,
			},
			{
				path: "/contact",
				element: <ContactPage />,
			},
			{
				path: "/prestation",
				element: <PrestationPage />,
			},
			{
				path: "/reserver",
				element: <ReserverPage />,
			},
		],
	},
]);

export default router;
