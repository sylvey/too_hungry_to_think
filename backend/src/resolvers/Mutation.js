import { RestaurantModel, TagsModel, upload } from "../db";
// import { uploadFile } from "./utility";
const Mutation = {
  createRestaurant: async (parent, {input}, { db, pubSub }) => {
    const newRestaurant = new RestaurantModel({
      id: input.id, 
      title: input.title, 
      link: input.link, 
      photo: input.photo,
      tagIds: input.tagIds,
      comments: [], 
      stars: 0
    });
    await newRestaurant.save();
    // console.log(newRestaurant);
    let tags = await TagsModel.find({});
    tags = tags.filter(tag => newRestaurant.tagIds.includes(tag.id));
    // console.log(tags);

    let restaurantsToReturn = {
      id: newRestaurant.id, 
      title: newRestaurant.title, 
      stars: newRestaurant.stars,
      photo: newRestaurant.photo,
      link: newRestaurant.link,
      tags: tags,
      comments: newRestaurant.comments
    }
    return restaurantsToReturn;
  },
  createTag: async (parent, { id, type, name }, { db, pubSub }) => {
    const newTag = new TagsModel({id, type, name});
    await newTag.save();
    return newTag;
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
