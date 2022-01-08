import mongoose from "mongoose";

/**
 * Schema for MongoDB
 */
const restaurantSchema = new mongoose.Schema(
  {
    id: { type: String, unique: true },
    title: String,
    content: String,
    dueDate: Date,
    status: String,
  },
  {
    collection: "restaurant",
  }
);

export default mongoose.model("restaurant", restaurantSchema);
