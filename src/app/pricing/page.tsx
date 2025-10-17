"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  const plans = [
    {
      name: "Traveler",
      price: "$0",
      description: "Free airline rankings and basic comparisons",
      features: [
        "Top airlines by route",
        "On-time history snapshot",
        "Cabin and seat highlights",
        "Safety overview",
        "Seasonal tips",
      ],
    },
    {
      name: "Pro",
      price: "$9/mo",
      description: "Advanced airline comparisons and alerts",
      features: [
        "Route-by-route performance",
        "Delay and cancellation forecasts",
        "Fare class comfort insights",
        "Alliance and lounge access filters",
        "Price vs comfort scoring",
        "Email alerts on route changes",
      ],
    },
    {
      name: "Teams",
      price: "$49/mo",
      description: "For travel teams and concierges",
      features: [
        "Shared saved routes",
        "Policy-based airline rules",
        "CSV export and sharing",
        "Custom scoring weights",
        "Priority support",
        "API access",
        "SLA guarantee",
      ],
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
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Simple Plans</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Pick the level of airline insights you need. Every plan includes core recommendations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">{plan.price}</div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 text-blue-600 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Get Started
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
            <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-xl mb-8 text-blue-200 max-w-2xl mx-auto">
              Contact us to discuss your specific requirements and get a tailored quote.
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold inline-flex items-center hover:bg-blue-50 transition-colors"
            >
              Contact Sales
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
