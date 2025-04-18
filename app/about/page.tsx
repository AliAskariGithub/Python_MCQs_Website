"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HiChevronUp } from "react-icons/hi";
import BackgroundParticles from "@/components/BackgroundParticles";
import { FiLink } from "react-icons/fi";
import { TbTargetArrow } from "react-icons/tb";
import { TbWorld } from "react-icons/tb";
import { FaChartLine } from "react-icons/fa6";

export default function AboutPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPosition = window.scrollY;
      setScrollProgress((scrollPosition / totalHeight) * 100);
      setShowScrollTop(scrollPosition > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  return (
    <>
      <Navbar />
      <div
        className="fixed top-0 left-0 h-1 bg-indigo-500 z-50"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <BackgroundParticles />
      <main className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-black text-white pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            ref={headerRef}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            className="mb-16 text-center"
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
              initial={{ y: 20, opacity: 0 }}
              animate={
                headerInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
              }
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="h1">
                About PyQuizMaster
              </span>
            </motion.h1>
            <motion.p
              className="text-lg text-zinc-300 max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={
                headerInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Your ultimate platform for mastering Python through interactive
              quizzes
            </motion.p>
          </motion.div>

          <motion.div
            ref={contentRef}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            className="glassmorphism rounded-2xl p-8 mb-12"
          >
            <h2 className="text-2xl font-semibold mb-6 text-indigo-300">
              Our Story
            </h2>
            <p className="text-zinc-300 mb-6">
              PyQuizMaster was created by a <a href="#developer" className="text-white font-bold">Person</a> of passionate Web, and Python developers
              who believe in the power of interactive learning. We recognized
              that many Python learners needed a structured way to test their
              knowledge and identify areas for improvement.
            </p>
            <p className="text-zinc-300 mb-6">
              I made this Quiz web in 2025 because the student and other peoples want a platform who provide python Knowledge. This website is completely based on Python Language. Our platform has rapidly grown to serve
              thousands of Python enthusiasts from beginners to experts.
              We&apos;re committed to providing high-quality, up-to-date
              questions that reflect real-world Python usage like best ,test preparation, interview crack and best practices.
            </p>
            <p className="text-zinc-300">
              Whether you&apos;re preparing for a Python certification, a job
              interview, or simply want to strengthen your skills, PyQuizMaster
              is designed to help you succeed in your Python journey.
            </p>
          </motion.div>

          <motion.div
            ref={missionRef}
            initial="hidden"
            animate={missionInView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            className="glassmorphism rounded-2xl p-8 mb-12"
          >
            <h2 className="text-2xl font-semibold mb-6 text-indigo-300">
              Our Mission
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glassmorphism p-6 rounded-lg">
                <div className="text-4xl mb-4 text-indigo-300 flex justify-center">
                  <TbTargetArrow />{" "}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Accessible Learning
                </h3>
                <p className="text-zinc-400">
                  Make Python expertise accessible to everyone through engaging,
                  interactive quizzes.
                </p>
              </div>
              <div className="glassmorphism p-6 rounded-lg">
                <div className="text-4xl mb-4 text-indigo-300 flex justify-center">
                  <FaChartLine />{" "}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Skill Growth
                </h3>
                <p className="text-zinc-400">
                  Help users identify their strengths and weaknesses to focus
                  their learning effectively.
                </p>
              </div>
              <div className="glassmorphism p-6 rounded-lg">
                <div className="text-4xl mb-4 text-indigo-300 flex justify-center">
                  <TbWorld />{" "}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Community Building
                </h3>
                <p className="text-zinc-400">
                  Foster a community of Python learners who support each
                  other$&apos;s growth.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
          id="developer"
            ref={teamRef}
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            className="glassmorphism rounded-2xl p-8"
          >
            <h2 className="text-2xl font-semibold mb-6 text-indigo-300">
              Meet the Developer
            </h2>
            <div className="flex flex-col items-center md:flex-row md:items-start gap-8">
              <div className="w-full max-w-xs">
                <div className="w-40 h-40 md:w-48 md:h-48 bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 rounded-full mx-auto mb-6 overflow-hidden ring-4 ring-indigo-600/30 shadow-lg shadow-indigo-500/20">
                  <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-4xl font-bold text-white">
                    <Image
                      src={"/image.png"}
                      alt="Ali Askari"
                      width={190}
                      height={190}
                      className="rounded-full"
                    ></Image>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="mb-6 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300">
                    Ali Askari
                  </h3>
                  <p className="text-indigo-400 text-lg mb-4">
                    Full Stack Developer & Python Expert
                  </p>

                  <div className="flex justify-between space-x-4 mb-6">
                    <div className="flex justify-center md:justify-start space-x-4">
                      <a
                        href="https://x.com/Syed_Ali_Askari?t=88dxwRm8tvBnkWDEVmZhWg&s=09"
                        target="_blank"
                        rel="noreferrer"
                        className="text-zinc-400 hover:text-indigo-400 transition-colors"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a
                        href="https://github.com/AliAskariGithub"
                        target="_blank"
                        rel="noreferrer"
                        className="text-zinc-400 hover:text-indigo-400 transition-colors"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/ali-askari-355257308/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-zinc-400 hover:text-indigo-400 transition-colors"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                    <a
                      href="https://alis-x-portfolio.vercel.app"
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-400 hover:text-indigo-400 transition-colors"
                    >
                      <p className="text-zinc-400 flex items-center gap-2 hover:text-indigo-400 underline underline-offset-8 hover:underline-indigo-400 transition-colors">
                        {" "}
                        View Portfolio <FiLink />{" "}
                      </p>
                    </a>
                  </div>
                </div>

                <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
                  <p className="text-zinc-300 mb-4">
                    As a passionate Full Stack Developer specializing in Python
                    and modern web technologies, I built PyQuizMaster to help
                    learners master Python concepts through interactive quizzes
                    and challenges.
                  </p>
                  <p className="text-zinc-300 mb-4">
                    With expertise in React, Next.js, and Python frameworks,
                    I&apos;ve created this platform to provide a comprehensive
                    learning experience that makes mastering Python both
                    effective and enjoyable.
                  </p>
                  <p className="text-zinc-300">
                    My goal is to continually expand PyQuizMaster with new
                    topics, challenges, and features to support Python
                    enthusiasts at every stage of their learning journey.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <motion.button
        className={`fixed bottom-6 right-6 p-3 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition-all z-30 ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <HiChevronUp className="w-5 h-5" />
      </motion.button>
      <Footer />
    </>
  );
}
