import { RestaurantModel, TagsModel } from "../db";

const Query = {
  /**
   * Get all tasks
   */
  restaurants: async (parent, query, { db, pubSub }) => {
    
  },
  restaurantDetail: async (parent, {restaurantId}, {db, pubSub})=>{

  },
  searchRestaurants: async (parent, {keyword}, {db, pubSub})=>{

  },
  files: async (parent, {userId}, {db, pubSub})=>{

  },
  collection: async (parent, {fileId}, {db, pubSub})=>{

  },
  bomb: async (parent, {userId}, {db, pubSub})=>{

  },
  searchTag: async (parent, {keyword}, {db, pubSub})=>{
    
    let tags;
    if(keyword === ""){
      let takeInOrOut = await TagsModel.find({"type": "takeInOrOut" });
      let place = await TagsModel.find({"type": "place" });
      let food = await TagsModel.find({"type": "food" });
      tags = [...takeInOrOut, ...place, ...food];
      
    }
    else{
      tags = await TagsModel.find({"name": {"$regex": keyword, "$options": "i"}}, function(err, docs){}).clone().catch(function(err){})
    } 
    // console.log(tags);
    return tags;
  }
};

export default Query;
