"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";

const topics = [
  {
    id: "google_colab",
    name: "Google Colab",
    icon: "🔬",
    image: "/images/topics/google_colab.png",
    color: "from-blue-500 to-red-500",
    description: "Using Google Colab for Python development and data science",
    details:
      "Learn how to use Google Colab for Python development, data science projects, and machine learning. Discover how to work with notebooks, connect to Google Drive, and leverage free GPU resources.",
  },
  {
    id: "introduction_to_python",
    name: "Introduction to Python",
    icon: "🐍",
    image: "/logo.png",
    color: "from-blue-500 to-yellow-500",
    description: "Get started with Python programming fundamentals",
    details:
      "Begin your Python journey with an introduction to the language, its history, installation, and basic syntax. Learn about Python's philosophy, indentation rules, and how to run your first Python program.",
  },
  {
    id: "data_types",
    name: "Data Types",
    icon: "🧩",
    image: "/images/topics/data_type.png",
    color: "from-purple-500 to-pink-500",
    description: "Learn about Python's built-in data types and type conversion",
    details:
      "Explore Python's fundamental data types including integers, floats, strings, booleans, lists, tuples, sets, and dictionaries. Understand type conversion, checking types with isinstance(), and how Python's dynamic typing works.",
  },
  {
    id: "operators_keywords_variables",
    name: "Operators & Variables",
    icon: "⚙️",
    image: "/images/topics/operator_variable.png",
    color: "from-yellow-500 to-orange-500",
    description: "Master operators, keywords and variable usage in Python",
    details:
      "Learn about Python's arithmetic, comparison, logical, and bitwise operators. Understand variable declaration, naming conventions, scope, and Python's reserved keywords.",
  },
  {
    id: "strings_casting",
    name: "Strings & Casting",
    icon: "📝",
    image: "/images/topics/string.png",
    color: "from-green-500 to-teal-500",
    description: "String manipulation and type conversion techniques",
    details:
      "Discover string methods, formatting with f-strings, string interpolation, and type casting between strings and other data types. Learn about string indexing, slicing, and immutability.",
  },
  {
    id: "control_flow",
    name: "Control Flow",
    icon: "🔄",
    image: "/images/topics/control-flow.png",
    color: "from-red-500 to-orange-500",
    description: "Conditional statements, loops and program flow control",
    details:
      "Master if-elif-else conditional statements, for and while loops, and how to control program flow with break, continue, and pass statements. Understand how to use loop else clauses and nested loops effectively.",
  },
  {
    id: "functions_modules",
    name: "Functions & Modules",
    icon: "📦",
    image: "/images/topics/functions.png",
    color: "from-amber-500 to-yellow-500",
    description: "Creating reusable code with functions and modules",
    details:
      "Learn how to define and call functions, work with parameters, return values, *args and **kwargs. Explore importing modules, creating your own modules, and understanding Python's module search path.",
  },
  {
    id: "data_structures",
    name: "Data Structures",
    icon: "📊",
    image: "/images/topics/data-structures.png",
    color: "from-blue-500 to-cyan-500",
    description: "Lists, dictionaries, sets, tuples and their operations",
    details:
      "Deep dive into Python's built-in data structures, their methods, and operations. Compare the performance characteristics of different data structures and learn when to use each one for optimal code.",
  },
  {
    id: "file_handling",
    name: "File Handling",
    icon: "📁",
    image: "/images/topics/file_handling.png",
    color: "from-teal-500 to-green-500",
    description: "Reading from and writing to files in Python",
    details:
      "Learn how to open, read, write, and close files in Python. Work with various file modes, handle exceptions during file operations, and use context managers with the with statement.",
  },
  {
    id: "exception_handling",
    name: "Exception Handling",
    icon: "⚠️",
    image: "/images/topics/exceptions.png",
    color: "from-rose-500 to-red-500",
    description: "Handling errors and exceptions in your code",
    details:
      "Master try-except-else-finally blocks, raise custom exceptions, and create your own exception classes. Learn best practices for handling different types of exceptions and implementing proper error recovery.",
  },
  {
    id: "sets",
    name: "Sets & Collections",
    icon: "🧮",
    image: "/images/topics/sets.png",
    color: "from-indigo-500 to-purple-500",
    description: "Working with sets and other collection types",
    details:
      "Master Python's set data structure for working with unique, unordered collections of elements. Learn set operations like union, intersection, and difference, as well as other specialized collection types from the collections module.",
  },
  {
    id: "oop_concepts",
    name: "OOP Concepts",
    icon: "🧬",
    image: "/images/topics/oop.png",
    color: "from-cyan-500 to-blue-500",
    description: "Object-oriented programming principles in Python",
    details:
      "Understand classes, objects, inheritance, polymorphism, encapsulation, and abstraction in Python. Learn about special methods, class vs. instance variables, and how to implement OOP design patterns.",
  },
  {
    id: "code_output",
    name: "Code Output",
    icon: "📟",
    image: "/images/topics/code-output.png",
    color: "from-slate-500 to-zinc-700",
    description: "Predict the output of Python code snippets",
    details:
      "Sharpen your Python skills by analyzing code snippets and predicting their output. This topic covers tricky syntax, common gotchas, and helps you understand how Python interprets and executes code.",
  },
];

