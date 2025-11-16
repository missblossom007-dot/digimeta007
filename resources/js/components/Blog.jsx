import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BlogService } from '../config/backendless';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    setLoading(true);
    try {
      const data = await BlogService.getAllPosts();
      setPosts(data);
    } catch (error) {
      console.error('Error loading posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    return date.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading blog posts...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            📝 Blog & Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tips, tutorial, dan insight seputar digital marketing, web development, dan business automation
          </p>
        </motion.div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">Belum ada artikel. Coming soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.objectId}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                {post.featuredImage && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                )}
                
                <div className="p-6">
                  {post.category && (
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full mb-3">
                      {post.category}
                    </span>
                  )}
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt || post.content?.substring(0, 150) + '...'}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{formatDate(post.created)}</span>
                    <span className="text-blue-600 font-medium hover:underline">
                      Baca Selengkapnya →
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {/* Modal for full post */}
        {selectedPost && (
          <div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedPost.featuredImage && (
                <img
                  src={selectedPost.featuredImage}
                  alt={selectedPost.title}
                  className="w-full h-64 object-cover"
                />
              )}
              
              <div className="p-8">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="float-right text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
                
                {selectedPost.category && (
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full mb-4">
                    {selectedPost.category}
                  </span>
                )}
                
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {selectedPost.title}
                </h2>
                
                <div className="text-gray-500 mb-6">
                  {formatDate(selectedPost.created)}
                  {selectedPost.author && ` • By ${selectedPost.author}`}
                </div>
                
                <div className="prose prose-lg max-w-none">
                  {selectedPost.content}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
