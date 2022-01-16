import { RestaurantModel, TagsModel,FileModel, UserModel } from "../db";
// import { downloadFile } from "./utility";

const Query = {
  restaurants: async (parent, query, { db, pubSub }) => {
    const restaurants = await RestaurantModel.find({});

    let result = [];
    let tags = await TagsModel.find({});
    // console.log(restaurants);
    for(let i = 0; i < restaurants.length; i++){
      let newtags = tags.filter(tag => restaurants[i].tagIds.includes(tag.id));
      // console.log(newtags);
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
  restaurantDetail: async (parent, {restaurantId}, {db, pubSub})=>{
    console.log(restaurantId);
    const restaurant = await RestaurantModel.findOne({id: restaurantId});

    // let restaurantDetailReturn = {};
    let tags = await TagsModel.find({});
    let result = {};
    if(restaurant){
        let newtags = tags.filter(tag => restaurant.tagIds.includes(tag.id));
        result = {
            id: restaurant.id,
            title: restaurant.title,
            stars:restaurant.stars,
            photo: restaurant.photo,
            tags: newtags,
            link: restaurant.link,
            comments: restaurant.comments
        }
    }
    console.log(result);
    return result;
  },
  searchRestaurants: async (parent, {keyword}, {db, pubSub})=>{
    const restaurants = await RestaurantModel.find({});
    console.log(keyword);
    let restaurantsAllReturnType = [];
    let tags = await TagsModel.find({});
    // console.log(restaurants);
    for(let i = 0; i < restaurants.length; i++){
      let newtags = tags.filter(tag => restaurants[i].tagIds.includes(tag.id));
      // console.log(newtags);
      restaurantsAllReturnType.push({
        id: restaurants[i].id,
        title: restaurants[i].title,
        stars: restaurants[i].stars,
        photo: restaurants[i].photo,
        tags: newtags,
        link: restaurants[i].link,
        comments: restaurants[i].comments
      }); 
    }
    
    let result = restaurantsAllReturnType.filter(restaurant=>{
      if(restaurant.title.toLowerCase().indexOf(keyword.toLowerCase())>-1){
        return true;
      }
      for(let i = 0; i < restaurant.tags.length; i++){
        if(restaurant.tags[i].name.toLowerCase().indexOf(keyword.toLowerCase())>-1){
          return true;
        }
      }
      return false;
    })

    return result;
  },
  files: async (parent, {userId}, {db, pubSub})=>{
    const user = await UserModel.find({userId});
    let result = [];
    for(let i = 0; i < user.files.length; i++){
      result.push({
        id: files[i].id,
        title: files[i].title,
        }); 
      return result;
    }
    console.log(tags, result);

    return result;
  },
  collection: async (parent, {fileId}, {db, pubSub})=>{
    const collections = await FileModel.find({fileId}).restaurants;
    let result = [];
    for(let i = 0; i < collections.length; i++){
      result.push({
        restaurants: collections[i].restaurant,
        }); 
      return result;
    }
    console.log(tags, result);

    return result;
  },
  bomb: async (parent, {userId}, {db, pubSub})=>{
    const bomb = await UserModel.find({userId}).bomb
    let result = [];
    for (let i=0;i<bomb.length;i++)
    {
      result.push({
        restaurants: bomb[i].restaurant,
      })
    }
    return result;
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
