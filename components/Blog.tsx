
import React, { useState } from 'react';
import { Heart, Calendar, Tag, ArrowUpRight, BookOpen, Clock } from 'lucide-react';
import { BLOGS } from '../constants';
import BlogModal from './BlogModal';
import { BlogPost } from '../types';
import { motion } from 'framer-motion';

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 relative overflow-hidden transition-colors duration-500">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-100 dark:bg-blue-900/10 rounded-full blur-3xl opacity-30 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 border-2 border-blue-200 dark:border-blue-800 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900">
            <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-wider">HEALTH KNOWLEDGE BASE</span>
          </div>
          <h2 className="text-3xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight">
            Insights & Health Advice
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Stay informed with the latest medical insights and wellness tips from Dr. Arijit
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BLOGS.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white dark:bg-slate-800/40 rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-800 flex flex-col cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div className="relative overflow-hidden h-72">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-full text-[10px] font-black tracking-widest uppercase text-blue-600 dark:text-blue-400 shadow-lg">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-10 flex-1 flex flex-col space-y-5">
                <div className="flex items-center gap-4 text-slate-400 dark:text-slate-500 text-[10px] font-black uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    {post.date}
                  </div>
                  <div className="h-1 w-1 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    5 MIN READ
                  </div>
                </div>

                <h3 className="text-2xl font-black text-slate-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="pt-4 mt-auto">
                  <div className="inline-flex items-center gap-3 text-sm font-black text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all uppercase tracking-widest">
                    <span>Read Full Article</span>
                    <div className="w-8 h-8 rounded-full border-2 border-slate-100 dark:border-slate-800 flex items-center justify-center group-hover:border-blue-600 dark:group-hover:border-blue-400 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:text-white transition-all shadow-md">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explore Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#1e293b" }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-5 sm:px-12 sm:py-6 bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-500 text-white font-black rounded-[2rem] shadow-xl hover:shadow-2xl transition-all uppercase text-xs sm:text-sm tracking-widest flex items-center gap-4 mx-auto border border-white/10"
          >
            Explore All Expertise Articles <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 dark:text-blue-200" />
          </motion.button>
        </motion.div>
      </div>

      {/* Blog Modal */}
      {selectedPost && (
        <BlogModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      )}
    </section>
  );
};

export default Blog;
