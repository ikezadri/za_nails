import express, {type Request, type Response} from "express";
import BookingController from "../controller/booking_controller.js";

class BookingRouter{
    // propiétés
    private router = express.Router();

    // méthodes
    public getRoutes = () => {
        this.router.get("/", new BookingController().index);
        this.router.get("/:id", new BookingController().one);

        return this.router;
    }
}

export default BookingRouter;