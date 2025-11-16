import React from "react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: "📱",
      title: "Digital Marketing & Branding Strategy",
      description: "Strategi pemasaran digital yang tepat sasaran untuk meningkatkan brand awareness dan konversi bisnis Anda."
    },
    {
      icon: "💻",
      title: "Full-Stack Website & Web App Development",
      description: "Pengembangan website dan aplikasi web modern dengan teknologi terkini untuk kebutuhan bisnis Anda."
    },
    {
      icon: "🛒",
      title: "E-Commerce & Automation System",
      description: "Solusi e-commerce lengkap dengan sistem otomasi untuk meningkatkan efisiensi operasional bisnis."
    },
    {
      icon: "🔍",
      title: "Search Engine Optimization (SEO)",
      description: "Optimasi website untuk meningkatkan ranking di mesin pencari dan mendatangkan traffic organik."
    },
    {
      icon: "✍️",
      title: "Content Production & Copywriting",
      description: "Konten berkualitas dan copywriting yang menarik untuk meningkatkan engagement dan konversi."
    },
    {
      icon: "🤖",
      title: "AI Integration & Business Automation",
      description: "Integrasi AI dan otomasi bisnis untuk meningkatkan produktivitas dan mengurangi biaya operasional."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ⚡ Layanan Utami Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bangun, Kembangkan, dan Optimalkan Bisnis Anda Bersama digimeta007
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-700 mb-6">
            Kami membantu Anda naik level, lebih dikenal, lebih dipercaya, dan lebih menguntungkan melalui pendekatan digital yang tepat dan teknologi yang dirancang secara profesional.
          </p>
          <p className="text-xl font-semibold text-gray-900 mb-4">
            📩 Siap mempercepat pertumbuhan bisnis Anda?
          </p>
          <a
            href="https://wa.me/6282141733187"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition"
          >
            <span>💬</span>
            Hubungi Kami di WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
