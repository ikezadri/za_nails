import { createBrowserRouter } from "react-router-dom";
import HomePage from "../page/HomePage";
import ContactPage from "../page/ContactPage";
import BaseLayout from "../layout/BaseLayout";

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
		],
	},
]);

export default router;
