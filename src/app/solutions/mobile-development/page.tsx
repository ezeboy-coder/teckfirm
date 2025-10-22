"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Smartphone, Globe, Zap, Shield, Users, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MobileDevelopmentPage() {
  const features = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Native Performance",
      description: "High-performance mobile apps built with native technologies for optimal speed and user experience."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Cross-Platform Development",
      description: "Single codebase solutions that work seamlessly on both iOS and Android platforms."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Offline Functionality",
      description: "Apps that work offline with data synchronization when connectivity is restored."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security & Privacy",
      description: "Built-in security measures and privacy protection to keep user data safe."
    }
  ];

  const platforms = [
    {
      name: "iOS Development",
      description: "Native iOS apps using Swift and SwiftUI for optimal performance and user experience.",
      technologies: ["Swift", "SwiftUI", "UIKit", "Core Data"]
    },
    {
      name: "Android Development",
      description: "Native Android apps using Kotlin and Jetpack Compose for modern UI development.",
      technologies: ["Kotlin", "Jetpack Compose", "Room", "Retrofit"]
    },
    {
      name: "React Native",
      description: "Cross-platform mobile development using React Native for faster development cycles.",
      technologies: ["React Native", "JavaScript", "Redux", "Native Modules"]
    },
    {
      name: "Flutter",
      description: "Google's UI toolkit for building natively compiled applications from a single codebase.",
      technologies: ["Dart", "Flutter", "Material Design", "Cupertino"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "App Strategy & Planning",
      description: "We analyze your business goals and create a comprehensive mobile app strategy with user personas and feature prioritization."
    },
    {
      step: "02",
      title: "UI/UX Design",
      description: "Our designers create intuitive and engaging user interfaces that follow platform-specific design guidelines."
    },
    {
      step: "03",
      title: "Development & Integration",
      description: "We build your app using the most suitable technology stack and integrate with your existing systems."
    },
    {
      step: "04",
      title: "Testing & Quality Assurance",
      description: "Comprehensive testing across different devices, screen sizes, and operating system versions."
    },
    {
      step: "05",
      title: "App Store Deployment",
      description: "We handle the complete app store submission process and ensure compliance with platform guidelines."
    },
    {
      step: "06",
      title: "Maintenance & Updates",
      description: "Ongoing support, bug fixes, and feature updates to keep your app current and functional."
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
            <h1 className="text-5xl font-bold mb-6">Mobile Development Services</h1>
            <p className="text-xl text-blue-100 mb-8">
              Native and cross-platform mobile applications that deliver exceptional user experiences 
              and drive business growth across iOS and Android platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold inline-flex items-center hover:bg-blue-50 transition-colors"
              >
                Start Your App Project
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
            <h2 className="text-3xl font-bold mb-4">Mobile App Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our mobile development services cover everything from simple apps to complex enterprise solutions.
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

      {/* Platforms Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Development Platforms</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We develop mobile apps using the most suitable technology stack for your specific needs and requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">{platform.name}</h3>
                <p className="text-gray-600 mb-6">{platform.description}</p>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-800">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {platform.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
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
              We follow a proven methodology to ensure successful mobile app development and deployment.
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

      {/* App Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Types of Mobile Apps We Build</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From consumer apps to enterprise solutions, we have experience across various industries and use cases.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Apps",
                description: "Online shopping apps with payment integration, inventory management, and order tracking.",
                icon: <Users className="h-8 w-8" />
              },
              {
                title: "Business Apps",
                description: "Enterprise mobile solutions for internal processes, CRM, and team collaboration.",
                icon: <Award className="h-8 w-8" />
              },
              {
                title: "Social Media Apps",
                description: "Social networking platforms with real-time messaging, content sharing, and user engagement.",
                icon: <Globe className="h-8 w-8" />
              },
              {
                title: "IoT & Smart Home",
                description: "Mobile apps for controlling smart devices and IoT ecosystems.",
                icon: <Zap className="h-8 w-8" />
              },
              {
                title: "Healthcare Apps",
                description: "Medical and wellness applications with HIPAA compliance and health data management.",
                icon: <Shield className="h-8 w-8" />
              },
              {
                title: "Gaming Apps",
                description: "Interactive gaming applications with multiplayer features and engaging user experiences.",
                icon: <Smartphone className="h-8 w-8" />
              }
            ].map((appType, index) => (
              <motion.div
                key={appType.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {appType.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{appType.title}</h3>
                <p className="text-gray-600">{appType.description}</p>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Build Your Mobile App?</h2>
            <p className="text-xl mb-8 text-blue-200 max-w-2xl mx-auto">
              Let's discuss your mobile app requirements and create a solution that engages users and drives business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold inline-flex items-center hover:bg-blue-50 transition-colors"
              >
                Start Your App Project
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
