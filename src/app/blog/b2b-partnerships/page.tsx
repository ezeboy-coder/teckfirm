"use client";

import { motion } from "framer-motion";
import { ArrowLeft, HandshakeIcon, Share2, Target, Users2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function B2BPartnershipsBlogPost() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-[400px] relative">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
          alt="B2B Partnership"
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
                <h1 className="text-5xl font-bold mb-6">Building Strategic B2B Technology Partnerships</h1>
                <div className="flex items-center text-blue-100">
                  <span>March 22, 2024</span>
                  <span className="mx-3">&bull;</span>
                  <span>5 min read</span>
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
                Strategic B2B partnerships can accelerate your technology initiatives, expand your capabilities, and drive mutual growth. Here&apos;s how to build and maintain partnerships that deliver real value.
              </p>

              <h2 className="text-2xl font-bold mb-4">Partnership Fundamentals</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <HandshakeIcon className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold mb-2">Complementary Expertise</h3>
                  <p className="text-gray-600">Partner with firms whose strengths fill gaps in your own capabilities.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <Target className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold mb-2">Shared Goals</h3>
                  <p className="text-gray-600">Align on outcomes, timelines, and success metrics from day one.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Making Partnerships Work</h2>
              <p className="mb-6">
                Tips to get more value from your B2B technology partnerships:
              </p>
              <ol className="list-decimal pl-6 mb-8 space-y-4">
                <li>Define clear roles, responsibilities, and communication cadences</li>
                <li>Invest in joint technical integrations and shared tooling</li>
                <li>Create co-marketing opportunities to expand reach</li>
                <li>Establish SLAs and escalation paths for joint projects</li>
                <li>Review partnership health quarterly with data-driven KPIs</li>
              </ol>

              <div className="bg-blue-50 p-8 rounded-xl mb-8">
                <h3 className="text-xl font-bold mb-4">Success Story</h3>
                <p className="text-gray-700">A mid-size SaaS company partnered with a cloud infrastructure provider to offer a bundled solution. The partnership reduced onboarding time by 60% and increased both companies&apos; enterprise pipeline by 35% within the first year.</p>
              </div>

              <h2 className="text-2xl font-bold mb-4">Key Benefits of B2B Partnerships</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Users2 className="h-6 w-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Expanded Market Reach</h3>
                    <p className="text-gray-600">Access new customer segments through your partner&apos;s existing relationships and channels.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users2 className="h-6 w-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Faster Time to Market</h3>
                    <p className="text-gray-600">Leverage partner capabilities to ship features and products faster than building in-house.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users2 className="h-6 w-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Shared Innovation</h3>
                    <p className="text-gray-600">Combine R&D efforts to create solutions neither party could build alone.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
              <p className="mb-8">
                The best B2B partnerships are built on trust, transparency, and aligned incentives. When both parties invest in the relationship, the results compound over time&mdash;creating a competitive advantage that&apos;s difficult to replicate.
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
                    Choosing Reliable Tech Infrastructure
                  </Link>
                  <Link
                    href="/blog/ai-revolution"
                    className="block hover:text-blue-600"
                  >
                    Top Web Development Trends in 2024
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
