// for schemas

import mongoose from "mongoose";
import dotenv from "dotenv-defaults";
import "dotenv-defaults/config.js";
import path from "path";
const {GridFsStorage} = require('multer-gridfs-storage');
const multer = require('multer');
const crypto = require('crypto');
// const GridFsStorage = require('multer-gridfs-storage');


/**
 * Task Schema for MongoDB
 */
const restaurantSchema = new mongoose.Schema(
  {
    id: { type: String, unique: true },
    title: String,
    stars: Number,
    photo: String,
    link: String,
    tagIds: [String],
    comments: [{type: mongoose.Types.ObjectId, ref: "Comment"}]
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
        collection: "tag",
    }
)

const userSchema = new mongoose.Schema(
    {
       id: {type: String, unique: true},
       files: [{type: mongoose.Types.ObjectId, ref: "File"}],
       bomb: [{type: mongoose.Types.ObjectId, ref: "Restaurant"}],
    },
    {
        collection: "user"
    }
)

const fileSchema = new mongoose.Schema(
  {
      id: {type: String, unique: true},
      title: String,
      restaurants: [{type: mongoose.Types.ObjectId, ref: "Restaurant"}],
  },
  {
    collection: "file"
  }
)

const commentSchema = new mongoose.Schema(
  {
      id: {type: String, unique: true},
      userId: String,
      restaurantId: String,
      content: String,
      star: Number
  }
)




const TagsModel = mongoose.model("Tag", tagSchema);
const RestaurantModel = mongoose.model("Restaurant", restaurantSchema);
const UserModel = mongoose.model("User", userSchema);
const FileModel = mongoose.model("File", fileSchema);
const CommentModel = mongoose.model("Comment", commentSchema);

export {TagsModel, RestaurantModel, UserModel, FileModel, CommentModel};
