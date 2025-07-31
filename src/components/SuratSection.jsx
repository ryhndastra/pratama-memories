"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const suratData = [
  {
    id: 1,
    title: "Surat untuk Kelompok 4",
    from: "Kang Rey",
    date: "XXXXX",
    preview: "Terima kasih sudah jadi kelompok yang paling seru...",
    content: `Halo anak-anak Kelompok 4 yang luar biasa!

Waktu pertama kali ketemu kalian, mentor udah tau kalau kelompok ini bakal jadi yang paling berkesan. Dari yang awalnya malu-malu, sekarang udah jadi keluarga kecil yang solid banget.

Setiap momen bareng kalian itu precious banget. Mulai dari yang panik pas games, sampe yang kompak banget pas yel-yel. Kalian udah nunjukin kalau persahabatan itu bisa terbentuk dalam waktu singkat.

Semoga persahabatan ini terus berlanjut ya, dan jangan lupa mentor kalian yang ganteng ini! 😄

Dengan cinta,
Mentor Kelompok 4 💕`,
    envelope: "#FFE4E1",
    paper: "#FFF8F5",
    stamp: "💌",
  },
  {
    id: 2,
    title: "Surat untuk Kelompok 4",
    from: "Teh Sheila",
    date: "XXXXX",
    preview: "Dari kita, untuk kita semua...",
    content: `Untuk keluarga kecil Kelompok 4,

Siapa sangka dari yang awalnya stranger, sekarang udah jadi keluarga. Dari yang canggung ngobrol, sekarang udah bisa becanda tanpa batas.

Setiap orang di kelompok ini punya keunikan masing-masing. Ada yang jago ngelawak, ada yang jago foto, ada yang jago bikin strategi, ada yang jago ngasih semangat.

Gabungan dari semua keunikan itu yang bikin kelompok kita jadi istimewa. Semoga kita bisa tetap solid dan saling support dalam perjalanan kuliah nanti.

Kelompok 4 forever! 💪

Dengan sayang,
Keluarga Kelompok 4 👨‍👩‍👧‍👦`,
    envelope: "#F3E5F5",
    paper: "#FEFBFF",
    stamp: "👨‍👩‍👧‍👦",
  },
];

