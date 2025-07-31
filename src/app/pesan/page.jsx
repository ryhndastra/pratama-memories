"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const allMessages = [
  {
    name: "Andi",
    message: "Selamat ya! Seru banget acaranya!",
    emoji: "🎉",
    avatar: "A",
    color: "#FF6B6B",
    category: "celebration",
  },
  {
    name: "Budi",
    message: "Wah gokil sih ini, sukses terus!",
    emoji: "🚀",
    avatar: "B",
    color: "#4ECDC4",
    category: "motivation",
  },
  {
    name: "Caca",
    message: "Terima kasih panitia, asik banget!",
    emoji: "❤️",
    avatar: "C",
    color: "#45B7D1",
    category: "gratitude",
  },
  {
    name: "Dina",
    message: "Ga sabar ikut acara lagi!",
    emoji: "🥳",
    avatar: "D",
    color: "#96CEB4",
    category: "excitement",
  },
  {
    name: "Eka",
    message: "Seruuuuu banget ospeknya!",
    emoji: "🔥",
    avatar: "E",
    color: "#FFEAA7",
    category: "fun",
  },
  {
    name: "Fira",
    message: "Panitia keren abis, makasih ya!",
    emoji: "🙌",
    avatar: "F",
    color: "#DDA0DD",
    category: "gratitude",
  },
  {
    name: "Gita",
    message: "Ospek terbaik yang pernah ada!",
    emoji: "⭐",
    avatar: "G",
    color: "#98D8C8",
    category: "praise",
  },
  {
    name: "Hana",
    message: "Mentornya baik banget, love!",
    emoji: "💕",
    avatar: "H",
    color: "#F7DC6F",
    category: "appreciation",
  },
  {
    name: "Indra",
    message: "Games nya seru, bikin nagih!",
    emoji: "🎮",
    avatar: "I",
    color: "#BB8FCE",
    category: "fun",
  },
  {
    name: "Joko",
    message: "Kelompok 4 memang yang terbaik!",
    emoji: "🏆",
    avatar: "J",
    color: "#85C1E9",
    category: "pride",
  },
  {
    name: "Kiki",
    message: "Yel-yel kita paling keren!",
    emoji: "📢",
    avatar: "K",
    color: "#F8C471",
    category: "pride",
  },
  {
    name: "Lala",
    message: "Foto-fotonya bagus semua!",
    emoji: "📸",
    avatar: "L",
    color: "#82E0AA",
    category: "memories",
  },
  {
    name: "Maya",
    message: "Makanannya enak-enak!",
    emoji: "🍕",
    avatar: "M",
    color: "#F1948A",
    category: "food",
  },
  {
    name: "Nina",
    message: "Teman-teman pada asik!",
    emoji: "😄",
    avatar: "N",
    color: "#85C1E9",
    category: "friendship",
  },
  {
    name: "Omar",
    message: "Pengalaman yang tak terlupakan!",
    emoji: "✨",
    avatar: "O",
    color: "#D7BDE2",
    category: "memories",
  },
  {
    name: "Putri",
    message: "Semangat terus kelompok 4!",
    emoji: "💪",
    avatar: "P",
    color: "#A9DFBF",
    category: "motivation",
  },
  {
    name: "Qori",
    message: "Panitia ramah dan helpful!",
    emoji: "🤝",
    avatar: "Q",
    color: "#F9E79F",
    category: "appreciation",
  },
  {
    name: "Rina",
    message: "Acara terorganisir dengan baik!",
    emoji: "👏",
    avatar: "R",
    color: "#AED6F1",
    category: "praise",
  },
  {
    name: "Sari",
    message: "Banyak ilmu yang didapat!",
    emoji: "📚",
    avatar: "S",
    color: "#FADBD8",
    category: "learning",
  },
  {
    name: "Toni",
    message: "Networking yang luar biasa!",
    emoji: "🌐",
    avatar: "T",
    color: "#D5DBDB",
    category: "networking",
  },
  {
    name: "Udin",
    message: "Motivasi yang sangat menginspirasi!",
    emoji: "🌟",
    avatar: "U",
    color: "#FDEAA7",
    category: "motivation",
  },
  {
    name: "Vina",
    message: "Kelompok solid dan kompak!",
    emoji: "🤗",
    avatar: "V",
    color: "#D1F2EB",
    category: "teamwork",
  },
  {
    name: "Wati",
    message: "Mentor sabar dan pengertian!",
    emoji: "🥰",
    avatar: "W",
    color: "#FCF3CF",
    category: "appreciation",
  },
  {
    name: "Xavi",
    message: "Lokasi acara strategis banget!",
    emoji: "📍",
    avatar: "X",
    color: "#EBDEF0",
    category: "logistics",
  },
  {
    name: "Yani",
    message: "Doorprize nya keren-keren!",
    emoji: "🎁",
    avatar: "Y",
    color: "#D6EAF8",
    category: "prizes",
  },
  {
    name: "Zaki",
    message: "Waktu berlalu cepat sekali!",
    emoji: "⏰",
    avatar: "Z",
    color: "#FADBD8",
    category: "time",
  },
  {
    name: "Ayu",
    message: "Suasana hangat dan menyenangkan!",
    emoji: "☀️",
    avatar: "A",
    color: "#FEF9E7",
    category: "atmosphere",
  },
  {
    name: "Bayu",
    message: "Kegiatan variatif dan menarik!",
    emoji: "🎨",
    avatar: "B",
    color: "#EAF2F8",
    category: "activities",
  },
  {
    name: "Citra",
    message: "Teman baru yang luar biasa!",
    emoji: "👫",
    avatar: "C",
    color: "#E8F8F5",
    category: "friendship",
  },
  {
    name: "Dedi",
    message: "Pengalaman berharga untuk masa depan!",
    emoji: "🔮",
    avatar: "D",
    color: "#FDF2E9",
    category: "future",
  },
  {
    name: "Elsa",
    message: "Semua panitia profesional!",
    emoji: "💼",
    avatar: "E",
    color: "#EAEDED",
    category: "professional",
  },
  {
    name: "Fajar",
    message: "Acara memorable dan berkesan!",
    emoji: "💭",
    avatar: "F",
    color: "#E8F6F3",
    category: "memories",
  },
  {
    name: "Gina",
    message: "Kelompok 4 forever!",
    emoji: "🔄",
    avatar: "G",
    color: "#FEF5E7",
    category: "loyalty",
  },
  {
    name: "Hadi",
    message: "Terima kasih untuk semuanya!",
    emoji: "🙏",
    avatar: "H",
    color: "#EBF5FB",
    category: "gratitude",
  },
  {
    name: "Ira",
    message: "Sampai jumpa di acara selanjutnya!",
    emoji: "👋",
    avatar: "I",
    color: "#F4ECF7",
    category: "farewell",
  },
  {
    name: "Jihan",
    message: "Kenangan indah yang tak terlupakan!",
    emoji: "🌈",
    avatar: "J",
    color: "#E9F7EF",
    category: "memories",
  },
  {
    name: "Kevin",
    message: "Sukses selalu untuk kelompok 4!",
    emoji: "🎯",
    avatar: "K",
    color: "#FDF2E9",
    category: "wishes",
  },
  {
    name: "Lina",
    message: "Pengalaman ospek terbaik ever!",
    emoji: "🌺",
    avatar: "L",
    color: "#F8F9FA",
    category: "experience",
  },
  {
    name: "Mira",
    message: "Semoga persahabatan ini abadi!",
    emoji: "🤞",
    avatar: "M",
    color: "#E8F8F5",
    category: "friendship",
  },
  {
    name: "Nanda",
    message: "Kelompok 4 adalah keluarga!",
    emoji: "👨‍👩‍👧‍👦",
    avatar: "N",
    color: "#FEF9E7",
    category: "family",
  },
];

