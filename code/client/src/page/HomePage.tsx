import { Link } from "react-router-dom";
import RolesList from "../component/home/RolesList";
import styles from "../assets/css/homepage.module.css"

const HomePage = () => {
	//    fragment : balise sans nom (anonyme) = <> </>
	return (
		<>
			<h1>Coucou la chienneté</h1>
			<RolesList />
			<div className={styles.serpent}>
                {/* utiliser / pour cibler le dossier public */}
                <Link to={"/"}>
                    <img src="/img/serpent.jpg" alt="" />
                </Link>
            </div>
		</>
		
	);
};

export default HomePage;
