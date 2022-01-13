import { RestaurantModel, TagsModel } from "../db";

const Mutation = {
  createRestaurant: async (parent, {title, tags, photo, link}, { db, pubSub }) => {
    // const newRestaurant = new RestaurantModel(input);
    // await newRestaurant.save();
    // return newRestaurant;
  },
  createTag: async (parent, { type, name }, { db, pubSub }) => {
    // const newTag = new TagsModel(input);
    // await newTag.save();
    // return newTag;
  },
  createFile: async (parent, { userId, title }, {db, pubSub})=>{

  },
  addBomb: async (parent, {userId, restaurantId}, {db, pubSub})=>{

  },
  addCollection: async(parent,{userId, restaurantId, fileId })=>{

  },
  addComment: async(parent, {userID, restaurantId, content, star}, {db, pubSub})=>{
    
  }
};

export default Mutation;
