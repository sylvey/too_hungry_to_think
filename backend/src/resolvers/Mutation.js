import { RestaurantModel, TagsModel, upload, CommentModel, bombModel,FileModel } from "../db";
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
    const newFile = new FileModel({userId,title})
    await newFile.save();
    const success ="success";
    return success;
  },
  addBomb: async (parent, {userId, restaurantId}, {db, pubSub})=>{
    const newBomb = new bombModel({userId,restaurantId});
    await newBomb.save();
    const success ="success";
    return success;
  },
  addCollection: async(parent,{userId, restaurantId, title })=>{
    let newCollection = restaurantId;
    const File = await FileModel.find({userId,title});
    let newRestaurant = File.restaurants+newCollection;
    const newFile =FileModel({userId,title,newRestaurant});
    await newFile.save();
    const success ="success";
    return success;
  },
  async addComment(parent, {userID, restaurantId, content, star}, {db, pubSub}){
    console.log(userID, restaurantId, content, star) 
    if (!content || !star){
      throw new Error("請留言並給星評價"); }
    
    const newComment = new CommentModel({
      id: userID+restaurantId, 
      userID: userID, 
      restaurantId: restaurantId, 
      content: content, 
      star: star
    });
    let comments = await RestaurantModel.findOne({id:restaurantId}).comments;
    await RestaurantModel.findOneAndUpdate(
      {id:restaurantId},{
        $addToSet:{comments:[...comments, newComment]}
      },
    )
    let restaurantStars = awaitRestaurantModel.findOne({id:restaurantId}).stars;
    await RestaurantModel.findOneAndUpdate(
      {restaurantStars:restaurantStars},
      {restaurantStars:(restaurantStars*(comments-1)+star)/comments}
    )
  }
};

export default Mutation;
