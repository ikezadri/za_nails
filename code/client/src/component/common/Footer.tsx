import { Link } from "react-router-dom";
import styles from "../../assets/css/footer.module.css";

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
