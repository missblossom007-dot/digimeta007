import React from "react";
import { motion } from "framer-motion";

export default function TrustBadges() {
  const badges = [
    { icon: "✅", text: "Licensed Company" },
    { icon: "🏆", text: "Enterprise-Grade" },
    { icon: "⚡", text: "Fast Delivery" },
    { icon: "🔒", text: "Secure & Reliable" },
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-8">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2 text-white"
            >
              <span className="text-2xl">{badge.icon}</span>
              <span className="font-semibold">{badge.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
