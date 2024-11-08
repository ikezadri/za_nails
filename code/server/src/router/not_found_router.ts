import express, {type Request, type Response} from "express";
import NotFoundController from "../controller/not_found_controller.js";

class NotFoundRouter{
    // propiétés
    private router = express.Router();

    // méthodes
    public getRoutes = () => {
        this.router.get("/", new NotFoundController().index);

        return this.router;
    }
}

export default NotFoundRouter;