"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  UploadCloud,
  Eye,
  Coffee,
  ShieldCheck,
  AlertCircle,
  Clock,
} from "lucide-react";

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const features: Feature[] = [
  {
    title: "Upload Your Photo",
    description: "Snap or upload a clear image of your skin area to begin analysis.",
    icon: <UploadCloud size={40} className="text-emerald-500" />,
  },
  {
    title: "View AI Results",
    description: "Get instant results showing the detected skin condition by name.",
    icon: <Eye size={40} className="text-blue-500" />,
  },
  {
    title: "Dietary Recommendations",
    description: "Receive personalized advice on what to eat to support skin health.",
    icon: <Coffee size={40} className="text-pink-500" />,
  },
  {
    title: "Precaution Guidelines",
    description: "Learn actionable steps and precautions to prevent further issues.",
    icon: <ShieldCheck size={40} className="text-yellow-500" />,
  },
  {
    title: "Expert Alerts",
    description: "See alerts if your case needs dermatologist review or urgent care.",
    icon: <AlertCircle size={40} className="text-red-500" />,
  },
  {
    title: "24/7 Support",
    description: "Access round-the-clock help and FAQs to guide your skincare journey.",
    icon: <Clock size={40} className="text-indigo-500" />,
  },
];

export default function WorkSection({ className }: { className?: string }) {
  return (
    <section className={`${className ?? ""} grid gap-8 sm:grid-cols-2 lg:grid-cols-3`}>
      {features.map((feature, idx) => (
        <motion.div
          key={idx}
          className="p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.2, duration: 0.6 }}
        >
          <div className="mb-4">{feature.icon}</div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            {feature.title}
          </h3>
          <p className="text-gray-600">{feature.description}</p>
        </motion.div>
      ))}
    </section>
  );
}
