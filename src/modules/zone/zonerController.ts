import { Request, Response } from "express";
import Zone from "./zoneModel";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const createZone = async (req: Request, res: Response) => {
    try {
      await sleep(5000);
      const { name, points } = req.body;
      const zone = new Zone({ name, points });
      await zone.save();
      res.status(201).json(zone);
    } catch (error) {
      res.status(500).json({ error: "Error creating zone" });
    }
  };
  
  export const deleteZone = async (req: Request, res: Response) => {
    try {
      await sleep(5000);
      const { id } = req.params;
      await Zone.findByIdAndDelete(id);
      res.status(200).json({ message: "Zone deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Error deleting zone" });
    }
  };
  
  export const getZones = async (_req: Request, res: Response) => {
    try {
      await sleep(5000);
      const zones = await Zone.find();
      res.status(200).json(zones);
    } catch (error) {
      res.status(500).json({ error: "Error fetching zones" });
    }
  };