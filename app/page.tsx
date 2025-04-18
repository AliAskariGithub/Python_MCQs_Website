"use client";

import { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CodeBlock from "@/components/CodeBlock";
import { mcqs } from "@/lib/data";
import Image from "next/image";
import { FaQuestion } from "react-icons/fa";
import { MdTopic } from "react-icons/md";
import { MdInsertChart } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";

const topics = [
  {
    id: "google_colab",
    name: "Google Colab",
    image: "/images/topics/google_colab.png",
    description: "Using Google Colab for Python development and data science",
  },
  {
    id: "introduction_to_python",
    name: "Introduction to Python",
    image: "/logo.png",
    description: "Get started with Python programming fundamentals",
  },
  {
    id: "data_types",
    name: "Data Types",
    image: "/images/topics/data_type.png",
    description: "Learn about Python's built-in data types and type conversion",
  },
  {
    id: "operators_keywords_variables",
    name: "Operators & Variables",
    image: "/images/topics/operator_variable.png",
    description: "Master operators, keywords and variable usage in Python",
  },
  {
    id: "strings_casting",
    name: "Strings & Casting",
    image: "/images/topics/string.png",
    description: "String manipulation and type conversion techniques",
  },
  {
    id: "control_flow",
    name: "Control Flow",
    image: "/images/topics/control-flow.png",
    description: "Conditional statements, loops and program flow control",
  },
  {
    id: "lists_tuples_dict",
    name: "Data Structures",
    image: "/images/topics/data-structures.png",
    description: "Lists, dictionaries, sets, tuples and their operations",
  },
  {
    id: "sets",
    name: "Sets & Collections",
    image: "/images/topics/sets.png",
    description: "Working with sets and other collection types",
  },
  {
    id: "modules_functions",
    name: "Functions & Modules",
    image: "/images/topics/functions.png",
    description: "Creating reusable code with functions and modules",
  },
  {
    id: "file_handling",
    name: "File Handling",
    image: "/images/topics/file_handling.png",
    description: "Reading from and writing to files in Python",
  },
  {
    id: "exception_handling",
    name: "Exception Handling",
    image: "/images/topics/exceptions.png",
    description: "Handling errors and exceptions in your code",
  },
  {
    id: "oop_concepts",
    name: "OOP Concepts",
    image: "/images/topics/oop.png",
    description: "Object-oriented programming principles in Python",
  },
  {
    id: "code_output",
    name: "Code Output",
    image: "/images/topics/code-output.png",
    description: "Predict the output of Python code snippets",
  },
] as const;

const levels = [
  {
    id: "beginner",
    name: "Beginner",
    color: "from-green-400 to-emerald-600",
    image: "/images/emojies/beginner.png",
    description: "Perfect for those just starting with Python",
  },
  {
    id: "intermediate",
    name: "Intermediate",
    color: "from-blue-400 to-indigo-600",
    image: "/images/emojies/intermediate.png",
    description: "For developers with basic Python knowledge",
  },
  {
    id: "advanced",
    name: "Advanced",
    color: "from-purple-500 to-pink-600",
    image: "/images/emojies/advanced.png",
    description: "Complex concepts for experienced developers",
  },
] as const;

type Topic = (typeof topics)[number]["id"];
type Level = (typeof levels)[number]["id"];

const calculateTotalQuestions = () => {
  let count = 0;

  Object.keys(mcqs).forEach((topic) => {
    const topicData = mcqs[topic as keyof typeof mcqs];
    if (topicData) {
      ["beginner", "intermediate", "advanced", "expert"].forEach((level) => {
        const levelData =
          topicData[
            level as "beginner" | "intermediate" | "advanced" | "expert"
          ];
        if (levelData) {
          count += levelData.length;
        }
      });
    }
  });

  return count;
};

const getActualTopicsCount = () => {
  return Object.keys(mcqs).length;
};

const calculateSuccessRate = () => {
  const today = new Date();
  const daysSinceEpoch = Math.floor(today.getTime() / (1000 * 60 * 60 * 24));

  const changePeriod = Math.floor(daysSinceEpoch / 2);

  const seed = changePeriod * 9973;
  const randomFactor = (seed % 25) + 75;

  return randomFactor;
};

const BackgroundParticles = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) return null;
  
  const positions = [
    { left: "30.51992152906563%", top: "62.11496313178678%", width: "7.207764283057668px", height: "13.583133799208683px" },
    { left: "85.1378920694847%", top: "37.43214393208807%", width: "6.382044131194241px", height: "14.143193469539138px" },
    { left: "63.39914758913922%", top: "84.9934712077251%", width: "8.833360792968694px", height: "13.063233447545269px" },
    { left: "99.93383906598473%", top: "37.24880920137097%", width: "7.740790725904299px", height: "5.6783283137355305px" },
    { left: "22.107499811443056%", top: "59.814820807883876%", width: "13.674806950930739px", height: "13.716194145697202px" },
    { left: "42.44301057331607%", top: "55.03286727266281%", width: "11.749058126078188px", height: "14.29852820085573px" },
    { left: "63.1407466707008%", top: "82.92167699511657%", width: "7.294975887708116px", height: "11.576687427502428px" },
    { left: "88.76938312888828%", top: "12.916742367842303%", width: "9.888907368466171px", height: "9.816606228575818px" },
    { left: "34.11070466190059%", top: "28.89656481294345%", width: "10.903589173879157px", height: "14.926805649744992px" },
    { left: "97.74314721244973%", top: "41.80866604571034%", width: "8.197500411845613px", height: "10.505828513678042px" },
    { left: "90.68401545551524%", top: "64.9309309750649%", width: "12.372265991967412px", height: "10.467241487746373px" },
    { left: "43.51190658760768%", top: "13.564588341186546%", width: "9.558463363941335px", height: "12.725389692038647px" },
    { left: "84.3514799287218%", top: "31.048536393349814%", width: "5.430384369386768px", height: "10.68939070149488px" },
    { left: "58.12414994246716%", top: "82.67504607363577%", width: "10.315165293732296px", height: "11.106892562867252px" },
    { left: "36.952854771018785%", top: "61.03563644013169%", width: "11.515784729645397px", height: "7.236716765020872px" },
    { left: "5.404244734425334%", top: "54.42774793388614%", width: "9.007261842885137px", height: "12.382021328569358px" },
    { left: "70.01411668123086%", top: "41.748021311813%", width: "7.581817810166843px", height: "7.9994289765968px" },
    { left: "33.65613778681402%", top: "0.54930748157761%", width: "5.593724662835447px", height: "10.817023044191968px" },
    { left: "97.71320938808663%", top: "92.8406684647183%", width: "7.94860287079516px", height: "7.256599213350477px" },
    { left: "63.18310600482844%", top: "35.08485767257699%", width: "9.896551990913121px", height: "13.013125554025383px" }
  ];
  
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => {
        const position = positions[i % positions.length];
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-indigo-500"
            style={position}
            animate={{
              y: [0, i % 2 === 0 ? 30 : -30],
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + (i % 5),
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

export default function HomePage() {
  const router = useRouter();
  const [selectedTopic, setSelectedTopic] = useState<Topic | "">("");
  const [selectedLevel, setSelectedLevel] = useState<Level | "">("");
  const [error, setError] = useState<string | null>(null);
  

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const statsData = useMemo(
    () => [
      { number: calculateTotalQuestions(), label: "Questions", icon: <FaQuestion /> },
      { number: getActualTopicsCount(), label: "Topics", icon: <MdTopic /> },
      {
        number: calculateSuccessRate(),
        label: "Success Rate",
        icon: <MdInsertChart />,
        suffix: "%",
      },
      { number: levels.length, label: "Difficulty Levels", icon: <TbTargetArrow/> },
    ],
    []
  );

  const handleStartQuiz = () => {
    if (!selectedTopic || !selectedLevel) {
      setError("Please select both topic and level");
      return;
    }
    setError(null);
    router.push(`/quiz?topic=${selectedTopic}&level=${selectedLevel}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const statsVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen container mx-auto px-4 py-8 bg-gradient-to-br from-zinc-900 via-zinc-800 to-black text-white relative overflow-hidden">
        <BackgroundParticles />

        <div className="container mx-auto px-4 py-12 max-w-6xl space-y-20">
          <motion.section
            ref={heroRef}
            className="text-center pt-32 h-[80vh] flex justify-center flex-col items-center"
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="float-animation"
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.h1
                className="text-5xl md:text-6xl font-bold mb-4 tracking-tight"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <span className="h1">
                  Python Quiz Master
                </span>
              </motion.h1>
            </motion.div>

            <motion.p
              className="text-xl text-zinc-300 max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Test your Python knowledge with our interactive MCQ platform.
              Challenge yourself with questions from beginner to advanced
              levels.
            </motion.p>

            <motion.div
              className="mt-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.a
                href="#start-quiz"
                className="btn text-lg px-8 py-3"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(99, 102, 241, 0.8)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.section>

          <motion.section
            ref={statsRef}
            className="py-12"
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {statsData.map((stat, index) => (
                <motion.div
                  key={index}
                  className="glassmorphism rounded-xl p-6 text-center"
                  variants={statsVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className="text-3xl mb-2 flex justify-center"
                    animate={{ rotate: [0, 10, 0, -10, 0] }}
                    transition={{
                      duration: 2,
                      delay: index * 0.2,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  >
                   <span className="bg-zinc-800/50 text-indigo-300 p-1.5 rounded-full">{stat.icon}</span> 
                  </motion.div>
                  <motion.div className="text-3xl md:text-4xl font-bold neon-text">
                    {stat.number}
                    {stat.suffix || ""}
                  </motion.div>
                  <div className="text-sm text-zinc-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="start-quiz"
            ref={formRef}
            className="max-w-4xl mx-auto py-12"
            initial="hidden"
            animate={formInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div
              className="glassmorphism rounded-2xl p-8 neon-border"
              variants={itemVariants}
            >
              <motion.h2
                className="text-2xl md:text-3xl font-bold mb-6 text-center neon-text"
                variants={itemVariants}
              >
                Start Your Quiz
              </motion.h2>

              <motion.div variants={itemVariants} className="space-y-8">
                <div>
                  <label className="block mb-4 text-lg font-medium text-zinc-300 text-center">
                    Select a Python Topic
                  </label>
                  <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                    variants={itemVariants}
                  >
                    {topics.map((topic) => (
                      <motion.button
                        key={topic.id}
                        className={`p-4 rounded-lg flex flex-col items-center text-center gap-2 transition-all h-full ${
                          selectedTopic === topic.id
                            ? "neon-border bg-indigo-900/30"
                            : "border border-zinc-700 bg-zinc-800/50 hover:bg-zinc-700/50"
                        }`}
                        onClick={() => setSelectedTopic(topic.id)}
                        whileHover={{ scale: 1.02, y: -5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="w-16 h-16 mb-2 flex items-center justify-center rounded-full overflow-hidden relative">
                          <div
                            className={`absolute inset-0 opacity-70 bg-gradient-to-br 
                            ${
                              topic.id === "google_colab"
                                ? "from-blue-500 to-red-500"
                                : ""
                            }
                            ${
                              topic.id === "introduction_to_python"
                                ? "from-blue-500 to-yellow-500"
                                : ""
                            }
                            ${
                              topic.id === "data_types"
                                ? "from-purple-500 to-pink-500"
                                : ""
                            }
                            ${
                              topic.id === "operators_keywords_variables"
                                ? "from-yellow-500 to-orange-500"
                                : ""
                            }
                            ${
                              topic.id === "strings_casting"
                                ? "from-green-500 to-teal-500"
                                : ""
                            }
                            ${
                              topic.id === "control_flow"
                                ? "from-red-500 to-orange-500"
                                : ""
                            }
                            ${
                              topic.id === "lists_tuples_dict"
                                ? "from-blue-500 to-cyan-500"
                                : ""
                            }
                            ${
                              topic.id === "sets"
                                ? "from-indigo-500 to-purple-500"
                                : ""
                            }
                            ${
                              topic.id === "modules_functions"
                                ? "from-amber-500 to-yellow-500"
                                : ""
                            }
                            ${
                              topic.id === "file_handling"
                                ? "from-teal-500 to-green-500"
                                : ""
                            }
                            ${
                              topic.id === "exception_handling"
                                ? "from-rose-500 to-red-500"
                                : ""
                            }
                            ${
                              topic.id === "oop_concepts"
                                ? "from-cyan-500 to-blue-500"
                                : ""
                            }
                            ${
                              topic.id === "code_output"
                                ? "from-slate-500 to-zinc-700"
                                : ""
                            }
                          `}
                          ></div>
                          <Image
                            src={topic.image || "/logo.png"}
                            alt={topic.name}
                            width={50}
                            height={50}
                            className="relative z-10 w-10 h-10 object-contain mix-blend-overlay"
                          />
                        </div>
                        <div>
                          <div className="font-medium text-lg">
                            {topic.name}
                          </div>
                          <div className="text-xs text-zinc-400 mt-1">
                            {topic.description}
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </motion.div>
                </div>

                {selectedTopic && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <label className="block mb-4 text-lg font-medium text-zinc-300 text-center">
                      Select Difficulty Level
                    </label>
                    <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {levels.map((level) => (
                        <motion.button
                          key={level.id}
                          className={`p-4 rounded-lg flex flex-col items-center text-center gap-2 transition-all ${
                            selectedLevel === level.id
                              ? "neon-border bg-indigo-900/30"
                              : "border border-zinc-700 bg-zinc-800/50 hover:bg-zinc-700/50"
                          }`}
                          onClick={() => setSelectedLevel(level.id)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="w-14 h-14 mb-2 flex items-center justify-center rounded-full overflow-hidden relative">
                            <div
                              className={`absolute inset-0 opacity-70 bg-gradient-to-br ${level.color}`}
                            ></div>
                            <Image
                              src={level.image}
                              alt={level.name}
                              width={40}
                              height={40}
                              className="relative z-10 w-8 h-8 object-contain mix-blend-overlay"
                            />
                          </div>
                          <div>
                            <div className="font-medium">{level.name}</div>
                            <div className="text-xs text-zinc-400 mt-1">
                              {level.description}
                            </div>
                          </div>
                        </motion.button>
                      ))}
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>

              <AnimatePresence>
                {error && (
                  <motion.p
                    className="text-red-500 text-sm mt-4"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {error}
                  </motion.p>
                )}
              </AnimatePresence>

              <motion.div variants={itemVariants} className="mt-8">
                <motion.button
                  onClick={handleStartQuiz}
                  className="w-full py-4 px-6 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold rounded-lg shadow-md transition-all relative overflow-hidden group"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 25px rgba(79, 70, 229, 0.5)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">
                    Start Quiz Now
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      🚀
                    </motion.span>
                  </span>
                  <motion.span className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.section>

          <motion.section
            className="pt-12 pb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <div className="glassmorphism rounded-xl p-8 max-w-4xl mx-auto shadow-xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center neon-text">
                Beautiful Python Code Examples
              </h2>
              <p className="text-center text-zinc-300 mb-8">
                Our interactive quizzes include well-formatted Python code with
                syntax highlighting
              </p>

              <div className="rounded-xl overflow-hidden border border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                <CodeBlock
                  code={`   def is_prime(n: int) -> bool:
        """Check if a number is prime."""
        if n <= 1:
            return False
        if n <= 3:
            return True
        if n % 2 == 0 or n % 3 == 0:
            return False
        i = 5
        while i * i <= n:
            if n % i == 0 or n % (i + 2) == 0:
                return False
            i += 6
        return True

    def get_primes(limit: int) -> list[int]:
        """Get all prime numbers up to limit."""
        return [n for n in range(2, limit + 1) if is_prime(n)]

    # Example usage
    prime_numbers = get_primes(100)
    print(f"Prime numbers up to 100: {prime_numbers}")
    `}
                  language="python"
                  showLineNumbers={true}
                  className="shadow-lg"
                  title="prime_numbers.py"
                />
              </div>
            </div>
          </motion.section>
        </div>
      </main>
      <Footer />
    </>
  );
}
