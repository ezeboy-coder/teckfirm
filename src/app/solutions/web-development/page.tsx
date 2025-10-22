"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Code, Globe, Smartphone, Zap, Database, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function WebDevelopmentPage() {
  const features = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Responsive Web Design",
      description: "Mobile-first, responsive designs that work perfectly across all devices and screen sizes."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Optimization",
      description: "Lightning-fast loading times and optimized performance for better user experience and SEO."
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Database Integration",
      description: "Seamless integration with modern databases and data management systems."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security Implementation",
      description: "Built-in security measures including SSL, authentication, and data protection."
    }
  ];

  const technologies = [
    { name: "React", description: "Modern UI library for interactive user interfaces" },
    { name: "Next.js", description: "Full-stack React framework for production-ready applications" },
    { name: "Node.js", description: "Server-side JavaScript for scalable backend development" },
    { name: "TypeScript", description: "Type-safe JavaScript for better code quality and maintainability" },
    { name: "MongoDB", description: "NoSQL database for flexible data storage" },
    { name: "PostgreSQL", description: "Reliable relational database for complex data relationships" }
  ];

  const process = [
    {
      step: "01",
      title: "Requirements Analysis",
      description: "We analyze your business needs, target audience, and technical requirements to create a comprehensive project plan."
    },
    {
      step: "02",
      title: "UI/UX Design",
      description: "Our designers create wireframes, mockups, and prototypes that align with your brand and user expectations."
    },
    {
      step: "03",
      title: "Frontend Development",
      description: "We build the user interface using modern frameworks like React and Next.js for optimal performance."
    },
    {
      step: "04",
      title: "Backend Development",
      description: "Robust server-side development with APIs, database integration, and third-party service connections."
    },
    {
      step: "05",
      title: "Testing & Quality Assurance",
      description: "Comprehensive testing across different browsers, devices, and scenarios to ensure flawless functionality."
    },
    {
      step: "06",
      title: "Deployment & Launch",
      description: "We handle the complete deployment process and provide ongoing support and maintenance."
    }
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
            className="max-w-4xl"
          >
            <h1 className="text-5xl font-bold mb-6">Web Development Services</h1>
            <p className="text-xl text-blue-100 mb-8">
              Custom websites, web applications, and e-commerce platforms built with cutting-edge technologies. 
              We create digital experiences that drive business growth and user engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold inline-flex items-center hover:bg-blue-50 transition-colors"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/consultation"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center hover:bg-white hover:text-blue-600 transition-colors"
              >
                Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">What We Deliver</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our web development services cover everything from simple websites to complex web applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with the latest and most reliable technologies to build scalable and maintainable web solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3 text-blue-600">{tech.name}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and client satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Recent Web Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore some of our recent web development projects and see the quality of our work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Platform",
                description: "Full-featured online store with payment integration and inventory management.",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80"
              },
              {
                title: "Corporate Website",
                description: "Modern corporate website with CMS integration and multilingual support.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
              },
              {
                title: "SaaS Application",
                description: "Complex web application with user management and real-time features.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="h-48 relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-3xl font-bold mb-6">Ready to Build Your Web Solution?</h2>
            <p className="text-xl mb-8 text-blue-200 max-w-2xl mx-auto">
              Let's discuss your web development needs and create a solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold inline-flex items-center hover:bg-blue-50 transition-colors"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/consultation"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center hover:bg-white hover:text-blue-900 transition-colors"
              >
                Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
