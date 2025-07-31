"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const quizData = [
  {
    question: "Siapa yang paling sering ngilang pas lagi istirahat?",
    options: ["Dimas", "Lala", "Yusuf", "Putri"],
    correct: 1,
    emoji: "👻",
  },
  {
    question: "Siapa yang paling jago ngelawak?",
    options: ["Fajar", "Tasya", "Dina", "Yoga"],
    correct: 0,
    emoji: "😂",
  },
  {
    question: "Kalau makan, siapa paling rakus? 😋",
    options: ["Santi", "Eka", "Jono", "Putri"],
    correct: 2,
    emoji: "🍕",
  },
  {
    question: "Siapa yang paling sering telat dateng?",
    options: ["Andi", "Budi", "Caca", "Dina"],
    correct: 1,
    emoji: "⏰",
  },
  {
    question: "Siapa yang paling jago dance waktu yel-yel?",
    options: ["Maya", "Nina", "Omar", "Putri"],
    correct: 0,
    emoji: "💃",
  },
  {
    question: "Siapa yang paling sering foto-foto?",
    options: ["Lala", "Kiki", "Joko", "Indra"],
    correct: 1,
    emoji: "📸",
  },
  {
    question: "Siapa yang paling pendiam tapi sebenernya lucu?",
    options: ["Qori", "Rina", "Sari", "Toni"],
    correct: 2,
    emoji: "🤫",
  },
  {
    question: "Siapa yang paling jago bikin strategi games?",
    options: ["Udin", "Vina", "Wati", "Xavi"],
    correct: 0,
    emoji: "🧠",
  },
  {
    question: "Siapa yang paling sering bantu temen?",
    options: ["Yani", "Zaki", "Ayu", "Bayu"],
    correct: 2,
    emoji: "🤝",
  },
  {
    question: "Siapa yang paling memorable quote-nya?",
    options: ["Citra", "Dedi", "Elsa", "Fajar"],
    correct: 3,
    emoji: "💬",
  },
];

const QUIZ_STATES = {
  WELCOME: "welcome",
  QUIZ: "quiz",
  RESULT: "result",
  LEADERBOARD: "leaderboard",
};

