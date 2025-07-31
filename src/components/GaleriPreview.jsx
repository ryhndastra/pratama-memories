"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const galleryItems = [
  {
    id: 1,
    src: "/images/hero-photo.jpeg",
    alt: "Upacara pembukaan",
    desc: "Upacara pembukaan ospek di hari pertama.",
    category: "Ceremony",
    color: "#FFE4E1",
  },
  {
    id: 2,
    src: "/images/hero-photo.jpeg",
    alt: "Games kelompok",
    desc: "Keseruan saat games antar kelompok.",
    category: "Games",
    color: "#E1F5FE",
  },
  {
    id: 3,
    src: "/images/hero-photo.jpeg",
    alt: "Foto bareng mentor",
    desc: "Momen bareng mentor sebelum pulang.",
    category: "Moments",
    color: "#F3E5F5",
  },
];

export default function GaleriPreview() {
  const router = useRouter();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredItem, setHoveredItem] = useState(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 25,
          y: (e.clientY - rect.top - rect.height / 2) / 25,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      id="galeri"
      className="relative py-20 px-6 bg-gradient-to-b from-[#FFF5EC] via-[#FFF8F0] to-[#FFF5E1] overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-[#FDE68A] to-[#FCD34D] rounded-full mix-blend-multiply blur-3xl opacity-20"
        style={{ y: y1, rotate }}
      />

      <motion.div
        className="absolute bottom-32 right-16 w-48 h-48 bg-gradient-to-r from-[#FCA5A5] to-[#F87171] rounded-full mix-blend-multiply blur-2xl opacity-25"
        style={{ y: y2 }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-16 h-16 border-2 border-[#60A5FA] rounded-lg opacity-30"
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/5 w-12 h-12 bg-[#A78BFA] rounded-full opacity-40"
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Mouse follower element */}
      <motion.div
        className="absolute w-32 h-32 bg-gradient-to-r from-[#60A5FA]/20 to-[#A78BFA]/20 rounded-full blur-xl pointer-events-none"
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

      {/* Elegant Title */}
      <motion.div
        className="text-center mb-16 relative"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          x: mousePosition.x * 0.3,
        }}
      >
        <motion.h2
          className="text-5xl font-bold bg-gradient-to-r from-[#1F2937] via-[#4B5563] to-[#1F2937] bg-clip-text text-transparent mb-4 relative"
          animate={{
            backgroundPosition: ["0%", "100%", "0%"],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          Galeri Kenangan
          {/* Decorative elements */}
          <motion.span
            className="absolute -top-4 -right-8 text-2xl"
            animate={{
              rotate: [0, 15, -15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            📸
          </motion.span>
        </motion.h2>

        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-[#60A5FA] to-[#A78BFA] mx-auto rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.div>

      {/* Enhanced Gallery Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {galleryItems.map((item, index) => (
          <GalleryCard
            key={item.id}
            item={item}
            index={index}
            hoveredItem={hoveredItem}
            setHoveredItem={setHoveredItem}
            mousePosition={mousePosition}
          />
        ))}
      </motion.div>

      {/* Enhanced CTA Button */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <motion.button
          onClick={() => router.push("/galeri")}
          className="relative px-10 py-4 bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] text-white font-semibold rounded-full shadow-lg overflow-hidden group"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(96, 165, 250, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Button background animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8]"
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
              🎯
            </motion.span>
            Lihat Semua Galeri
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
        </motion.button>
      </motion.div>
    </section>
  );
}

function GalleryCard({
  item,
  index,
  hoveredItem,
  setHoveredItem,
  mousePosition,
}) {
  const isHovered = hoveredItem === item.id;

  return (
    <motion.div
      className="group relative"
      variants={{
        hidden: { opacity: 0, y: 60, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onMouseEnter={() => setHoveredItem(item.id)}
      onMouseLeave={() => setHoveredItem(null)}
      style={{
        x: isHovered ? mousePosition.x * 0.5 : 0,
        y: isHovered ? mousePosition.y * 0.3 : 0,
      }}
    >
      {/* Floating background glow */}
      <motion.div
        className="absolute -inset-4 rounded-2xl opacity-0 blur-xl"
        style={{ backgroundColor: item.color }}
        animate={
          isHovered
            ? {
                opacity: [0, 0.4, 0],
                scale: [1, 1.1, 1],
              }
            : {}
        }
        transition={{
          duration: 2,
          repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
        }}
      />

      {/* Main card */}
      <motion.div
        className="relative rounded-2xl overflow-hidden shadow-lg bg-white/80 backdrop-blur-sm border border-white/20"
        whileHover={{
          y: -10,
          boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Image container */}
        <div className="relative overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={item.src || "/placeholder.svg"}
              alt={item.alt}
              width={600}
              height={400}
              className="object-cover w-full h-60"
            />
          </motion.div>

          {/* Category badge */}
          <motion.div
            className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + 0.5 }}
          >
            {item.category}
          </motion.div>

          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute bottom-4 left-4 right-4 text-white"
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Lihat Detail</span>
                <motion.div
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(255,255,255,0.3)",
                  }}
                >
                  <span className="text-xs">👁️</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Floating particles */}
          <motion.div
            className="absolute top-2 right-2 text-lg"
            animate={
              isHovered
                ? {
                    y: [0, -8, 0],
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.2, 1],
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
        </div>

        {/* Content */}
        <motion.div
          className="p-6 relative"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.h3
            className="text-xl font-bold text-[#1F2937] mb-2"
            animate={
              isHovered
                ? {
                    color: "#60A5FA",
                    scale: 1.02,
                  }
                : {}
            }
            transition={{ duration: 0.3 }}
          >
            {item.alt}
          </motion.h3>

          <motion.p
            className="text-[#4B5563] text-sm leading-relaxed"
            animate={isHovered ? { color: "#374151" } : {}}
            transition={{ duration: 0.3 }}
          >
            {item.desc}
          </motion.p>

          {/* Interactive progress indicator */}
          <motion.div
            className="mt-4 h-1 bg-gray-100 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-[#60A5FA] to-[#A78BFA] rounded-full"
              initial={{ width: "0%" }}
              animate={isHovered ? { width: "100%" } : { width: "0%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
