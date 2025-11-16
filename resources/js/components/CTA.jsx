import React from "react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Siap Transformasi Digital Bisnis Anda?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Hubungi tim kami dan dapatkan konsultasi gratis untuk solusi digital terbaik bagi bisnis Anda.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/6282141733187"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition shadow-xl"
            >
              <span>💬</span>
              WhatsApp: 082141733187
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition shadow-xl"
            >
              Lihat Layanan Kami
            </motion.a>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold">50+</div>
              <div className="text-blue-200">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold">20+</div>
              <div className="text-blue-200">Automations Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold">100%</div>
              <div className="text-blue-200">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