const levels = [
  {
    id: "beginner",
    name: "Beginner",
    icon: "🌱",
    image: "/images/emojies/beginner.png",
    color: "from-green-400 to-emerald-600",
    description: "Perfect for those just starting with Python",
  },
  {
    id: "intermediate",
    name: "Intermediate",
    icon: "⚙️",
    image: "/images/emojies/intermediate.png",
    color: "from-blue-400 to-indigo-600",
    description: "For developers with basic Python knowledge",
  },
  {
    id: "advanced",
    name: "Advanced",
    icon: "🚀",
    image: "/images/emojies/advanced.png",
    color: "from-purple-500 to-pink-600",
    description: "Complex concepts for experienced developers",
  },
];

export default function TopicsPage() {
  const router = useRouter();
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"all" | "selected">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTopics, setFilteredTopics] = useState(topics);

  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [topicsRef, topicsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Filter topics based on search query
  useEffect(() => {
    if (searchQuery) {
      const filtered = topics.filter(
        (topic) =>
          topic.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          topic.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredTopics(filtered);
    } else {
      setFilteredTopics(topics);
    }
  }, [searchQuery]);

  const handleStartQuiz = () => {
    if (selectedTopic && selectedLevel) {
      router.push(`/quiz?topic=${selectedTopic}&level=${selectedLevel}`);
    }
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      y: -8,
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
    tap: { scale: 0.98 },
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-black text-white pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            ref={headerRef}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            className="mb-16 text-center"
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
              initial={{ y: 20, opacity: 0 }}
              animate={
                headerInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
              }
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400">
                Python Topics
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={
                headerInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
              }
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Explore our comprehensive collection of Python topics and test
              your skills with interactive quizzes
            </motion.p>

            {/* Search and Filter Bar */}
            <motion.div
              className="mt-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={
                headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <input
                    type="text"
                    placeholder="Search topics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full py-3 px-5 pr-12 rounded-xl bg-zinc-800/60 border border-zinc-700 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zinc-400">
                    <IoSearch className="w-5 h-5" />
                  </span>
                </div>
                <div className="flex bg-zinc-800/60 rounded-xl border border-zinc-700 p-1">
                  <button
                    className={`py-2 px-4 rounded-lg transition-all ${
                      activeTab === "all"
                        ? "bg-indigo-600 text-white"
                        : "text-zinc-400 hover:text-white"
                    }`}
                    onClick={() => setActiveTab("all")}
                  >
                    All Topics
                  </button>
                  <button
                    className={`py-2 px-4 rounded-lg transition-all ${
                      activeTab === "selected"
                        ? "bg-indigo-600 text-white"
                        : "text-zinc-400 hover:text-white"
                    }`}
                    onClick={() => {
                      if (selectedTopic) {
                        setActiveTab("selected");
                      }
                    }}
                    disabled={!selectedTopic}
                  >
                    Selected
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <AnimatePresence mode="wait">
            {activeTab === "all" ? (
              <motion.div
                key="all-topics"
                ref={topicsRef}
                initial="hidden"
                animate={topicsInView ? "visible" : "hidden"}
                variants={staggerContainerVariants}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
                exit={{ opacity: 0, y: 20 }}
              >
                {filteredTopics.map((topic) => (
                  <motion.div
                    key={topic.id}
                    variants={cardVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className={`glassmorphism rounded-2xl overflow-hidden transition-all cursor-pointer transform ${
                      selectedTopic === topic.id
                        ? "ring-2 ring-indigo-500 shadow-lg shadow-indigo-500/20"
                        : "hover:shadow-xl"
                    }`}
                    onClick={() => setSelectedTopic(topic.id)}
                  >
                    <div className="h-32 relative overflow-hidden">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${topic.color} opacity-90`}
                      ></div>
                      <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          {topic.image ? (
                            <Image
                              src={topic.image}
                              alt={topic.name}
                              width={60}
                              height={60}
                              className="w-12 h-12 object-contain"
                            />
                          ) : (
                            <span className="text-4xl">{topic.icon}</span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h2 className="text-2xl font-bold mb-2 tracking-tight">
                        {topic.name}
                      </h2>
                      <p className="text-zinc-300 text-base mb-4 line-clamp-2">
                        {topic.description}
                      </p>

                      <AnimatePresence>
                        {selectedTopic === topic.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 pt-4 border-t border-zinc-700/50"
                          >
                            <p className="text-zinc-400 text-sm mb-6">
                              {topic.details}
                            </p>

                            <h3 className="text-lg font-semibold mb-3 text-white">
                              Select Difficulty:
                            </h3>
                            <div className="grid grid-cols-3 gap-3">
                              {levels.map((level) => (
                                <button
                                  key={level.id}
                                  className={`p-3 rounded-xl flex flex-col items-center justify-center gap-2 transition-all ${
                                    selectedLevel === level.id
                                      ? "bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-600/20"
                                      : "bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700/80"
                                  }`}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedLevel(level.id);
                                  }}
                                >
                                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-black/20">
                                    {level.image ? (
                                      <Image
                                        src={level.image}
                                        alt={level.name}
                                        width={20}
                                        height={20}
                                        className="w-5 h-5 object-contain"
                                      />
                                    ) : (
                                      <span>{level.icon}</span>
                                    )}
                                  </div>
                                  <span className="font-medium text-sm">
                                    {level.name}
                                  </span>
                                </button>
                              ))}
                            </div>

                            <motion.button
                              className={`mt-6 w-full py-3 px-4 rounded-xl font-semibold flex items-center justify-center transition-all ${
                                selectedLevel
                                  ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-600/20"
                                  : "bg-zinc-700/80 text-zinc-400 cursor-not-allowed"
                              }`}
                              disabled={!selectedLevel}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleStartQuiz();
                              }}
                              whileHover={selectedLevel ? { scale: 1.02 } : {}}
                              whileTap={selectedLevel ? { scale: 0.98 } : {}}
                            >
                              <span>Start Quiz</span>
                              {selectedLevel && (
                                <motion.span
                                  className="ml-2"
                                  animate={{ x: [0, 4, 0] }}
                                  transition={{
                                    repeat: Infinity,
                                    duration: 1.5,
                                  }}
                                >
                                  →
                                </motion.span>
                              )}
                            </motion.button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="selected-topic"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="max-w-4xl mx-auto"
              >
                {selectedTopic && (
                  <motion.div
                    className="glassmorphism rounded-2xl overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {topics
                      .filter((t) => t.id === selectedTopic)
                      .map((topic) => (
                        <div key={topic.id}>
                          <div className="h-64 relative overflow-hidden">
                            <div
                              className={`absolute inset-0 bg-gradient-to-r ${topic.color} opacity-90`}
                            ></div>
                            <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
                            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
                              <h1 className="text-4xl font-bold mb-2">
                                {topic.name}
                              </h1>
                              <p className="text-xl text-zinc-200">
                                {topic.description}
                              </p>
                            </div>
                            <div className="absolute top-8 right-8">
                              <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                {topic.image ? (
                                  <Image
                                    src={topic.image}
                                    alt={topic.name}
                                    width={80}
                                    height={80}
                                    className="w-16 h-16 object-contain"
                                  />
                                ) : (
                                  <span className="text-6xl">{topic.icon}</span>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="p-8">
                            <div className="mb-8">
                              <h2 className="text-xl font-semibold mb-4">
                                About This Topic
                              </h2>
                              <p className="text-zinc-300 leading-relaxed">
                                {topic.details}
                              </p>
                            </div>

                            <div className="border-t border-zinc-700/50 pt-8">
                              <h2 className="text-xl font-semibold mb-6">
                                Choose Your Difficulty Level
                              </h2>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {levels.map((level) => (
                                  <motion.button
                                    key={level.id}
                                    className={`p-6 rounded-xl flex flex-col items-center text-center gap-4 transition-all ${
                                      selectedLevel === level.id
                                        ? "bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-600/20"
                                        : "bg-zinc-800/60 text-zinc-300 hover:bg-zinc-700/60 border border-zinc-700/50"
                                    }`}
                                    onClick={() => setSelectedLevel(level.id)}
                                    whileHover={{ scale: 1.03, y: -5 }}
                                    whileTap={{ scale: 0.98 }}
                                  >
                                    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-black/20">
                                      {level.image ? (
                                        <Image
                                          src={level.image}
                                          alt={level.name}
                                          width={40}
                                          height={40}
                                          className="w-10 h-10 object-contain"
                                        />
                                      ) : (
                                        <span className="text-3xl">
                                          {level.icon}
                                        </span>
                                      )}
                                    </div>
                                    <div>
                                      <h3 className="text-lg font-semibold mb-1">
                                        {level.name}
                                      </h3>
                                      <p className="text-sm opacity-80">
                                        {level.description}
                                      </p>
                                    </div>
                                  </motion.button>
                                ))}
                              </div>

                              <motion.button
                                className={`mt-8 w-full py-4 px-6 rounded-xl font-semibold text-lg flex items-center justify-center transition-all ${
                                  selectedLevel
                                    ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-600/20"
                                    : "bg-zinc-700/80 text-zinc-400 cursor-not-allowed"
                                }`}
                                disabled={!selectedLevel}
                                onClick={handleStartQuiz}
                                whileHover={
                                  selectedLevel ? { scale: 1.02 } : {}
                                }
                                whileTap={selectedLevel ? { scale: 0.98 } : {}}
                              >
                                <span>Start Quiz Now</span>
                                {selectedLevel && (
                                  <motion.span
                                    className="ml-2 text-xl"
                                    animate={{ x: [0, 4, 0] }}
                                    transition={{
                                      repeat: Infinity,
                                      duration: 1.5,
                                    }}
                                  >
                                    🚀
                                  </motion.span>
                                )}
                              </motion.button>
                            </div>
                          </div>
                        </div>
                      ))}
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </>
  );
}
