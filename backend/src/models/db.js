import mongoose from "mongoose";

/**
 * Task Schema for MongoDB
 */
const restaurantSchema = new mongoose.Schema(
  {
    id: { type: String, unique: true },
    title: String,
    stars: Number,
    link: String,
    tags: [{type: mongoose.Types.ObjectId, ref: "Tag"}],
  },
  {
    collection: "restaurant",
  }
);

const tagSchema = new mongoose.Schema(
    {
        id: {type: String, unique: true},
        type: String,
        name: String,
    },
    {
        collation: "tag",
    }
)

const TagsModel = mongoose.model("Tag", tagSchema);
const RestaurantModel = mongoose.model("Restaurant", restaurantSchema);


export {TagsModel, RestaurantModel};