export default function SuratSection() {
  const [selectedSurat, setSelectedSurat] = useState(null);
  const [isOpening, setIsOpening] = useState(false);
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

  const openSurat = (surat) => {
    setIsOpening(true);
    setTimeout(() => {
      setSelectedSurat(surat);
      setIsOpening(false);
    }, 800);
  };

  const closeSurat = () => {
    setSelectedSurat(null);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#FFF5EC] via-[#FFF8F0] to-[#FFF5E1] relative overflow-hidden">
      {/* Floating background elements */}
      <motion.div
        className="absolute top-16 left-20 w-32 h-32 bg-[#FFD4C4] rounded-full mix-blend-multiply blur-2xl opacity-30"
        animate={{
          x: [0, 40, 0],
          y: [0, -25, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-24 w-24 h-24 bg-[#FFBFAE] rounded-full mix-blend-multiply blur-xl opacity-25"
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Floating letters */}
      <motion.div
        className="absolute top-1/4 right-1/4 text-3xl opacity-20"
        animate={{
          rotate: [0, 10, -10, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        💌
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-1/5 text-2xl opacity-25"
        animate={{
          x: [0, 15, 0],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        ✉️
      </motion.div>

      {/* Main content */}
      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        style={{
          x: mousePosition.x * 0.2,
        }}
      >
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl font-bold bg-gradient-to-r from-[#8B4513] via-[#A0522D] to-[#8B4513] bg-clip-text text-transparent mb-6 relative"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            💌 Surat Cinta Digital
            <motion.div
              className="absolute -top-4 -right-8 text-3xl"
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
              💕
            </motion.div>
          </motion.h2>

          <motion.p
            className="text-xl text-[#8B5A3C] leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Pesan-pesan hangat yang ditulis khusus untuk keluarga kecil Kelompok
            4
          </motion.p>

          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-[#D2691E] to-[#CD853F] mx-auto rounded-full mt-6"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Surat Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
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
          {suratData.map((surat, index) => (
            <SuratCard
              key={surat.id}
              surat={surat}
              index={index}
              onOpen={() => openSurat(surat)}
              mousePosition={mousePosition}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Surat Modal */}
      <AnimatePresence>
        {selectedSurat && (
          <SuratModal
            surat={selectedSurat}
            onClose={closeSurat}
            isOpening={isOpening}
          />
        )}
      </AnimatePresence>

      {/* Opening Animation Overlay */}
      <AnimatePresence>
        {isOpening && (
          <motion.div
            className="fixed inset-0 bg-[#8B4513]/20 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="text-6xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 0.8,
                repeat: 1,
              }}
            >
              ✉️
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function SuratCard({ surat, index, onOpen, mousePosition }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative cursor-pointer"
      variants={{
        hidden: { opacity: 0, y: 60, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onOpen}
      style={{
        x: isHovered ? mousePosition.x * 0.3 : 0,
        y: isHovered ? mousePosition.y * 0.2 : 0,
      }}
    >
      {/* Envelope Shadow */}
      <motion.div
        className="absolute inset-0 rounded-lg opacity-20 blur-lg"
        style={{ backgroundColor: surat.envelope }}
        animate={
          isHovered
            ? {
                scale: [1, 1.05, 1],
                opacity: [0.2, 0.4, 0.2],
              }
            : {}
        }
        transition={{
          duration: 2,
          repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
        }}
      />

      {/* Envelope */}
      <motion.div
        className="relative bg-white/90 backdrop-blur-sm rounded-lg shadow-xl border border-white/50 overflow-hidden"
        style={{ backgroundColor: surat.envelope }}
        whileHover={{
          y: -8,
          boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Envelope Flap */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/10 to-transparent"
          style={{
            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
            backgroundColor: `${surat.envelope}CC`,
          }}
          animate={
            isHovered
              ? {
                  scaleY: [1, 0.9, 1],
                }
              : {}
          }
          transition={{
            duration: 1,
            repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
          }}
        />

        {/* Stamp */}
        <motion.div
          className="absolute top-4 right-4 w-12 h-12 bg-white rounded border-2 border-dashed border-gray-300 flex items-center justify-center text-2xl"
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          {surat.stamp}
        </motion.div>

        {/* Content */}
        <div className="p-6 pt-16">
          {/* Address Label */}
          <motion.div
            className="bg-white/80 rounded-lg p-4 mb-4 border border-white/50"
            animate={isHovered ? { y: -2 } : { y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3
              className="font-bold text-lg text-gray-800 mb-2"
              animate={isHovered ? { color: "#8B4513" } : {}}
              transition={{ duration: 0.3 }}
            >
              {surat.title}
            </motion.h3>
            <p className="text-sm text-gray-600 mb-1">From: {surat.from}</p>
            <p className="text-xs text-gray-500">{surat.date}</p>
          </motion.div>

          {/* Preview */}
          <motion.div
            className="bg-white/60 rounded-lg p-3 border border-white/30"
            animate={
              isHovered ? { backgroundColor: "rgba(255,255,255,0.8)" } : {}
            }
            transition={{ duration: 0.3 }}
          >
            <p className="text-sm text-gray-700 italic leading-relaxed">
              "{surat.preview}..."
            </p>
          </motion.div>

          {/* Open Button */}
          <motion.div
            className="mt-4 text-center"
            initial={{ opacity: 0 }}
            animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#8B4513] text-white rounded-full text-sm font-medium">
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                ✉️
              </motion.span>
              Buka Surat
            </span>
          </motion.div>
        </div>

        {/* Hover glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent opacity-0 rounded-lg"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Floating sparkles */}
        <motion.div
          className="absolute top-2 left-2 text-yellow-400 opacity-0"
          animate={
            isHovered
              ? {
                  opacity: [0, 1, 0],
                  y: [0, -10, -20],
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

function SuratModal({ surat, onClose, isOpening }) {
  const handleClose = (e) => {
    e.stopPropagation();
    onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleBackdropClick}
    >
      <motion.div
        className="relative max-w-2xl w-full max-h-[90vh] overflow-hidden"
        initial={{ scale: 0.8, opacity: 0, rotateY: -90 }}
        animate={{ scale: 1, opacity: 1, rotateY: 0 }}
        exit={{ scale: 0.8, opacity: 0, rotateY: 90 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Paper Background with vintage effect */}
        <motion.div
          className="relative rounded-lg shadow-2xl overflow-hidden"
          style={{
            backgroundColor: surat.paper,
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.1) 0%, transparent 50%)
            `,
          }}
          animate={{
            boxShadow: [
              "0 25px 50px rgba(0,0,0,0.25)",
              "0 30px 60px rgba(0,0,0,0.3)",
              "0 25px 50px rgba(0,0,0,0.25)",
            ],
          }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        >
          {/* Paper texture overlay */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 2px,
                  rgba(0,0,0,0.03) 2px,
                  rgba(0,0,0,0.03) 4px
                )
              `,
            }}
          />

          {/* Close button - FIXED */}
          <motion.button
            className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:text-gray-900 hover:bg-white border border-gray-200"
            onClick={handleClose}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="text-lg font-bold">×</span>
          </motion.button>

          {/* Content */}
          <div className="relative z-10 p-8 max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <motion.div
              className="text-center mb-8 border-b border-gray-200 pb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <motion.div
                className="text-4xl mb-4"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                {surat.stamp}
              </motion.div>
              <h2 className="text-3xl font-bold text-[#8B4513] mb-2">
                {surat.title}
              </h2>
              <p className="text-gray-600">From: {surat.from}</p>
              <p className="text-sm text-gray-500">{surat.date}</p>
            </motion.div>

            <motion.div
              className="prose prose-lg max-w-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="text-gray-800 leading-relaxed whitespace-pre-line font-serif text-lg">
                {surat.content}
              </div>
            </motion.div>

            <motion.div
              className="flex justify-center mt-8 pt-6 border-t border-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="flex items-center gap-2 text-2xl">
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  💕
                </motion.span>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 0.5,
                  }}
                >
                  ✨
                </motion.span>
                <motion.span
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 1,
                  }}
                >
                  💌
                </motion.span>
              </div>
            </motion.div>
          </div>

          {/* Paper edge effects */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-black/5 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-black/5 to-transparent" />
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-transparent via-black/5 to-transparent" />
          <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-transparent via-black/5 to-transparent" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
