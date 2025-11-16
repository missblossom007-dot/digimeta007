import Backendless from 'backendless';

// Backendless Configuration
// Ganti dengan APP_ID dan API_KEY Anda dari Backendless Console
const APP_ID = 'YOUR_APP_ID'; // Ganti dengan App ID Anda
const API_KEY = 'YOUR_API_KEY'; // Ganti dengan API Key Anda

Backendless.initApp(APP_ID, API_KEY);

export default Backendless;

// Helper functions untuk Blog
export const BlogService = {
  // Get all blog posts
  async getAllPosts() {
    try {
      const queryBuilder = Backendless.DataQueryBuilder.create()
        .setPageSize(100)
        .setSortBy(['created DESC']);
      
      return await Backendless.Data.of('BlogPost').find(queryBuilder);
    } catch (error) {
      console.error('Error fetching posts:', error);
      return [];
    }
  },

  // Get single post by ID
  async getPostById(objectId) {
    try {
      return await Backendless.Data.of('BlogPost').findById(objectId);
    } catch (error) {
      console.error('Error fetching post:', error);
      return null;
    }
  },

  // Create new post
  async createPost(postData) {
    try {
      return await Backendless.Data.of('BlogPost').save(postData);
    } catch (error) {
      console.error('Error creating post:', error);
      throw error;
    }
  },

  // Update post
  async updatePost(objectId, postData) {
    try {
      postData.objectId = objectId;
      return await Backendless.Data.of('BlogPost').save(postData);
    } catch (error) {
      console.error('Error updating post:', error);
      throw error;
    }
  },

  // Delete post
  async deletePost(objectId) {
    try {
      return await Backendless.Data.of('BlogPost').remove({ objectId });
    } catch (error) {
      console.error('Error deleting post:', error);
      throw error;
    }
  }
};
