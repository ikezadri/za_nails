import { Link } from "react-router-dom";
import styles from "../../assets/css/nav.module.css";
import { useRef, useState } from "react";

const Nav = () => {
	// les balises a sont remplacer par le composant Link
	// les attributs href sont remplacer par to
	// créer une référence : lien vers les éléments HTML remplace l'utilisation de querySelector / querySelectorAll

	const siteNav = useRef();

	const [navMobileIsVisible, setNavMobileIsVisible] = useState<boolean>(false);
	// clic sur le bouton de la navigation mobile
	const click = () => {
		setNavMobileIsVisible(!navMobileIsVisible);
		// console.log(navMobileIsVisible);
	};
	return (
		<>
			<nav
				className={`${styles["site-nav"]} ${navMobileIsVisible ? styles["site-nav-visible"] : ""}`}
				ref={siteNav}
			>
				<Link to={"/"}>Home</Link>
				<Link to={"/contact"}>Contact</Link>
			</nav>
			{}

			<button
				className={styles["btn-nav-mobile"]}
				type="button"
				onClick={click}
			>
				Prestation
			</button>
		</>
	);
};

export default Nav;
