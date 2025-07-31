"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const messages = [
  {
    name: "Andi",
    message: "Selamat ya! Seru banget acaranya!",
    emoji: "🎉",
    avatar: "A",
    color: "#FF6B6B",
  },
  {
    name: "Budi",
    message: "Wah gokil sih ini, sukses terus!",
    emoji: "🚀",
    avatar: "B",
    color: "#4ECDC4",
  },
  {
    name: "Caca",
    message: "Terima kasih panitia, asik banget!",
    emoji: "❤️",
    avatar: "C",
    color: "#45B7D1",
  },
  {
    name: "Dina",
    message: "Ga sabar ikut acara lagi!",
    emoji: "🥳",
    avatar: "D",
    color: "#96CEB4",
  },
  {
    name: "Eka",
    message: "Seruuuuu banget ospeknya!",
    emoji: "🔥",
    avatar: "E",
    color: "#FFEAA7",
  },
  {
    name: "Fira",
    message: "Panitia keren abis, makasih ya!",
    emoji: "🙌",
    avatar: "F",
    color: "#DDA0DD",
  },
  {
    name: "Gita",
    message: "Ospek terbaik yang pernah ada!",
    emoji: "⭐",
    avatar: "G",
    color: "#98D8C8",
  },
  {
    name: "Hana",
    message: "Mentornya baik banget, love!",
    emoji: "💕",
    avatar: "H",
    color: "#F7DC6F",
  },
];

export default function MessageWall() {
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#FFF5EC] via-[#FFF8F0] to-[#FFF5E1] relative overflow-hidden">
      {/* Floating background elements */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 bg-[#ffb6a6] rounded-full mix-blend-multiply blur-3xl opacity-20"
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-32 right-16 w-32 h-32 bg-[#ff9478] rounded-full mix-blend-multiply blur-2xl opacity-25"
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Interactive Title */}
      <motion.div
        className="text-center mb-16 relative"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          x: mousePosition.x * 0.2,
        }}
      >
        <motion.h2
          className="text-5xl font-bold bg-gradient-to-r from-[#ff9478] via-[#ff7c5b] to-[#ff9478] bg-clip-text text-transparent mb-6"
          animate={{
            backgroundPosition: ["0%", "100%", "0%"],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          💌 Wall of Love
        </motion.h2>

        <motion.p
          className="text-[#8B5A3C] text-lg max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Kata-kata manis dari teman-teman kelompok 4 yang bikin hati hangat
        </motion.p>

        {/* Decorative line */}
        <motion.div
          className="w-32 h-1 bg-gradient-to-r from-[#ff9478] to-[#ffb6a6] mx-auto rounded-full mt-4"
          initial={{ width: 0 }}
          whileInView={{ width: 128 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.div>

      {/* Messages Grid - Preview (8 messages) */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {messages.map((msg, index) => (
            <MessageCard
              key={index}
              message={msg}
              index={index}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
              mousePosition={mousePosition}
            />
          ))}
        </motion.div>

        {/* Navigate to Full Messages Page */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.button
            onClick={() => router.push("/pesan")}
            className="px-10 py-5 bg-gradient-to-r from-[#ff9478] to-[#ff7c5b] text-white font-bold text-lg rounded-full shadow-xl relative overflow-hidden group"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 25px 50px rgba(255, 148, 120, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#ff7c5b] to-[#ff5722]"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center gap-3">
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                ✨
              </motion.span>
              Lihat Semua Pesan (40+)
              <motion.span
                className="inline-block"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </span>
          </motion.button>

          <motion.p
            className="text-[#8B5A3C] text-sm mt-4 opacity-75"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.75 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Masih ada 32 pesan lainnya yang menunggu! 💕
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function MessageCard({
  message,
  index,
  hoveredIndex,
  setHoveredIndex,
  mousePosition,
}) {
  const isHovered = hoveredIndex === index;
  const [liked, setLiked] = useState(false);

  return (
    <motion.div
      className="group relative"
      variants={{
        hidden: { opacity: 0, y: 60, scale: 0.8 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      style={{
        x: isHovered ? mousePosition.x * 0.3 : 0,
        y: isHovered ? mousePosition.y * 0.2 : 0,
      }}
    >
      {/* Card */}
      <motion.div
        className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 relative overflow-hidden"
        whileHover={{
          y: -8,
          boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Background glow */}
        <motion.div
          className="absolute inset-0 opacity-0 rounded-2xl"
          style={{ backgroundColor: `${message.color}20` }}
          animate={
            isHovered
              ? {
                  opacity: [0, 0.5, 0],
                  scale: [1, 1.05, 1],
                }
              : {}
          }
          transition={{
            duration: 2,
            repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
          }}
        />

        {/* Header */}
        <div className="flex items-center gap-3 mb-4 relative z-10">
          <motion.div
            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
            style={{ backgroundColor: message.color }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            {message.avatar}
          </motion.div>

          <div className="flex-1">
            <motion.h3
              className="font-bold text-gray-800 text-lg"
              animate={isHovered ? { color: message.color } : {}}
              transition={{ duration: 0.3 }}
            >
              {message.name}
            </motion.h3>
            <p className="text-gray-500 text-sm">Kelompok 4 Member</p>
          </div>

          <motion.div
            className="text-2xl"
            animate={
              isHovered
                ? {
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.2, 1],
                  }
                : {}
            }
            transition={{
              duration: 1,
              repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
            }}
          >
            {message.emoji}
          </motion.div>
        </div>

        {/* Message */}
        <motion.div
          className="relative z-10 mb-4"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-gray-700 leading-relaxed text-sm italic">
            "{message.message}"
          </p>
        </motion.div>

        {/* Footer */}
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center gap-2 text-gray-400 text-xs">
            <span>📅</span>
            <span>Ospek 2025</span>
          </div>

          <motion.button
            onClick={() => setLiked(!liked)}
            className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium transition-all ${
              liked
                ? "bg-red-100 text-red-600"
                : "bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-500"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              animate={liked ? { scale: [1, 1.3, 1] } : {}}
              transition={{ duration: 0.3 }}
            >
              {liked ? "❤️" : "🤍"}
            </motion.span>
            <span>{liked ? "Liked" : "Like"}</span>
          </motion.button>
        </div>

        {/* Hover progress bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 rounded-b-2xl"
          style={{ backgroundColor: message.color }}
          initial={{ width: "0%" }}
          animate={isHovered ? { width: "100%" } : { width: "0%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        {/* Floating sparkles */}
        <motion.div
          className="absolute top-2 right-2 text-yellow-400 opacity-0"
          animate={
            isHovered
              ? {
                  opacity: [0, 1, 0],
                  y: [0, -15, -30],
                  x: [0, 5, 10],
                  rotate: [0, 180, 360],
                }
              : {}
          }
          transition={{
            duration: 2,
            repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
          }}
        >
          ✨
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
