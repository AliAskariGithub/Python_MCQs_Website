"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { mcqs } from "@/lib/data";
import { Level, Topic } from "@/types";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

type UserQuestion = {
  question: string;
  options: string[];
  answer: string;
  userAnswer: string | null;
};

function QuizContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const topic = searchParams.get("topic") as Topic;
  const level = searchParams.get("level") as Level;

  const [questions, setQuestions] = useState<UserQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timer, setTimer] = useState(45 * 60); // 45 minutes
  const [isLoading, setIsLoading] = useState(true);
  const [pageTransition, setPageTransition] = useState(false);

  // Refs for scroll animations
  const [quizRef, quizInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (!topic || !level) {
      router.push("/");
      return;
    }

    setTimeout(() => {
      const selectedQuestions = (mcqs[topic]?.[level] || [])
        .slice(0, 20)
        .map((q) => ({
          ...q,
          userAnswer: null,
        }));

      setQuestions(selectedQuestions);
      setIsLoading(false);
    }, 800);
  }, [topic, level, router]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOptionClick = (option: string) => {
    const updated = [...questions];
    updated[currentIndex].userAnswer = option;
    setQuestions(updated);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setPageTransition(true);
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        setPageTransition(false);
      }, 300);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setPageTransition(true);
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1);
        setPageTransition(false);
      }, 300);
    }
  };

  const handleSubmit = () => {
    const result = {
      topic,
      level,
      questions,
    };
    localStorage.setItem("userAnswers", JSON.stringify(result));
    router.push("/result");
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  const optionVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
    hover: {
      scale: 1.02,
      boxShadow: "0 0 10px rgba(99, 102, 241, 0.4)",
      borderColor: "rgba(79, 70, 229, 0.6)",
    },
  };

  const progressPercentage = ((currentIndex + 1) / questions.length) * 100;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-black flex items-center justify-center">
        <div className="text-center">
          <motion.div
            className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full mx-auto mb-4"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          />
          <motion.p
            className="text-zinc-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Loading quiz...
          </motion.p>
        </div>
      </div>
    );
  }

  if (!questions.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-black flex items-center justify-center">
        <p className="text-zinc-300">No questions found. Please try again.</p>
      </div>
    );
  }

  const currentQ = questions[currentIndex];

  return (
    <>
      <div className="h-1 w-full fixed top-0 bg-zinc-700 overflow-hidden">
        <motion.div
          className="h-1 bg-gradient-to-r from-indigo-600 to-cyan-500"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-black text-white">
        <motion.div
          className="max-w-3xl mx-auto px-4 py-8 md:pt-12"
          ref={quizRef}
          initial="hidden"
          animate={quizInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div>
              <h2 className="text-xl font-medium text-zinc-200">
                Python Quiz - {level.charAt(0).toUpperCase() + level.slice(1)}{" "}
                Level
              </h2>
              <div className="flex items-center mt-1 space-x-3">
                <div className="text-xs text-zinc-400">
                  Question {currentIndex + 1} of {questions.length}
                </div>
              </div>
            </div>
            <motion.div
              className={`glassmorphism py-2 px-4 rounded-full flex items-center ${
                timer < 300 ? "text-red-400" : "text-zinc-200"
              }`}
              animate={
                timer < 300
                  ? {
                      scale: [1, 1.05, 1],
                      backgroundColor: [
                        "rgba(26, 26, 37, 0.7)",
                        "rgba(220, 38, 38, 0.2)",
                        "rgba(26, 26, 37, 0.7)",
                      ],
                    }
                  : {}
              }
              transition={{ duration: 2, repeat: timer < 300 ? Infinity : 0 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="font-mono text-sm">{formatTime(timer)}</div>
            </motion.div>
          </div>

          <div className="mt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="glassmorphism p-6 md:p-8 rounded-xl mb-6"
                initial={{ opacity: 0, x: pageTransition ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: pageTransition ? 20 : -20 }}
                transition={{ duration: 0.4 }}
              >
                <motion.p
                  className="text-lg md:text-xl font-medium mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {currentQ.question}
                </motion.p>

                <div className="mt-6 grid gap-3">
                  {currentQ.options.map((option, i) => (
                    <motion.button
                      key={i}
                      onClick={() => handleOptionClick(option)}
                      className={`w-full text-left px-5 py-3 rounded-xl border transition-all flex items-center
                      ${
                        currentQ.userAnswer === option
                          ? "border-indigo-500 bg-indigo-900/30 neon-border"
                          : "border-zinc-700 bg-zinc-800/50 hover:bg-zinc-700/50"
                      }`}
                      variants={optionVariants}
                      custom={i}
                      initial="hidden"
                      animate="visible"
                      whileHover="hover"
                    >
                      <div
                        className={`w-6 h-6 mr-3 flex items-center justify-center rounded-full border ${
                          currentQ.userAnswer === option
                            ? "border-indigo-500 bg-indigo-600"
                            : "border-zinc-600"
                        }`}
                      >
                        {currentQ.userAnswer === option && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", duration: 0.3 }}
                            className="w-2 h-2 bg-white rounded-full"
                          />
                        )}
                      </div>
                      {option}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-between items-center mt-8">
              <motion.button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className="px-5 py-2 rounded-lg glassmorphism text-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                whileHover={{ scale: currentIndex === 0 ? 1 : 1.03 }}
                whileTap={{ scale: currentIndex === 0 ? 1 : 0.97 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Previous
              </motion.button>

              {currentIndex === questions.length - 1 ? (
                <motion.button
                  onClick={handleSubmit}
                  className="px-6 py-2 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold rounded-lg flex items-center"
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 15px rgba(16, 185, 129, 0.5)",
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  Submit Test
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.button>
              ) : (
                <motion.button
                  onClick={handleNext}
                  className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold rounded-lg flex items-center"
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 15px rgba(79, 70, 229, 0.5)",
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  Next
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-black flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full mx-auto mb-4 animate-spin" />
        <p className="text-zinc-300">Loading quiz...</p>
      </div>
    </div>
  );
}

export default function QuizTestPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <QuizContent />
    </Suspense>
  );
}
