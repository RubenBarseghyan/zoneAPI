import mongoose, { Schema, Document } from "mongoose";

interface IZone extends Document {
  name: string;
  points: number[][];
}

const ZoneSchema = new Schema<IZone>({
  name: { type: String, required: true },
  points: { type: [[Number]], required: true },
});

const Zone = mongoose.model<IZone>("Zone", ZoneSchema);

export default Zone;