const categories = [
  { name: "Semua", value: "all", emoji: "🌟", color: "#FF9478" },
  { name: "Terima Kasih", value: "gratitude", emoji: "🙏", color: "#4ECDC4" },
  { name: "Keseruan", value: "fun", emoji: "🎉", color: "#FFEAA7" },
  { name: "Persahabatan", value: "friendship", emoji: "👫", color: "#FF6B6B" },
  { name: "Kenangan", value: "memories", emoji: "📸", color: "#A78BFA" },
  { name: "Motivasi", value: "motivation", emoji: "💪", color: "#34D399" },
];

export default function PesanPage() {
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredMessages = allMessages.filter((msg) => {
    const matchesCategory =
      selectedCategory === "all" || msg.category === selectedCategory;
    const matchesSearch =
      msg.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff7f2] via-[#fff5f0] to-[#fff3ee] relative overflow-hidden">
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

      <div className="relative z-10 px-6 py-12">
        {/* Back Button */}
        <motion.div
          className="max-w-7xl mx-auto mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-[#8B5A3C] font-medium hover:bg-white/90"
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

        {/* Header */}
        <motion.div
          className="text-center mb-12 relative max-w-4xl mx-auto"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            x: mousePosition.x * 0.2,
          }}
        >
          <motion.h1
            className="text-6xl font-bold bg-gradient-to-r from-[#ff9478] via-[#ff7c5b] to-[#ff9478] bg-clip-text text-transparent mb-6"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            💌 Semua Pesan Cinta
          </motion.h1>

          <motion.p
            className="text-[#8B5A3C] text-xl max-w-3xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            40 pesan hangat dari teman-teman kelompok 4 yang bikin hati
            tersentuh
          </motion.p>

          {/* Search Bar */}
          <motion.div
            className="max-w-md mx-auto mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Cari pesan atau nama..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-white/80 backdrop-blur-sm rounded-full border border-white/50 focus:outline-none focus:ring-2 focus:ring-[#ff9478] focus:border-transparent text-gray-700 placeholder-gray-500"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                🔍
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category.value
                    ? "bg-white text-gray-800 shadow-lg"
                    : "bg-white/60 text-gray-600 hover:bg-white/80"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  borderColor:
                    selectedCategory === category.value
                      ? category.color
                      : "transparent",
                  borderWidth:
                    selectedCategory === category.value ? "2px" : "0px",
                }}
              >
                <span className="mr-2">{category.emoji}</span>
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Messages Grid */}
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            {filteredMessages.map((msg, index) => (
              <MessageCard
                key={`${msg.name}-${index}`}
                message={msg}
                index={index}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
                mousePosition={mousePosition}
              />
            ))}
          </motion.div>

          {/* Results Info */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <p className="text-[#8B5A3C] text-lg">
              Menampilkan{" "}
              <span className="font-bold text-[#ff7c5b]">
                {filteredMessages.length}
              </span>{" "}
              dari{" "}
              <span className="font-bold text-[#ff7c5b]">
                {allMessages.length}
              </span>{" "}
              pesan ✨
            </p>
          </motion.div>
        </div>
      </div>
    </div>
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
