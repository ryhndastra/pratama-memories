"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Hero() {
  const router = useRouter();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  // Track mouse movement for parallax effect
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

  // Floating animation variants
  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-2, 2, -2],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative w-full min-h-screen bg-[#fff5ec] flex items-center justify-between px-6 md:px-20 py-12 overflow-hidden">
      {/* Animated Background Blobs */}
      <motion.div
        className="absolute -top-10 -left-10 w-72 h-72 bg-[#ffeadb] rounded-full mix-blend-multiply blur-2xl opacity-50 z-0"
        style={{ y: y1 }}
        variants={pulseVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-20 right-0 w-96 h-96 bg-[#ffb6a6] rounded-full mix-blend-multiply blur-3xl opacity-30 z-0"
        style={{ y: y2 }}
        variants={floatingVariants}
        animate="animate"
      />

      {/* Additional floating elements */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-20 h-20 bg-[#ffd4c4] rounded-full mix-blend-multiply blur-xl opacity-40 z-0"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Interactive particles */}
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-16 h-16 bg-[#ffcab0] rounded-full mix-blend-multiply blur-lg opacity-30 z-0"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -25, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Mouse-following element */}
      <motion.div
        className="absolute w-32 h-32 bg-gradient-to-r from-[#ffb6a6] to-[#ffd4c4] rounded-full mix-blend-multiply blur-2xl opacity-20 z-0 pointer-events-none"
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

      {/* Text Section with Enhanced Animations */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-xl"
        style={{
          x: mousePosition.x * 0.5,
          y: mousePosition.y * 0.3,
        }}
      >
        {/* Animated Title */}
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-[#3b1d1f] leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span
            className="inline-block"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 3,
            }}
          >
            💭
          </motion.span>{" "}
          Nostalgia Ospek <br />
          <motion.span
            className="text-[#9e4f4f]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Pratama Kelompok 4 — 2025
          </motion.span>
        </motion.h1>
        {/* Animated Paragraphs */}
        <motion.p
          className="mt-4 text-[#5f3b3b] text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Keringetan bareng, bercanda bareng, sampe dihukum bareng sama dkk.
        </motion.p>
        <motion.p
          className="text-sm text-[#826060] italic mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          "Karena momen ini gak akan terulang lagi."{" "}
          <motion.span
            className="inline-block"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 2,
            }}
          >
            💌
          </motion.span>
        </motion.p>
        <motion.button
          onClick={() => router.push("/galeri")}
          className="mt-6 inline-block bg-[#ffb6a6] text-white px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-300 relative overflow-hidden group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(255, 182, 166, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Button background animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#f79e8a] to-[#ff9f7a] rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <span className="relative z-10 flex items-center gap-2">
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              📸
            </motion.span>
            Lihat Galeri
          </span>
        </motion.button>
      </motion.div>

      {/* Enhanced Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="hidden md:block relative z-10"
        style={{
          x: mousePosition.x * -0.3,
          y: mousePosition.y * -0.2,
        }}
      >
        {/* Floating frame effect */}
        <motion.div
          className="absolute -inset-4 bg-gradient-to-r from-[#ffb6a6] to-[#ffd4c4] rounded-3xl blur-lg opacity-30"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 1, -1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Interactive image container */}
        <motion.div
          className="relative"
          whileHover={{
            scale: 1.02,
            rotate: 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/images/hero-photo.jpeg"
            alt="Kenangan Ospek"
            width={400}
            height={500}
            className="rounded-3xl shadow-lg object-cover border-4 border-[#ffe3d5] relative z-10"
          />

          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-[#ffb6a6]/20 to-transparent rounded-3xl opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Floating hearts */}
        <motion.div
          className="absolute -top-5 -right-5 text-2xl"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          💕
        </motion.div>

        <motion.div
          className="absolute -bottom-3 -left-3 text-xl"
          animate={{
            y: [0, -8, 0],
            x: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          ✨
        </motion.div>
      </motion.div>
    </section>
  );
}