export default function QuizPage() {
  const [gameState, setGameState] = useState(QUIZ_STATES.WELCOME);
  const [playerName, setPlayerName] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const [leaderboard, setLeaderboard] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking
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

  // Load leaderboard from localStorage
  useEffect(() => {
    const savedLeaderboard = localStorage.getItem("ospek-quiz-leaderboard");
    if (savedLeaderboard) {
      setLeaderboard(JSON.parse(savedLeaderboard));
    }
  }, []);

  // Timer for quiz
  useEffect(() => {
    if (gameState === QUIZ_STATES.QUIZ && timeLeft > 0 && !showResult) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showResult) {
      handleAnswer(-1); // Auto submit when time runs out
    }
  }, [gameState, timeLeft, showResult]);

  const startQuiz = () => {
    if (playerName.trim()) {
      setGameState(QUIZ_STATES.QUIZ);
      setCurrentQuestion(0);
      setScore(0);
      setTimeLeft(15);
    }
  };

  const handleAnswer = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);

    if (answerIndex === quizData[currentQuestion].correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < quizData.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
        setTimeLeft(15);
      } else {
        finishQuiz();
      }
    }, 2000);
  };

  const finishQuiz = () => {
    const finalScore =
      selectedAnswer === quizData[currentQuestion].correct ? score + 1 : score;
    const percentage = Math.round((finalScore / quizData.length) * 100);

    // Save to leaderboard
    const newEntry = {
      name: playerName,
      score: finalScore,
      total: quizData.length,
      percentage,
      date: new Date().toLocaleDateString(),
    };

    const updatedLeaderboard = [...leaderboard, newEntry]
      .sort((a, b) => b.percentage - a.percentage)
      .slice(0, 10); // Keep top 10

    setLeaderboard(updatedLeaderboard);
    localStorage.setItem(
      "ospek-quiz-leaderboard",
      JSON.stringify(updatedLeaderboard)
    );

    setGameState(QUIZ_STATES.RESULT);
  };

  const resetQuiz = () => {
    setGameState(QUIZ_STATES.WELCOME);
    setPlayerName("");
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setTimeLeft(15);
  };

  const getScoreMessage = (percentage) => {
    if (percentage >= 90)
      return { message: "LEGEND! Kamu inget banget! 🏆", color: "#FFD700" };
    if (percentage >= 70)
      return { message: "Keren! Memori kamu bagus! 🌟", color: "#FF6B6B" };
    if (percentage >= 50)
      return { message: "Lumayan! Masih inget dikit! 😊", color: "#4ECDC4" };
    return { message: "Waduh, udah lupa ya? 😅", color: "#95A5A6" };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff8f5] via-[#fff6f3] to-[#fff4f1] relative overflow-hidden">
      {/* Floating background elements */}
      <motion.div
        className="absolute top-20 left-16 w-32 h-32 bg-[#ffbfae] rounded-full mix-blend-multiply blur-2xl opacity-30"
        animate={{
          x: [0, 50, 0],
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
        className="absolute bottom-24 right-20 w-24 h-24 bg-[#ffa08c] rounded-full mix-blend-multiply blur-xl opacity-25"
        animate={{
          x: [0, -40, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Mouse follower */}
      <motion.div
        className="absolute w-20 h-20 bg-gradient-to-r from-[#ffbfae]/20 to-[#ffa08c]/20 rounded-full blur-xl pointer-events-none"
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

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-10">
        <AnimatePresence mode="wait">
          {gameState === QUIZ_STATES.WELCOME && (
            <WelcomeScreen
              playerName={playerName}
              setPlayerName={setPlayerName}
              startQuiz={startQuiz}
              setGameState={setGameState}
            />
          )}

          {gameState === QUIZ_STATES.QUIZ && (
            <QuizScreen
              question={quizData[currentQuestion]}
              currentQuestion={currentQuestion}
              totalQuestions={quizData.length}
              timeLeft={timeLeft}
              selectedAnswer={selectedAnswer}
              showResult={showResult}
              handleAnswer={handleAnswer}
              score={score}
            />
          )}

          {gameState === QUIZ_STATES.RESULT && (
            <ResultScreen
              playerName={playerName}
              score={score}
              total={quizData.length}
              resetQuiz={resetQuiz}
              setGameState={setGameState}
            />
          )}

          {gameState === QUIZ_STATES.LEADERBOARD && (
            <LeaderboardScreen
              leaderboard={leaderboard}
              setGameState={setGameState}
              resetQuiz={resetQuiz}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function WelcomeScreen({ playerName, setPlayerName, startQuiz, setGameState }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="text-center max-w-2xl mx-auto"
    >
      <motion.div
        className="mb-8"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <h1 className="text-6xl font-bold bg-gradient-to-r from-[#ff8b70] via-[#ff6c4f] to-[#ff8b70] bg-clip-text text-transparent mb-4">
          🎮 Quiz Kelompok 4
        </h1>
        <p className="text-xl text-[#8B5A3C] leading-relaxed">
          Seberapa inget kamu sama momen seru kita? Yuk test memori kamu! ✨
        </p>
      </motion.div>

      <motion.div
        className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Siapa nama kamu?
        </h2>
        <input
          type="text"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          placeholder="Tulis nama kamu di sini..."
          className="w-full px-6 py-4 text-lg border-2 border-[#ffbfae] rounded-full focus:outline-none focus:border-[#ff8b70] transition-colors text-center text-black"
          onKeyPress={(e) => e.key === "Enter" && startQuiz()}
        />
      </motion.div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <motion.button
          onClick={startQuiz}
          disabled={!playerName.trim()}
          className={`px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all ${
            playerName.trim()
              ? "bg-gradient-to-r from-[#ff8b70] to-[#ff6c4f] text-white hover:shadow-xl"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          whileHover={playerName.trim() ? { scale: 1.05 } : {}}
          whileTap={playerName.trim() ? { scale: 0.95 } : {}}
        >
          🚀 Mulai Quiz!
        </motion.button>

        <motion.button
          onClick={() => setGameState(QUIZ_STATES.LEADERBOARD)}
          className="px-8 py-4 bg-white/80 backdrop-blur-sm text-[#8B5A3C] rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all border border-white/50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🏆 Leaderboard
        </motion.button>
      </div>

      <Link
        href="/"
        className="inline-block mt-8 text-[#8B5A3C] hover:text-[#ff6c4f] transition-colors"
      >
        ← Balik ke Home
      </Link>
    </motion.div>
  );
}

function QuizScreen({
  question,
  currentQuestion,
  totalQuestions,
  timeLeft,
  selectedAnswer,
  showResult,
  handleAnswer,
  score,
}) {
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <motion.div
      key={currentQuestion}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="w-full max-w-4xl mx-auto"
    >
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[#8B5A3C] font-medium">
            Pertanyaan {currentQuestion + 1} dari {totalQuestions}
          </span>
          <span className="text-[#8B5A3C] font-medium">Skor: {score}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <motion.div
            className="bg-gradient-to-r from-[#ff8b70] to-[#ff6c4f] h-3 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Timer */}
      <motion.div
        className="text-center mb-6"
        animate={timeLeft <= 5 ? { scale: [1, 1.1, 1] } : {}}
        transition={{
          duration: 0.5,
          repeat: timeLeft <= 5 ? Number.POSITIVE_INFINITY : 0,
        }}
      >
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold ${
            timeLeft <= 5
              ? "bg-red-100 text-red-600"
              : "bg-blue-100 text-blue-600"
          }`}
        >
          ⏰ {timeLeft}s
        </div>
      </motion.div>

      {/* Question Card */}
      <motion.div
        className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 text-center mb-8"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="text-6xl mb-4"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          {question.emoji}
        </motion.div>
        <h2 className="text-2xl font-bold text-gray-800 leading-relaxed">
          {question.question}
        </h2>
      </motion.div>

      {/* Answer Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.options.map((option, idx) => {
          let buttonClass =
            "bg-white/80 hover:bg-[#ffbfae] text-gray-800 hover:text-white";

          if (showResult) {
            if (idx === question.correct) {
              buttonClass = "bg-green-500 text-white";
            } else if (idx === selectedAnswer && idx !== question.correct) {
              buttonClass = "bg-red-500 text-white";
            } else {
              buttonClass = "bg-gray-300 text-gray-600";
            }
          }

          return (
            <motion.button
              key={idx}
              onClick={() => !showResult && handleAnswer(idx)}
              disabled={showResult}
              className={`p-6 rounded-2xl font-bold text-lg shadow-lg transition-all border border-white/50 ${buttonClass}`}
              whileHover={!showResult ? { scale: 1.02, y: -2 } : {}}
              whileTap={!showResult ? { scale: 0.98 } : {}}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              {option}
              {showResult && idx === question.correct && " ✅"}
              {showResult &&
                idx === selectedAnswer &&
                idx !== question.correct &&
                " ❌"}
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}

function ResultScreen({ playerName, score, total, resetQuiz, setGameState }) {
  const percentage = Math.round((score / total) * 100);
  const { message, color } = getScoreMessage(percentage);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="text-center max-w-2xl mx-auto"
    >
      <motion.div
        className="mb-8"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          🎉 Quiz Selesai!
        </h1>
        <p className="text-xl text-[#8B5A3C]">Hasil quiz kamu, {playerName}!</p>
      </motion.div>

      <motion.div
        className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div
          className="text-8xl mb-6"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
          style={{ color }}
        >
          {percentage >= 90
            ? "🏆"
            : percentage >= 70
            ? "🌟"
            : percentage >= 50
            ? "😊"
            : "😅"}
        </motion.div>

        <h2 className="text-4xl font-bold mb-4" style={{ color }}>
          {score}/{total}
        </h2>
        <p className="text-2xl font-bold mb-4" style={{ color }}>
          {percentage}%
        </p>
        <p className="text-lg text-gray-700">{message}</p>
      </motion.div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <motion.button
          onClick={resetQuiz}
          className="px-8 py-4 bg-gradient-to-r from-[#ff8b70] to-[#ff6c4f] text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🔄 Main Lagi
        </motion.button>

        <motion.button
          onClick={() => setGameState(QUIZ_STATES.LEADERBOARD)}
          className="px-8 py-4 bg-white/80 backdrop-blur-sm text-[#8B5A3C] rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all border border-white/50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🏆 Lihat Leaderboard
        </motion.button>
      </div>
    </motion.div>
  );
}

function LeaderboardScreen({ leaderboard, setGameState, resetQuiz }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="w-full max-w-4xl mx-auto"
    >
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-[#ff8b70] via-[#ff6c4f] to-[#ff8b70] bg-clip-text text-transparent mb-4">
          🏆 Leaderboard
        </h1>
        <p className="text-xl text-[#8B5A3C]">Hall of Fame Kelompok 4!</p>
      </div>

      <motion.div
        className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {leaderboard.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🤔</div>
            <p className="text-xl text-gray-600">Belum ada yang main nih!</p>
            <p className="text-gray-500">Jadilah yang pertama!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {leaderboard.map((entry, index) => (
              <motion.div
                key={index}
                className={`flex items-center justify-between p-4 rounded-2xl text-black ${
                  index === 0
                    ? "bg-gradient-to-r from-yellow-100 to-yellow-200 border-2 border-yellow-300"
                    : index === 1
                    ? "bg-gradient-to-r from-gray-100 to-gray-200 border-2 border-gray-300"
                    : index === 2
                    ? "bg-gradient-to-r from-orange-100 to-orange-200 border-2 border-orange-300"
                    : "bg-gray-50 border border-gray-200"
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4">
                  <div className="text-2xl">
                    {index === 0
                      ? "🥇"
                      : index === 1
                      ? "🥈"
                      : index === 2
                      ? "🥉"
                      : `#${index + 1}`}
                  </div>
                  <div>
                    <p className="font-bold text-lg">{entry.name}</p>
                    <p className="text-sm text-gray-600">{entry.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-xl">{entry.percentage}%</p>
                  <p className="text-sm text-gray-600">
                    {entry.score}/{entry.total}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <motion.button
          onClick={resetQuiz}
          className="px-8 py-4 bg-gradient-to-r from-[#ff8b70] to-[#ff6c4f] text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🎮 Main Quiz
        </motion.button>

        <motion.button
          onClick={() => setGameState(QUIZ_STATES.WELCOME)}
          className="px-8 py-4 bg-white/80 backdrop-blur-sm text-[#8B5A3C] rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all border border-white/50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🏠 Kembali
        </motion.button>
      </div>
    </motion.div>
  );
}

function getScoreMessage(percentage) {
  if (percentage >= 90)
    return { message: "LEGEND! Kamu inget banget! 🏆", color: "#FFD700" };
  if (percentage >= 70)
    return { message: "Keren! Memori kamu bagus! 🌟", color: "#FF6B6B" };
  if (percentage >= 50)
    return { message: "Lumayan! Masih inget dikit! 😊", color: "#4ECDC4" };
  return { message: "Waduh, udah lupa ya? 😅", color: "#95A5A6" };
}
