"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, User, Tag, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AIRevolutionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-6 text-blue-100">
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" />
                Sarah Johnson
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                December 15, 2024
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                5 min read
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6">Top Web Development Trends in 2024</h1>
            <p className="text-xl text-blue-100">
              Discover the latest technologies and frameworks shaping the future of web development, 
              from AI integration to performance optimization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <div className="relative h-96 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80"
                  alt="Web development trends"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Article Meta */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-8 text-gray-600"
            >
              <span className="flex items-center gap-1">
                <Tag className="h-4 w-4" />
                Web Development
              </span>
            </motion.div>

            {/* Article Body */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                The web development landscape continues to evolve at a rapid pace, with new technologies, 
                frameworks, and best practices emerging regularly. As we move through 2024, several key 
                trends are shaping the future of web development and influencing how we build digital experiences.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12">1. AI-Powered Development Tools</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Artificial Intelligence is revolutionizing how developers write code. Tools like GitHub Copilot, 
                ChatGPT, and other AI assistants are becoming integral to the development process, helping with 
                code generation, debugging, and optimization. These tools are not replacing developers but rather 
                augmenting their capabilities and accelerating development cycles.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12">2. Edge Computing and Performance</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With users expecting faster load times and better performance, edge computing is becoming 
                increasingly important. Technologies like Edge Functions, CDN optimization, and serverless 
                architectures are enabling developers to deliver content closer to users, resulting in 
                improved performance and user experience.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12">3. Progressive Web Apps (PWAs)</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Progressive Web Apps continue to gain traction as they bridge the gap between web and 
                native applications. With features like offline functionality, push notifications, and 
                app-like experiences, PWAs are becoming the preferred choice for many businesses looking 
                to provide a seamless user experience across all devices.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12">4. WebAssembly (WASM) Adoption</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                WebAssembly is enabling high-performance applications to run in browsers with near-native speed. 
                This technology is particularly valuable for applications requiring intensive computations, 
                such as image processing, gaming, and scientific simulations.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12">5. Micro-Frontend Architecture</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As applications grow in complexity, micro-frontend architecture is becoming a popular approach 
                for managing large-scale frontend applications. This pattern allows teams to work independently 
                on different parts of an application while maintaining consistency and scalability.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12">6. Enhanced Security Practices</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With increasing cyber threats, security is becoming a top priority in web development. 
                Developers are implementing security-first approaches, including Content Security Policy (CSP), 
                HTTPS everywhere, and regular security audits to protect user data and maintain trust.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12">Conclusion</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The web development landscape in 2024 is characterized by rapid innovation and the adoption 
                of new technologies that enhance performance, security, and user experience. As developers, 
                staying updated with these trends and continuously learning new technologies is essential 
                for building modern, efficient, and secure web applications.
              </p>
            </motion.div>

            {/* Author Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 p-8 rounded-xl mt-12"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  SJ
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
                  <p className="text-gray-600 mb-4">
                    Senior Web Developer at TeckFirm with over 8 years of experience in modern web technologies. 
                    Passionate about creating scalable and performant web applications.
                  </p>
                  <div className="flex gap-4">
                    <a href="#" className="text-blue-600 hover:text-blue-700">LinkedIn</a>
                    <a href="#" className="text-blue-600 hover:text-blue-700">Twitter</a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Related Articles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-16"
            >
              <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3">Building Strategic B2B Partnerships</h4>
                  <p className="text-gray-600 mb-4">Learn how strategic partnerships can expand your business reach and create growth.</p>
                  <Link
                    href="/blog/b2b-partnerships"
                    className="text-blue-600 font-semibold inline-flex items-center hover:text-blue-700"
                  >
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3">Choosing Reliable Tech Infrastructure</h4>
                  <p className="text-gray-600 mb-4">A comprehensive guide to evaluating reliable technology infrastructure for your business.</p>
                  <Link
                    href="/blog/google-analytics"
                    className="text-blue-600 font-semibold inline-flex items-center hover:text-blue-700"
                  >
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </article>
    </div>
  );
}