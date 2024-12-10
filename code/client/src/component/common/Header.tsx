import Nav from "./Nav";

// import d'un CSS d'un composant
import styles from "../../assets/css/header.module.css";

const Header = () => {
    return (
     <header className={styles["site-header"]}>
        <Nav />
     </header>
    );
};

export default Header;