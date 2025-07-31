"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const timelineEvents = [
  {
    id: 1,
    title: "Hari Pertama: Pengenalan",
    description:
      "Momen pertama kita kenalan bareng, sempat canggung tapi seru banget.",
    img: "/images/hero-photo.jpeg",
    emoji: "👋",
    color: "#FFE4E1",
  },
  {
    id: 2,
    title: "Hari Kedua: Games Seru",
    description:
      "Siap-siap capek, karena hari ini penuh games seru antar kelompok.",
    img: "/images/hero-photo.jpeg",
    emoji: "🎮",
    color: "#E1F5FE",
  },
  {
    id: 3,
    title: "Hari Ketiga: Yel-Yel",
    description:
      "Persiapan yel-yel untuk tampil di depan panitia dan teman-teman.",
    img: "/images/hero-photo.jpeg",
    emoji: "📢",
    color: "#F3E5F5",
  },
  {
    id: 4,
    title: "Hari Keempat: Penutupan",
    description:
      "Diakhiri dengan penutupan yang meriah, semangat kita enggak bisa padam.",
    img: "/images/hero-photo.jpeg",
    emoji: "🎉",
    color: "#E8F5E8",
  },
];

export default function TimelineSection() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Animated timeline line height
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Track mouse movement for parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 20,
          y: (e.clientY - rect.top - rect.height / 2) / 20,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      id="timeline"
      className="bg-gradient-to-b from-[#FFF5E1] to-[#FFF5EC] py-20 px-6 relative overflow-hidden"
    >
      {/* Floating background elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-[#FCD34D] rounded-full mix-blend-multiply blur-2xl opacity-20"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-32 right-16 w-24 h-24 bg-[#F59E0B] rounded-full mix-blend-multiply blur-xl opacity-25"
        animate={{
          x: [0, -25, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Interactive title */}
      <motion.h2
        className="text-4xl font-bold text-center text-[#1F2937] mb-12 relative"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          x: mousePosition.x * 0.5,
        }}
      >
        Timeline Perjalanan Kita
        <motion.div
          className="absolute -top-2 -right-8 text-2xl"
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
          ⭐
        </motion.div>
      </motion.h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Animated Vertical Line */}
        <div className="border-l-4 border-gray-200 absolute h-full top-0 left-[50%] transform -translate-x-1/2 z-0"></div>
        <motion.div
          className="border-l-4 border-[#FCD34D] absolute top-0 left-[50%] transform -translate-x-1/2 z-10"
          style={{ height: lineHeight }}
        />

        {timelineEvents.map((event, index) => {
          const isLeft = index % 2 === 0;

          return (
            <TimelineItem
              key={event.id}
              event={event}
              index={index}
              isLeft={isLeft}
              hoveredItem={hoveredItem}
              setHoveredItem={setHoveredItem}
              mousePosition={mousePosition}
            />
          );
        })}
      </div>
    </section>
  );
}

function TimelineItem({
  event,
  index,
  isLeft,
  hoveredItem,
  setHoveredItem,
  mousePosition,
}) {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, margin: "-100px" });
  const isHovered = hoveredItem === event.id;

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="mb-16 relative"
      onMouseEnter={() => setHoveredItem(event.id)}
      onMouseLeave={() => setHoveredItem(null)}
      style={{
        x: isHovered ? (isLeft ? 10 : -10) : 0,
      }}
    >
      {/* Interactive Timeline Dot */}
      <motion.div
        className="absolute left-[50%] -translate-x-1/2 z-20 top-8"
        whileHover={{ scale: 1.3 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="w-6 h-6 rounded-full bg-[#FCD34D] border-4 border-white shadow-lg cursor-pointer relative"
          animate={
            isHovered
              ? {
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(252, 211, 77, 0.4)",
                    "0 0 0 10px rgba(252, 211, 77, 0)",
                    "0 0 0 0 rgba(252, 211, 77, 0)",
                  ],
                }
              : {}
          }
          transition={{
            duration: 0.6,
            repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
          }}
        >
          {/* Emoji indicator */}
          <motion.div
            className="absolute -top-8 left-1/2 -translate-x-1/2 text-lg"
            initial={{ opacity: 0, scale: 0 }}
            animate={
              isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
            }
            transition={{ duration: 0.2 }}
          >
            {event.emoji}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Content Container */}
      <div className="flex w-full">
        {/* Left Side Content */}
        {isLeft && (
          <motion.div
            className="w-1/2 pr-12 flex justify-end"
            style={{
              x: mousePosition.x * (isHovered ? 0.8 : 0.3),
              y: mousePosition.y * (isHovered ? 0.5 : 0.2),
            }}
          >
            <TimelineCard event={event} isHovered={isHovered} />
          </motion.div>
        )}

        {/* Spacer */}
        {!isLeft && <div className="w-1/2"></div>}

        {/* Right Side Content */}
        {!isLeft && (
          <motion.div
            className="w-1/2 pl-12 flex justify-start"
            style={{
              x: mousePosition.x * (isHovered ? -0.8 : -0.3),
              y: mousePosition.y * (isHovered ? 0.5 : 0.2),
            }}
          >
            <TimelineCard event={event} isHovered={isHovered} />
          </motion.div>
        )}

        {/* Spacer */}
        {isLeft && <div className="w-1/2"></div>}
      </div>
    </motion.div>
  );
}

function TimelineCard({ event, isHovered }) {
  return (
    <motion.div
      className="max-w-sm relative"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Floating background */}
      <motion.div
        className="absolute -inset-4 rounded-2xl opacity-20 blur-xl"
        style={{ backgroundColor: event.color }}
        animate={
          isHovered
            ? {
                scale: [1, 1.05, 1],
                opacity: [0.2, 0.3, 0.2],
              }
            : {}
        }
        transition={{
          duration: 2,
          repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
        }}
      />

      {/* Image Container */}
      <motion.div
        className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
        whileHover={{
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        }}
      >
        <motion.img
          src={event.img || "/placeholder.svg"}
          alt={event.title}
          className="w-full h-60 object-cover transition-transform duration-500"
          whileHover={{ scale: 1.1 }}
        />

        {/* Interactive overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute bottom-4 left-4 text-white font-semibold"
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {event.emoji} Lihat Detail
          </motion.div>
        </motion.div>

        {/* Floating particles */}
        <motion.div
          className="absolute top-2 right-2 text-xl"
          animate={
            isHovered
              ? {
                  y: [0, -5, 0],
                  rotate: [0, 10, -10, 0],
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

      {/* Text Content */}
      <motion.div
        className="text-center space-y-2 mt-4 relative"
        animate={isHovered ? { y: -2 } : { y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.h3
          className="text-xl font-semibold text-[#1F2937]"
          animate={
            isHovered
              ? {
                  color: "#9e4f4f",
                  scale: 1.05,
                }
              : {}
          }
          transition={{ duration: 0.3 }}
        >
          {event.title}
        </motion.h3>

        <motion.p
          className="text-[#4B5563] text-sm leading-relaxed"
          animate={isHovered ? { color: "#374151" } : {}}
          transition={{ duration: 0.3 }}
        >
          {event.description}
        </motion.p>

        {/* Interactive progress bar */}
        <motion.div
          className="w-full h-1 bg-gray-200 rounded-full mt-3 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-[#FCD34D] to-[#F59E0B] rounded-full"
            initial={{ width: "0%" }}
            animate={isHovered ? { width: "100%" } : { width: "0%" }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
