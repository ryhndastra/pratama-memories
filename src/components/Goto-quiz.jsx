"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function GotoQuiz() {
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
    <section className="py-20 text-center bg-gradient-to-b from-[#FFF5E1] to-[#FFF5EC] relative overflow-hidden">
      {/* Floating background elements */}
      <motion.div
        className="absolute top-16 left-20 w-32 h-32 bg-[#ff8b70] rounded-full mix-blend-multiply blur-2xl opacity-20"
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-24 w-24 h-24 bg-[#ff6c4f] rounded-full mix-blend-multiply blur-xl opacity-25"
        animate={{
          x: [0, -35, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Floating game icons */}
      <motion.div
        className="absolute top-1/4 right-1/4 text-3xl opacity-30"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        🎯
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-1/5 text-2xl opacity-40"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
          rotate: [0, 15, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        🧩
      </motion.div>

      <motion.div
        className="absolute top-1/3 left-1/3 text-2xl opacity-35"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -180, 0],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        🎲
      </motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6"
        style={{
          x: mousePosition.x * 0.2,
        }}
      >
        {/* Interactive title */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl font-bold bg-gradient-to-r from-[#ff8b70] via-[#ff6c4f] to-[#ff8b70] bg-clip-text text-transparent mb-6 relative"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            Seru-seruan Bareng!
            {/* Floating emoji */}
            <motion.span
              className="absolute -top-4 -right-8 text-3xl"
              animate={{
                rotate: [0, 20, -20, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              🎉
            </motion.span>
          </motion.h2>

          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-[#ff8b70] to-[#ff6c4f] mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          className="mb-10 text-xl text-[#8B5A3C] leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Yuk ikutan quiz lucu-lucuan kelompok kita! Siap-siap ketawa dan
          nostalgia bareng! ✨
        </motion.p>

        {/* Interactive features grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {[
            {
              icon: "🧠",
              title: "Quiz Seru",
              desc: "Pertanyaan unik tentang ospek kita",
            },
            {
              icon: "🏆",
              title: "Skor Tinggi",
              desc: "Siapa yang paling ingat momen kita?",
            },
            {
              icon: "😂",
              title: "Ketawa Bareng",
              desc: "Dijamin bikin nostalgia dan ngakak",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 relative overflow-hidden group"
              whileHover={{
                y: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="text-4xl mb-3"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.2 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>

              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#ff8b70]/10 to-[#ff6c4f]/10 rounded-2xl opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Link href="/quiz">
            <motion.button
              className="relative px-10 py-5 bg-gradient-to-r from-[#ff8b70] to-[#ff6c4f] text-white font-bold text-lg rounded-full shadow-xl overflow-hidden group"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(255, 139, 112, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Button background animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#ff6c4f] to-[#ff4d2a]"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />

              {/* Button content */}
              <span className="relative z-10 flex items-center gap-3">
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  🎮
                </motion.span>
                Main Quiz Yuk!
                <motion.span
                  className="inline-block"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.span>
              </span>

              {/* Ripple effect */}
              <motion.div
                className="absolute inset-0 bg-white rounded-full opacity-0"
                whileTap={{
                  scale: [0, 2],
                  opacity: [0.3, 0],
                }}
                transition={{ duration: 0.4 }}
              />

              {/* Floating sparkles */}
              <motion.div
                className="absolute -top-2 -right-2 text-yellow-300"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                ✨
              </motion.div>
            </motion.button>
          </Link>

          {/* Encouraging text */}
          <motion.p
            className="text-[#8B5A3C] text-sm mt-6 opacity-75"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.75 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            🎯 Siap-siap test ingatan tentang momen seru kita!
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Mouse follower element */}
      <motion.div
        className="absolute w-24 h-24 bg-gradient-to-r from-[#ff8b70]/20 to-[#ff6c4f]/20 rounded-full blur-xl pointer-events-none"
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
    </section>
  );
}
