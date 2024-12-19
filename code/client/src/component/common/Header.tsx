import Nav from "./Nav";

// import d'un CSS d'un composant
import styles from "../../assets/css/header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className={styles["site-header"]}>
			<div className={styles["site-logo"]}>
				{/* utiliser / pour cibler le dossier public */}
				<Link to={"/"}>
					<img src="/img/za.nails.png" alt="" />
				</Link>
			</div>
			<button className={styles["btn-nav-mobile"]} type="button">Réservation</button>
			<Nav />
		</header>
	);
};

export default Header;
