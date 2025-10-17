"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Shield, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-bold mb-6">
              Find the Best Airline for Your Next Trip
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Use Airlin compares airlines by safety, on-time record, comfort, price, and routes—so you always fly smarter.
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold inline-flex items-center hover:bg-blue-50 transition-colors"
            >
              Compare Airlines
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <BarChart3 className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Data-Driven Rankings</h3>
              <p className="text-gray-600">We aggregate safety, punctuality, and service reviews to rank airlines.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">On-Time Performance</h3>
              <p className="text-gray-600">Track historical delays and reliability by route and season.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Cabin Experience</h3>
              <p className="text-gray-600">Seat comfort, Wi‑Fi, IFE, and service quality summarized at a glance.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Why Travelers Choose Use Airlin</h2>
            <p className="text-xl text-gray-600 mb-12">
              We help you pick the right airline for your route and budget. Our recommendations blend official safety data, on‑time performance, customer reviews, and aircraft comfort to guide every booking.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">200+</h3>
                <p className="text-gray-600">Airlines Tracked</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">2M+</h3>
                <p className="text-gray-600">On‑Time Records Analyzed</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">50K+</h3>
                <p className="text-gray-600">Verified Reviews</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Latest Airline Insights</h2>
            <p className="text-xl text-gray-600">Comparisons, route tips, and seasonal recommendations for smarter flying</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <div className="h-48 relative">
                <Image
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
                  alt="Airline safety and punctuality data"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Safest Airlines for Transatlantic Flights
                </h3>
                <p className="text-gray-600 mb-4">
                  Based on safety records, fleet age, and on‑time data across JFK–LHR and beyond.
                </p>
                <Link
                  href="/blog/google-analytics"
                  className="text-blue-600 font-semibold inline-flex items-center hover:text-blue-700"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <div className="h-48 relative">
                <Image
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
                  alt="AI ranking airlines"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  How AI Helps Rank the Best Airlines
                </h3>
                <p className="text-gray-600 mb-4">
                  We use ML to weigh factors like delays, cancellations, and service quality.
                </p>
                <Link
                  href="/blog/ai-revolution"
                  className="text-blue-600 font-semibold inline-flex items-center hover:text-blue-700"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <div className="h-48 relative">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                  alt="Airline partnerships and alliances"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Alliances That Improve Your Flight Experience
                </h3>
                <p className="text-gray-600 mb-4">
                  Star Alliance vs oneworld vs SkyTeam: which helps your route most?
                </p>
                <Link
                  href="/blog/b2b-partnerships"
                  className="text-blue-600 font-semibold inline-flex items-center hover:text-blue-700"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Book Smarter?</h2>
            <p className="text-xl mb-8 text-blue-200 max-w-2xl mx-auto">
              Join travelers who pick the best airline for comfort, safety, and punctuality.
            </p>
            <Link
              href="/solutions"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold inline-flex items-center hover:bg-blue-50 transition-colors"
            >
              See Recommendations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
