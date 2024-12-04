"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Globe, Zap } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-blue-600 dark:text-blue-400"
          >
            UptimeMonitor
          </Link>
          <div className="space-x-4">
            <Link
              href="/login"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Login
            </Link>
            <Link href="/signup" passHref>
              <Button>Sign Up</Button>
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16 text-center">
        <motion.h1
          className="text-5xl font-bold mb-6 text-gray-900 dark:text-white"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          Monitor Your Website Uptime with Ease
        </motion.h1>
        <motion.p
          className="text-xl mb-8 text-gray-600 dark:text-gray-300"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Get instant notifications when your website goes down. Stay on top of
          your online presence.
        </motion.p>
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/signup" passHref>
            <Button size="lg" className="group">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {[
            {
              icon: Globe,
              title: "Global Monitoring",
              description: "Monitor from multiple locations worldwide",
            },
            {
              icon: Zap,
              title: "Instant Alerts",
              description: "Get notified immediately when issues occur",
            },
            {
              icon: CheckCircle,
              title: "99.9% Accuracy",
              description:
                "Minimize false positives with our advanced algorithms",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 transition-colors duration-300 hover:bg-blue-100 dark:hover:bg-gray-700"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex flex-col items-center">
                <div className="mb-4 p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <feature.icon className="h-8 w-8 text-blue-500 dark:text-blue-400" />
                </div>
                <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {feature.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
