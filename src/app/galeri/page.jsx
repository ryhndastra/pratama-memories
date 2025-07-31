"use client";
import Modal from "@/components/Modal";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const media = [
  {
    id: 1,
    type: "image",
    src: "/images/hero-photo.jpeg",
    title: "Momen Upacara",
    desc: "Waktu kita baris panas-panasan tapi tetap senyum buat difoto 🫠",
  },
  {
    id: 2,
    type: "video",
    src: "/videos/yel_yel.mp4",
    title: "Yel-Yel 🔥",
    desc: "Ini video waktu kita tampil paling pecah yel-yel di depan semua kelompok.",
  },
  {
    id: 3,
    type: "image",
    src: "/images/foto2.jpg",
    title: "Mentor & Teman",
    desc: "Waktu mentor kita ngajak foto bareng sebelum bubar.",
  },
  {
    id: 4,
    type: "image",
    src: "/images/foto3.jpg",
    title: "Ngabuburit Rame",
    desc: "Kita jalan bareng keliling kampus, capek tapi seru.",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const titleVariants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function GaleriPage() {
  const [selected, setSelected] = useState(null);

  return (
    <motion.main
      className="min-h-screen bg-[#FFF5EC] px-6 py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Back to Home Button */}
      <motion.div
        className="max-w-6xl mx-auto mb-8"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-[#3b1d1f] font-medium hover:bg-gray-50"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Kembali ke Home
        </button>
      </motion.div>

      {/* Animated Title */}
      <motion.h1
        className="text-4xl font-bold text-center text-[#3b1d1f] mb-10"
        variants={titleVariants}
      >
        Galeri Lengkap 📸
      </motion.h1>

      {/* Animated Grid Gallery */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        variants={containerVariants}
      >
        {media.map((item, index) => (
          <motion.div
            key={item.id}
            className="rounded-xl overflow-hidden shadow-md bg-white group cursor-pointer"
            variants={itemVariants}
            whileHover={{
              scale: 1.03,
              y: -5,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelected(item)}
          >
            {/* Media Container with Overlay Animation */}
            <div className="relative overflow-hidden">
              {item.type === "image" ? (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={item.src || "/placeholder.svg"}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-60 object-cover"
                  />
                </motion.div>
              ) : (
                <motion.video
                  muted
                  loop
                  className="w-full h-60 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <source src={item.src} type="video/mp4" />
                </motion.video>
              )}
            </div>

            {/* Content with Slide Animation */}
            <motion.div
              className="p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
            >
              <h2 className="font-semibold text-[#1F2937] mb-2">
                {item.title}
              </h2>
              <p className="text-sm text-[#4B5563] line-clamp-2">{item.desc}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal with Animation */}
      <Modal
        isOpen={!!selected}
        item={selected}
        onClose={() => setSelected(null)}
      />
    </motion.main>
  );
}
