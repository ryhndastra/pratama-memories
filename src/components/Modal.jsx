"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 50,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 50,
    transition: {
      duration: 0.2,
    },
  },
};

export default function Modal({ isOpen, item, onClose }) {
  if (!isOpen || !item) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-[#FFF5EC] flex items-center justify-center z-50 p-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-hidden relative"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-4 right-4 z-10 bg-transparent "
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ✕
            </motion.button>

            {/* Media */}
            <div className="relative">
              {item.type === "image" ? (
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.title}
                  width={800}
                  height={600}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
              ) : (
                <video controls className="w-full h-auto max-h-[70vh]" autoPlay>
                  <source src={item.src} type="video/mp4" />
                </video>
              )}
            </div>

            {/* Content */}
            <motion.div
              className="p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-[#1F2937] mb-3">
                {item.title}
              </h2>
              <p className="text-[#4B5563] leading-relaxed">{item.desc}</p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
