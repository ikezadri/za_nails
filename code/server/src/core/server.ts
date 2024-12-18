import express, {
	type Router,
	type Express,
	type Request,
	type Response,
} from "express";
import http from "node:http";
import HomepageRouter from "../router/homepage_router.js";
import NotFoundRouter from "../router/not_found_router.js";
import RolesRouter from "../router/roles_router.js";
import cors from "cors";
import BookingRouter from "../router/booking_router.js";
import CommentaryRouter from "../router/commentary_router.js";
import UserRouter from "../router/user_router.js";
import ModelRouter from "../router/model_router.js";
import TypesRouter from "../router/types_router.js";
import ContactRouter from "../router/contact_router.js";

class Server {
	// propiriétés
	private app: Express = express();
	private router: Router = express.Router();

	// constructeur
	constructor() {
		this.app.use(cors());
		// relier le router à express
		this.app.use(this.router);

		// listes des routeurs
		this.routersList();
	}
	// méthodes
	private routersList = () => {
		//préfixe à toutes les routes d'un routeur
		this.router.use("/", new HomepageRouter().getRoutes());
		this.router.use("/roles", new RolesRouter().getRoutes());
		this.router.use("/booking", new BookingRouter().getRoutes());
		this.router.use("/commentary", new CommentaryRouter().getRoutes());
		this.router.use("/types", new TypesRouter().getRoutes());
		this.router.use("/user", new UserRouter().getRoutes());
		this.router.use("/model", new ModelRouter().getRoutes());
		this.router.use("/contact", new ContactRouter().getRoutes());
		

		// routeur des routes inexistantes doit être obligatoirement en dernière position
		this.router.use("*", new NotFoundRouter().getRoutes());
	};

	// créer  le serveur
	public create = () => {
		return http.createServer(this.app);
	};
}

export default Server;
