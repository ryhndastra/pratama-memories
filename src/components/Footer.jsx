"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 100,
        y: (e.clientY - window.innerHeight / 2) / 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const quickLinks = [
    { name: "Timeline", href: "#timeline", emoji: "📅" },
    { name: "Galeri", href: "/galeri", emoji: "📸" },
    { name: "Pesan", href: "/pesan", emoji: "💌" },
    { name: "Quiz", href: "/quiz", emoji: "🎮" },
  ];

  const techStack = [
    { name: "Next.js", emoji: "⚡", color: "#000000" },
    { name: "Framer Motion", emoji: "🎭", color: "#0055FF" },
    { name: "Tailwind CSS", emoji: "🎨", color: "#06B6D4" },
  ];

  const memories = [
    "Yel-yel paling keren",
    "Games seru bareng",
    "Foto-foto lucu",
    "Ketawa bareng",
    "Momen haru",
    "Persahabatan baru",
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#FFF5E1] to-[#FFF5EC]  overflow-hidden">
      {/* Floating background elements */}
      <motion.div
        className="absolute top-10 left-20 w-40 h-40 bg-[#FFD4C4] rounded-full mix-blend-multiply blur-3xl opacity-20"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-16 right-24 w-32 h-32 bg-[#FFBFAE] rounded-full mix-blend-multiply blur-2xl opacity-25"
        animate={{
          x: [0, -40, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Floating emojis */}
      <motion.div
        className="absolute top-20 right-1/4 text-2xl opacity-30"
        animate={{
          rotate: [0, 15, -15, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        🎓
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-1/3 text-3xl opacity-25"
        animate={{
          x: [0, 20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        🌟
      </motion.div>

      {/* Mouse follower */}
      <motion.div
        className="absolute w-24 h-24 bg-gradient-to-r from-[#FFD4C4]/30 to-[#FFBFAE]/30 rounded-full blur-xl pointer-events-none"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20,
        }}
        style={{
          left: "50%",
          top: "50%",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand & Message from Mentor */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              x: mousePosition.x * 0.2,
            }}
          >
            <motion.div
              className="mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-[#8B4513] via-[#A0522D] to-[#8B4513] bg-clip-text text-transparent mb-3">
                💭 Kelompok 4 Forever
              </h3>
              <p className="text-[#8B5A3C] text-lg leading-relaxed">
                Website ini dibuat khusus untuk kalian, anak-anak Kelompok 4
                yang luar biasa. Semoga bisa jadi kenangan indah yang selalu
                bisa kalian buka kapan saja.
              </p>
            </motion.div>

            {/* Mentor Message */}
            <motion.div
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50"
              whileHover={{ y: -2, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="font-bold text-[#8B4513] mb-3 flex items-center gap-2">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  💌
                </motion.span>
                Pesan Mentor
              </h4>
              <p className="text-sm text-[#8B5A3C] italic leading-relaxed">
                "Kalian adalah kelompok terbaik yang pernah mentor bimbing.
                Semoga persahabatan ini terus berlanjut dan sukses selalu untuk
                kalian semua!"
              </p>
              <p className="text-xs text-[#A0522D] mt-2 font-medium">
                - Mentor Kelompok 4 dengan ❤️
              </p>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="font-bold text-xl text-[#8B4513] mb-6 flex items-center gap-2">
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                🔗
              </motion.span>
              Quick Link
            </h4>
            <ul className="space-y-3 mb-8">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-3 text-[#8B5A3C] hover:text-[#8B4513] transition-colors group"
                  >
                    <motion.span
                      className="text-lg"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.emoji}
                    </motion.span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Memories Highlight */}
            <motion.div
              className="bg-white/40 backdrop-blur-sm rounded-2xl p-4 border border-white/50"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <h5 className="font-bold text-[#8B4513] mb-3 text-sm flex items-center gap-2">
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  ✨
                </motion.span>
                Momen Terbaik
              </h5>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {memories.map((memory, index) => (
                  <motion.div
                    key={memory}
                    className="text-[#8B5A3C] flex items-center gap-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-orange-400">•</span>
                    {memory}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Tech Stack & Credits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4 className="font-bold text-xl text-[#8B4513] mb-6 flex items-center gap-2">
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                ⚙️
              </motion.span>
              Dibuat Dengan
            </h4>
            <div className="space-y-3 mb-8">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="flex items-center gap-3 text-[#8B5A3C] group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm"
                    style={{ backgroundColor: tech.color }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {tech.emoji}
                  </motion.div>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Project Info */}
            <motion.div
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50"
              whileHover={{ y: -2, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <h5 className="font-bold text-[#8B4513] mb-3 flex items-center gap-2">
                <motion.span
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  📊
                </motion.span>
                Info Website
              </h5>
              <div className="space-y-2 text-sm text-[#8B5A3C]">
                <div className="flex justify-between">
                  <span>Dibuat Oleh:</span>
                  <span className="font-medium">Reyhand</span>
                </div>
                <div className="flex justify-between">
                  <span>Pada:</span>
                  <span className="font-medium">Agustus 2025</span>
                </div>
                <div className="flex justify-between">
                  <span>Tujuan:</span>
                  <span className="font-medium">Kenang-kenangan</span>
                </div>
                <div className="flex justify-between">
                  <span>Untuk:</span>
                  <span className="font-medium">Kelompok 4 ❤️</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-[#FFD4C4] pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <motion.div
              className="text-center md:text-left"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-[#8B5A3C] mb-2">
                © 2025 Website Kenang-kenangan Kelompok 4. Dibuat dengan{" "}
                <motion.span
                  className="inline-block text-red-500"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                >
                  ❤️
                </motion.span>{" "}
                oleh Mentor kalian.
              </p>
              <p className="text-sm text-[#A0522D]">
                "Semoga kalian selalu ingat momen-momen indah ini" ✨
              </p>
            </motion.div>

            {/* Back to Top */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                🚀
              </motion.span>
              Kembali ke Atas
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-[#FFD4C4] via-[#FFBFAE] to-[#FFD4C4] opacity-50"></div>
    </footer>
  );
}
