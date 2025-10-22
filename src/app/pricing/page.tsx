"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Star, Zap, Shield, Users } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$2,500",
      period: "per month",
      description: "Perfect for small businesses looking to establish their digital presence",
      features: [
        "Basic website development",
        "Responsive design",
        "Content management system",
        "Basic SEO optimization",
        "Email support",
        "Monthly maintenance"
      ],
      popular: false,
      icon: <Users className="h-8 w-8" />
    },
    {
      name: "Professional",
      price: "$5,000",
      period: "per month",
      description: "Ideal for growing businesses that need advanced features and integrations",
      features: [
        "Custom web application",
        "Mobile-responsive design",
        "Advanced CMS with custom features",
        "E-commerce integration",
        "API development",
        "Priority support",
        "Performance optimization",
        "Security implementation"
      ],
      popular: true,
      icon: <Star className="h-8 w-8" />
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Comprehensive solutions for large organizations with complex requirements",
      features: [
        "Full-stack development",
        "Microservices architecture",
        "Cloud infrastructure setup",
        "Advanced security measures",
        "Custom integrations",
        "Dedicated project manager",
        "24/7 support",
        "Scalability planning",
        "Compliance assistance"
      ],
      popular: false,
      icon: <Shield className="h-8 w-8" />
    }
  ];

  const services = [
    {
      name: "Web Development",
      price: "Starting at $3,000",
      description: "Custom websites and web applications built with modern technologies"
    },
    {
      name: "Mobile Development",
      price: "Starting at $5,000",
      description: "Native and cross-platform mobile applications for iOS and Android"
    },
    {
      name: "Cloud Solutions",
      price: "Starting at $2,000",
      description: "Cloud migration, infrastructure setup, and DevOps automation"
    },
    {
      name: "Data Analytics",
      price: "Starting at $4,000",
      description: "Business intelligence, data visualization, and machine learning solutions"
    },
    {
      name: "Cybersecurity",
      price: "Starting at $1,500",
      description: "Security audits, penetration testing, and compliance solutions"
    },
    {
      name: "Process Automation",
      price: "Starting at $2,500",
      description: "Workflow automation and system integration services"
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
            className="max-w-4xl text-center mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6">Transparent Pricing</h1>
            <p className="text-xl text-blue-100 mb-8">
              Choose the plan that best fits your business needs. All plans include our commitment 
              to quality, security, and ongoing support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Monthly Retainer Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ongoing technology partnership with dedicated resources and priority support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white rounded-xl shadow-sm p-8 ${
                  plan.popular ? 'ring-2 ring-blue-600 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="text-blue-600 mb-4 flex justify-center">
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Individual Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Need a specific service? We offer individual project pricing for one-time implementations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-2xl font-bold text-blue-600 mb-3">{service.price}</p>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href="/contact"
                  className="text-blue-600 font-semibold inline-flex items-center hover:text-blue-700"
                >
                  Get Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about our pricing and services.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                question: "What's included in the monthly retainer plans?",
                answer: "Monthly retainer plans include ongoing development work, maintenance, support, and priority access to our team. The exact scope depends on your chosen plan and specific requirements."
              },
              {
                question: "Can I change my plan later?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. We'll work with you to ensure a smooth transition and adjust billing accordingly."
              },
              {
                question: "Do you offer custom pricing for large projects?",
                answer: "Absolutely! For enterprise projects with complex requirements, we provide custom pricing based on scope, timeline, and specific needs. Contact us for a detailed quote."
              },
              {
                question: "What's the difference between retainer and project-based pricing?",
                answer: "Retainer plans provide ongoing partnership with dedicated resources, while project-based pricing is for one-time implementations. Retainer plans often provide better value for ongoing needs."
              },
              {
                question: "Do you offer discounts for long-term contracts?",
                answer: "Yes, we offer discounts for annual contracts and long-term partnerships. Contact us to discuss your specific needs and potential savings."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-blue-200 max-w-2xl mx-auto">
              Contact us today to discuss your project requirements and get a customized quote 
              that fits your budget and timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold inline-flex items-center hover:bg-blue-50 transition-colors"
              >
                Get Custom Quote
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