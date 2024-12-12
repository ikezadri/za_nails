import Header from "../component/common/Header";
import Footer from "../component/common/Footer";
import RolesList from "../component/home/RolesList";


const HomePage = () => {
	//    fragment : balise sans nom (anonyme) = <> </>
	return (
		<div className="container">
			<h1>Coucou la chienneté</h1>
			<RolesList />
		</div>
	);
};

export default HomePage;
