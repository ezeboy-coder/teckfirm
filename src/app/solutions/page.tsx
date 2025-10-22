"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Database, Globe, Smartphone, Cloud, Shield, Zap, CheckCircle, Star } from "lucide-react";
import Link from "next/link";

export default function SolutionsPage() {
  const solutions = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description: "Custom websites, e-commerce platforms, and web applications built with modern technologies like React, Next.js, and Node.js.",
      features: ["Responsive Design", "E-commerce Integration", "CMS Development", "API Integration"],
      technologies: ["React", "Next.js", "Node.js", "TypeScript"]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless user experiences and performance optimization.",
      features: ["iOS Development", "Android Development", "Cross-platform", "App Store Optimization"],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"]
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure, migration services, and DevOps automation to optimize your business operations and reduce costs.",
      features: ["Cloud Migration", "DevOps Automation", "Infrastructure as Code", "Monitoring & Analytics"],
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Analytics",
      description: "Business intelligence, data visualization, and machine learning solutions to transform your data into actionable insights.",
      features: ["Data Warehousing", "BI Dashboards", "Machine Learning", "Predictive Analytics"],
      technologies: ["Python", "R", "TensorFlow", "Power BI", "Tableau"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions including audits, penetration testing, and compliance to protect your digital assets.",
      features: ["Security Audits", "Penetration Testing", "Compliance Management", "Incident Response"],
      technologies: ["Security Frameworks", "SIEM", "Firewall Management", "Encryption"]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Process Automation",
      description: "Streamline operations with custom automation solutions, workflow optimization, and integration services.",
      features: ["RPA Implementation", "Workflow Design", "System Integration", "Process Optimization"],
      technologies: ["UiPath", "Automation Anywhere", "Zapier", "Custom Solutions"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We start by understanding your business goals, current challenges, and technical requirements through detailed consultation."
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Our team creates a comprehensive project roadmap with timelines, milestones, and resource allocation."
    },
    {
      step: "03",
      title: "Design & Development",
      description: "We build your solution using agile methodology with regular updates and testing throughout the development process."
    },
    {
      step: "04",
      title: "Testing & Quality Assurance",
      description: "Rigorous testing ensures your solution meets all requirements and performs optimally across different environments."
    },
    {
      step: "05",
      title: "Deployment & Launch",
      description: "We handle the complete deployment process and ensure smooth transition to production environment."
    },
    {
      step: "06",
      title: "Support & Maintenance",
      description: "Ongoing support, updates, and maintenance to keep your solution running smoothly and securely."
    }
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
            <h1 className="text-5xl font-bold mb-6">Technology Solutions</h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Comprehensive technology services designed to accelerate your business growth and digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From web development to cloud solutions, we provide end-to-end technology services 
              tailored to your business needs.
            </p>
          </motion.div>

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
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-gray-800">Key Features:</h4>
                  <div className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-gray-800">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

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

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose TeckFirm?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="h-8 w-8" />,
                title: "Proven Expertise",
                description: "10+ years of experience delivering successful technology projects across various industries."
              },
              {
                icon: <CheckCircle className="h-8 w-8" />,
                title: "Quality Assurance",
                description: "Rigorous testing and quality control processes ensure reliable and scalable solutions."
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Agile Development",
                description: "Fast, iterative development process with regular updates and client feedback integration."
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Security First",
                description: "Built-in security measures and best practices to protect your data and applications."
              },
              {
                icon: <Cloud className="h-8 w-8" />,
                title: "Scalable Solutions",
                description: "Architecture designed to grow with your business and handle increasing demands."
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "24/7 Support",
                description: "Round-the-clock support and maintenance to keep your systems running smoothly."
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm text-center"
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

      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 text-blue-200 max-w-2xl mx-auto">
              Let's discuss your requirements and create a custom solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold inline-flex items-center hover:bg-blue-50 transition-colors"
              >
                Get Started Today
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