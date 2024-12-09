import express, {type Request, type Response} from "express";
import TypesModelController from "../controller/roles_controller.js";

class TypesModelRouter{
    // propiétés
    private router = express.Router();

    // méthodes
    public getRoutes = () => {
        this.router.get("/", new TypesModelController().index);
        this.router.get("/:id", new TypesModelController().one);

        return this.router;
    }
}

export default TypesModelRouter;