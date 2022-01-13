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

  }
};

export default Query;
