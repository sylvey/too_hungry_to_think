import { RestaurantModel, TagsModel } from "../db";
import { downloadFile } from "./utility";

const Query = {
  restaurants: async (parent, query, { db, pubSub }) => {
    const restaurants = await RestaurantModel.find({});

    let result = [];
    let tags = await TagsModel.find({});
    // console.log(restaurants);
    for(let i = 0; i < restaurants.length; i++){
      let newtags = tags.filter(tag => restaurants[i].tagIds.includes(tag.id));
      console.log(newtags);
      result.push({
        id: restaurants[i].id,
        title: restaurants[i].title,
        stars: restaurants[i].stars,
        photo: restaurants[i].photo,
        tags: newtags,
        link: restaurants[i].link,
        comments: restaurants[i].comments
      }); 
    }
    console.log(tags, result);

    return result;
  },
  image: async (parent, {imageId}, { db, pubSub }) => {
    try {
      const img = await downloadFile(fileId);
      return img;
    } catch (error) {
      throw new Error(error);
    }
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
