"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Brain, Share2, Sparkles, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AIRevolutionBlogPost() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-[400px] relative">
        <Image
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
          alt="AI in Business"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-blue-900/70">
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="max-w-3xl text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl font-bold mb-6">How AI Helps Rank the Best Airlines</h1>
                <div className="flex items-center text-blue-100">
                  <span>March 25, 2024</span>
                  <span className="mx-3">•</span>
                  <span>6 min read</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-4 gap-8">
          <div className="col-span-3">
            <motion.article
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We use machine learning to weigh factors like delays, cancellations, cabin reviews, and safety audits. Here’s how AI powers Use Airlin’s recommendations.
              </p>

              <h2 className="text-2xl font-bold mb-4">Key Model Inputs</h2>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <Brain className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold mb-2">Operational Reliability</h3>
                  <p className="text-gray-600">Historic on‑time performance, cancellations, and seasonality.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <Sparkles className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold mb-2">Cabin Experience</h3>
                  <p className="text-gray-600">Seat layout, IFE, Wi‑Fi, and verified review sentiment.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Our Modeling Approach</h2>
              <p className="mb-6">
                Our ensemble blends transparent scoring with ML calibration:
              </p>
              <ol className="list-decimal pl-6 mb-8 space-y-4">
                <li>Normalize metrics across routes and seasons</li>
                <li>Weight inputs by traveler priorities</li>
                <li>Calibrate using historical satisfaction outcomes</li>
                <li>Continuously validate against live performance</li>
              </ol>

              <div className="bg-blue-50 p-8 rounded-xl mb-8">
                <h3 className="text-xl font-bold mb-4">Case Study</h3>
                <p className="text-gray-700">On JFK–SFO, our model favored Airline A despite a slightly higher fare due to markedly better delay performance and newer aircraft comfort—leading to higher traveler satisfaction.</p>
              </div>

              <h2 className="text-2xl font-bold mb-4">Benefits for Travelers</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Zap className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold mb-2">More Confident Choices</h3>
                    <p className="text-gray-600">Clear trade‑offs between price, comfort, and reliability.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold mb-2">Fewer Delays</h3>
                    <p className="text-gray-600">Recommendations bias toward carriers with stronger on‑time records.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold mb-2">Better Flight Experience</h3>
                    <p className="text-gray-600">Cabin comfort signals and aircraft type considered for long hauls.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Looking Ahead</h2>
              <p className="mb-8">
                Our goal is transparent, traveler‑centric rankings with adjustable weights, so every flyer gets recommendations that match their priorities.
              </p>
            </motion.article>

            <div className="border-t border-gray-200 pt-8 mt-8">
              <div className="flex items-center justify-between">
                <Link
                  href="/blog"
                  className="flex items-center text-blue-600 hover:text-blue-700"
                >
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back to Blog
                </Link>
                <button className="flex items-center text-gray-600 hover:text-blue-600">
                  <Share2 className="h-5 w-5 mr-2" />
                  Share Article
                </button>
              </div>
            </div>
          </div>

          <aside className="col-span-1">
            <div className="sticky top-8">
              <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
                <h3 className="font-semibold mb-4">Related Articles</h3>
                <div className="space-y-4">
                  <Link
                    href="/blog/google-analytics"
                    className="block hover:text-blue-600"
                  >
                    Boost Your Sales with Google Analytics 4
                  </Link>
                  <Link
                    href="/blog/b2b-partnerships"
                    className="block hover:text-blue-600"
                  >
                    Building Strategic B2B Partnerships
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
