"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Hero({
  title = "Digital Excellence, Engineered for Growth",
  subtitle = "digimeta007 — Licensed Digital Innovation Company. Digital Marketing • Full-Stack Web Development • Business Automation",
  ctaPrimary = { label: "Request Private Consultation", href: "#contact" },
  ctaSecondary = { label: "Explore Our Capabilities", href: "#services" },
  stats = [
    { label: "Projects Completed", value: "50+" },
    { label: "Automations Delivered", value: "20+" },
    { label: "Client Satisfaction", value: "100%" },
  ],
}) {
  const textVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, ease: "easeOut" },
    }),
  };

  const waveVariants = {
    animate: {
      x: [0, -40, 0],
      y: [0, -6, 0],
      transition: { duration: 14, repeat: Infinity, ease: "linear" },
    },
  };

  const glowVariants = {
    animate: {
      opacity: [0.7, 0.95, 0.7],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-[#081024] text-white">
      {/* Background - SVG waves + animated groups via framer-motion */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="#071126" stopOpacity="1" />
              <stop offset="1" stopColor="#001029" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="waveGrad" x1="0" x2="1">
              <stop offset="0" stopColor="#00d4ff" stopOpacity="0.18" />
              <stop offset="0.5" stopColor="#7c5cff" stopOpacity="0.12" />
              <stop offset="1" stopColor="#00ffd1" stopOpacity="0.08" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="18" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <rect width="100%" height="100%" fill="url(#g1)"></rect>

          {/* subtle stars */}
          <g opacity="0.06">
            <circle cx="220" cy="80" r="2" fill="#fff" />
            <circle cx="490" cy="30" r="1.5" fill="#fff" />
            <circle cx="870" cy="50" r="1.8" fill="#fff" />
            <circle cx="1240" cy="20" r="1.2" fill="#fff" />
          </g>

          {/* animated waves (wrapped by motion.g) */}
          <motion.g variants={waveVariants} animate="animate" transform="translate(0,380)">
            <path
              d="M0,160 C240,80 480,240 720,200 C960,160 1200,80 1440,160 L1440 800 L0 800 Z"
              fill="url(#waveGrad)"
              filter="url(#glow)"
              opacity="0.85"
            />
            <path
              d="M0,190 C240,120 480,260 720,220 C960,180 1200,120 1440,190 L1440 800 L0 800 Z"
              fill="#071b2b"
              opacity="0.25"
            />
          </motion.g>

          {/* grid lines */}
          <g opacity="0.06" stroke="#37f0ff" strokeWidth="0.8">
            <path d="M0 520 L1440 520" />
            <path d="M0 440 L1440 440" />
            <path d="M0 600 L1440 600" />
          </g>

          {/* a soft glowing orb that breathes */}
          <motion.circle
            cx="1040"
            cy="160"
            r="120"
            fill="#00d4ff"
            opacity="0.05"
            variants={glowVariants}
            animate="animate"
          />
        </svg>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70 pointer-events-none -z-5" />

      <div className="relative px-6 sm:px-10 lg:px-20 py-20 lg:py-28 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-[#00d4ff]/20 to-[#7c5cff]/20 text-[#00e6ff] text-sm font-medium mb-4"
          >
            Licensed · Enterprise-grade · Results-driven
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-lg"
          >
            <motion.span custom={1} variants={textVariants}>
              {title}
            </motion.span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg sm:text-xl text-slate-200/90 max-w-2xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
          >
            {subtitle}
          </motion.p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href={ctaPrimary.href}
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#00d4ff] to-[#7c5cff] px-6 py-3 text-sm font-semibold shadow-xl"
            >
              {ctaPrimary.label}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href={ctaSecondary.href}
              className="inline-flex items-center justify-center rounded-2xl border border-slate-600 px-6 py-3 text-sm font-medium text-slate-200/90 hover:bg-slate-800/60 transition"
            >
              {ctaSecondary.label}
            </motion.a>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex gap-4 items-start"
            >
              <div className="shrink-0 w-12 h-12 rounded-lg bg-gradient-to-tr from-[#00d4ff]/20 to-[#7c5cff]/20 flex items-center justify-center text-[#00e6ff] font-bold">
                ✓
              </div>
              <div>
                <h4 className="font-semibold">Enterprise-Level Security</h4>
                <p className="mt-1 text-sm text-slate-300/80">
                  Arsitektur aman & praktik terbaik untuk data dan performa.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex gap-4 items-start"
            >
              <div className="shrink-0 w-12 h-12 rounded-lg bg-gradient-to-tr from-[#00d4ff]/20 to-[#7c5cff]/20 flex items-center justify-center text-[#00e6ff] font-bold">
                ⚡
              </div>
              <div>
                <h4 className="font-semibold">Automations That Scale</h4>
                <p className="mt-1 text-sm text-slate-300/80">
                  Workflow & sistem otomatis untuk mempercepat operasi dan mengurangi biaya.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mt-10 flex flex-wrap gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.07 * i }}
                className="min-w-[150px] bg-white/5 rounded-xl px-4 py-3"
              >
                <div className="text-2xl font-bold">{s.value}</div>
                <div className="text-sm text-slate-300">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* subtle hover tweak to speed wave animation */
        section:hover svg g {
          filter: none;
        }
      `}</style>
    </section>
  );
}
