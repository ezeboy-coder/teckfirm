"use client";

import { motion } from "framer-motion";
import { ArrowLeft, BarChart3, LineChart, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function GoogleAnalyticsBlogPost() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-[400px] relative">
        <Image
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
          alt="Google Analytics Dashboard"
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
                <h1 className="text-5xl font-bold mb-6">Safest Airlines for Transatlantic Flights</h1>
                <div className="flex items-center text-blue-100">
                  <span>March 28, 2024</span>
                  <span className="mx-3">•</span>
                  <span>8 min read</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <motion.article
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We combine international safety ratings, fleet age, and 3-year on-time performance to rank airlines on popular transatlantic routes like JFK–LHR and BOS–CDG. Here’s how to weigh safety and reliability for long-haul flights.
              </p>

              <h2 className="text-2xl font-bold mb-4">Key Safety & Reliability Factors</h2>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <BarChart3 className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold mb-2">Verified Safety Records</h3>
                  <p className="text-gray-600">Independently reported safety ratings and audit compliance.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <LineChart className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold mb-2">On‑Time Performance</h3>
                  <p className="text-gray-600">Historic delays, cancellations, and seasonality by route.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">How We Rank</h2>
              <p className="mb-6">
                We apply weighted scoring across factors travelers care about:
              </p>
              <ol className="list-decimal pl-6 mb-8 space-y-4">
                <li>Safety compliance and independent audits</li>
                <li>On‑time arrivals and cancellations (3‑year average)</li>
                <li>Cabin comfort scores by aircraft and fare class</li>
                <li>Fleet age and maintenance reputation</li>
                <li>Alliance benefits (lounge, rebooking support)</li>
              </ol>

              <h2 className="text-2xl font-bold mb-4">Actionable Insights</h2>
              <p className="mb-6">
                Use Airlin guidance for transatlantic routes:
              </p>
              <ul className="list-disc pl-6 mb-8 space-y-4">
                <li>Prefer carriers with newer long‑haul fleets on winter routes</li>
                <li>Check alliance coverage for easier rebooking during disruptions</li>
                <li>Balance fare price vs delay risk on business‑critical trips</li>
                <li>Consider seat layout for overnight flight comfort</li>
              </ul>

              <div className="bg-blue-50 p-8 rounded-xl mb-8">
                <h3 className="text-xl font-bold mb-4">Pro Tip</h3>
                <p className="text-gray-700">Choose flights with strong alliance partners at both ends for better IRROPS support and lounge access.</p>
              </div>

              <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
              <p className="mb-8">
                The safest and most reliable airlines often justify a modest fare premium on long‑haul itineraries. Our rankings help you decide when it’s worth it.
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
                    href="/blog/ai-revolution"
                    className="block hover:text-blue-600"
                  >
                    AI Revolution in Business Operations
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
