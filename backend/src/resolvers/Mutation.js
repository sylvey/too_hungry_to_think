import { RestaurantModel, TagsModel, upload, CommentModel, UserModel,FileModel } from "../db";
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
    const newFile = new FileModel({id,title,restaurants})
    await newFile.save();
    const user = await UserModel.findByIdAndUpdate(
      user.files.push(newFile)
    );
    await user.save();
  },
  addBomb: async (parent, {userId, restaurantId}, {db, pubSub})=>{
    const newBomb = restaurantId;
    const user = await UserModel.find({userId});
    user.bomb.push(newBomb);
    await user.save();
    const success ="success";
    return success;
  },
  addCollection: async(parent,{userId, restaurantId, fileId })=>{
    const newCollection = restaurantId;
    const file = await FileModel.findByIdAndUpdate(
      file.restaurants.push(newCollection)
    );
    await file.save();
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
    // pubsub.publish('POST_CREATED', {
    //   postCreated: {
    //     author: 'Ali Baba',
    //     comment: 'Open sesame'
    //   }
    // });
    return newComment;
  }
};

export default Mutation;
