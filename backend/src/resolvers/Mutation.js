import { RestaurantModel, TagsModel } from "../models/db";

const Mutation = {
  /**
   * Add a task
   */
  createRestaurant: async (parent, {input}, { db, pubSub }) => {
    const newRestaurant = new RestaurantModel(input);
    await newRestaurant.save();

    return newRestaurant;
  },
  
  createTag: async (parent, { input }, { db, pubSub }) => {
    const newTag = new TagsModel(input);
    await newTag.save();
    return newTag;
  },
  
};

export default Mutation;
