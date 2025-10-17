"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Cloud, Shield, Users, Zap } from "lucide-react";
import Link from "next/link";

export default function SolutionsPage() {
  const solutions = [
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Airline Rankings",
      description: "Route-based rankings using safety, on-time, comfort, and price scoring",
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Route Explorer",
      description: "Compare airlines on a specific route and season to avoid delays",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Safety Briefs",
      description: "Independent safety overviews with fleet age and audit history",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Lounge & Status",
      description: "Alliance benefits, lounge networks, and status-matching tips",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Alert Center",
      description: "Email alerts when route reliability changes or aircraft rotates",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6">Recommendations</h1>
            <p className="text-xl text-blue-100 max-w-2xl">
              Use Airlin tools that help you pick the best airline for any route.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-blue-600 mb-4">{solution.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <Link
                  href={`/solutions/${solution.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-blue-600 font-semibold inline-flex items-center hover:text-blue-700"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Fly Smarter?</h2>
            <p className="text-xl mb-8 text-blue-200 max-w-2xl mx-auto">Get personalized recommendations for your next trip.</p>
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold inline-flex items-center hover:bg-blue-50 transition-colors"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
