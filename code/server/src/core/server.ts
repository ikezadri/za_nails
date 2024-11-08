import express, {
	type Router,
	type Express,
	type Request,
	type Response,
} from "express";
import http from 'node:http';
import HomepageRouter from "../router/homepage_router.js";
import NotFoundRouter from "../router/not_found_router.js";

class Server {
	// propiriétés
	private app: Express = express();
	private router: Router = express.Router();

	// constructeur
	constructor() {
		// relier le router à express
		this.app.use(this.router);

		// listes des routeurs
		this.routersList();
	}
	// méthodes
	private routersList = () => {
		//préfixe à toutes les routes d'un routeur 
		this.router.use('/', new HomepageRouter().getRoutes());
	// routeur des routes inexistantes doit être obligatoirement en dernière position
		this.router.use('*', new NotFoundRouter().getRoutes());
	};

    // créer  le serveur
    public create = () => {
        return http.createServer(this.app);
    };
}

export default Server;
