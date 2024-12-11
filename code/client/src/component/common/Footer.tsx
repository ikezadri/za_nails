import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer>
			<Link to={"/"}>Home</Link>
            <Link to={"/"}>Legals</Link>
			<Link to={"/contact"}>Contact</Link>
		</footer>
	);
};

export default Footer;
