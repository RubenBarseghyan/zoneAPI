import express from "express";
import { createZone, deleteZone, getZones } from "./zonerController"

const routerRouter = express.Router();

routerRouter.post("/zones", createZone);

routerRouter.delete("/zones/:id", deleteZone);

routerRouter.get("/zones", getZones);

export default routerRouter;