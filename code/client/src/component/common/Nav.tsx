import { Link } from "react-router-dom";

const Nav = () => {
    // les balises a sont remplacer par le composant Link
    // les attributs href sont remplacer par to
    return <nav>
        <Link to={ "/"}>Home</Link>
        <Link to={ "/contact"}>Contact</Link>
    </nav>
};

export default Nav;