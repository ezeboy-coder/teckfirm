"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Top Web Development Trends in 2024",
      excerpt: "Discover the latest technologies and frameworks shaping the future of web development, from AI integration to performance optimization.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80",
      author: "Sarah Johnson",
      date: "December 15, 2024",
      category: "Web Development",
      readTime: "5 min read",
      slug: "ai-revolution"
    },
    {
      title: "Building Strategic B2B Partnerships",
      excerpt: "Learn how strategic partnerships can expand your business reach, improve reliability, and create mutual growth opportunities.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
      author: "Michael Chen",
      date: "December 10, 2024",
      category: "Business Strategy",
      readTime: "5 min read",
      slug: "b2b-partnerships"
    },
    {
      title: "Choosing the Safest and Most Reliable Tech Infrastructure",
      excerpt: "A comprehensive guide to evaluating and choosing reliable technology infrastructure for mission-critical business operations.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
      author: "Emily Rodriguez",
      date: "December 5, 2024",
      category: "Infrastructure",
      readTime: "8 min read",
      slug: "google-analytics"
    }
  ];

  const categories = [
    "All",
    "Web Development",
    "Mobile Development", 
    "Cloud Solutions",
    "Cybersecurity",
    "Data Analytics",
    "Process Automation"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl text-center mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6">Technology Insights & Best Practices</h1>
            <p className="text-xl text-blue-100 mb-8">
              Stay updated with the latest trends, technologies, and best practices in software development, 
              cloud computing, cybersecurity, and digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All" 
                    ? "bg-blue-600 text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="h-48 relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <Tag className="h-4 w-4 text-blue-600" />
                    <span className="text-blue-600 text-sm font-medium">{post.category}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>

                  <h2 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 font-semibold inline-flex items-center hover:text-blue-700"
                  >
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Stay Updated with Technology Trends</h2>
            <p className="text-xl mb-8 text-blue-200 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest insights, tutorials, and best practices 
              delivered directly to your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}