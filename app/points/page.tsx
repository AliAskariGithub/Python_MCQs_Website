'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { pythonTopics, type Point } from '@/lib/pythonTopicsData';
import { useState, useEffect } from 'react';
import { HiChevronUp, HiSearch, HiX } from 'react-icons/hi';
import BackgroundParticles from '@/components/BackgroundParticles';

interface SectionRefs {
  [key: string]: { 
    ref: HTMLDivElement | null;
    inView: boolean;
  };
}

export default function ImportantPointsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sectionRefs, setSectionRefs] = useState<SectionRefs>({});
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.id;
        setSectionRefs(prev => ({
          ...prev,
          [id]: {
            ...prev[id],
            inView: entry.isIntersecting
          }
        }));
        
        if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
          setActiveSection(id);
        }
      });
    }, options);

    const initialRefs: SectionRefs = {};
    pythonTopics.forEach(topic => {
      initialRefs[topic.id] = {
        ref: null,
        inView: false
      };
    });
    setSectionRefs(initialRefs);

    const elements: HTMLDivElement[] = [];
    pythonTopics.forEach(topic => {
      const element = document.getElementById(topic.id) as HTMLDivElement;
      if (element) {
        elements.push(element);
        observer.observe(element);
      }
    });

    return () => {
      elements.forEach(element => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPosition = window.scrollY;
      setScrollProgress((scrollPosition / totalHeight) * 100);
      setShowScrollTop(scrollPosition > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const setRef = (id: string) => (node: HTMLDivElement | null) => {
    if (node) {
      setSectionRefs(prev => ({
        ...prev,
        [id]: {
          ...prev[id],
          ref: node
        }
      }));
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {   
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      }
    }
  };

  const staggerListVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  const filteredTopics = searchTerm 
    ? pythonTopics.filter(topic => 
        topic.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        topic.points.some(point => 
          point.text.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    : pythonTopics;

  const renderPoint = (point: Point) => (
    <li className="text-zinc-300">
      <div className="flex">
        <span className="mr-2 text-indigo-400">•</span>
        <div>
          {point.highlights && point.highlights.length > 0 ? (
            <>
              {point.text.split(new RegExp(`(${point.highlights.map(h => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'i')).map((part, i) => {
                const isHighlighted = point.highlights?.some(h => h.toLowerCase() === part.toLowerCase());
                return isHighlighted ? 
                  <span key={i} className="text-white font-medium">{part}</span> : 
                  <span key={i}>{part}</span>;
              })}
            </>
          ) : (
            point.text
          )}
          {point.code && (
            <div className="mt-2 bg-zinc-800/80 rounded-lg border border-zinc-700/50 overflow-hidden">
              <div className="flex items-center px-4 py-1 bg-zinc-800 border-b border-zinc-700/50">
                <div className="flex space-x-1 mr-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                </div>
                <span className="text-xs text-zinc-400">python</span>
              </div>
              <pre className="font-mono text-indigo-200 whitespace-pre-wrap p-3 text-sm overflow-x-auto">{point.code}</pre>
            </div>
          )}
        </div>
      </div>
    </li>
  );

  return (
    <>
      <Navbar />
      
      <BackgroundParticles />
      <div className="fixed top-0 left-0 h-1 bg-indigo-500 z-50" style={{ width: `${scrollProgress}%` }}></div>

      <main className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-black text-white pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            ref={headerRef}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            className="mb-12 text-center"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
              initial={{ y: 20, opacity: 0 }}
              animate={headerInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400">
                Important Python Points
              </span>
            </motion.h1>
            <motion.p
              className="text-lg text-zinc-300 max-w-4xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={headerInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              This section highlights the essential concepts and features every Python learner should know. From core syntax and data types to advanced topics like modules, functions, and error handling, these key points provide a quick and effective reference for mastering Python and also for cracking the MCQs. Whether you&apos;re a beginner or brushing up your skills, these insights will strengthen your understanding and boost your coding confidence.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-28">
                <motion.div
                  initial="hidden"
                  animate={headerInView ? "visible" : "hidden"}
                  variants={fadeInUpVariants}
                  className="glassmorphism rounded-2xl p-4 mb-6"
                >
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400">
                      <HiSearch className="w-4 h-4" />
                    </span>
                    <input
                      type="text"
                      placeholder="Search for concepts..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full py-2 pl-10 pr-8 bg-zinc-800/70 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                    />
                    {searchTerm && (
                      <button
                        onClick={() => setSearchTerm("")}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 hover:text-white"
                      >
                        <HiX className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </motion.div>

                <motion.div
                  initial="hidden"
                  animate={headerInView ? "visible" : "hidden"}
                  variants={fadeInUpVariants}
                  className="glassmorphism rounded-2xl p-5 mb-6 hidden lg:block"
                >
                  <h2 className="text-xl font-semibold mb-4 text-indigo-300">Topics</h2>
                  <motion.ul 
                    className="space-y-2 text-sm"
                    variants={staggerListVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {pythonTopics.map(topic => (
                      <motion.li key={topic.id} variants={listItemVariants}>
                        <a 
                          href={`#${topic.id}`} 
                          className={`block py-1.5 px-3 rounded-md transition-colors ${
                            activeSection === topic.id 
                              ? "bg-indigo-500/20 text-indigo-300 font-medium" 
                              : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
                          }`}
                        >
                          {topic.title}
                        </a>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <motion.div
                initial="hidden"
                animate={headerInView ? "visible" : "hidden"}
                variants={fadeInUpVariants}
                className="glassmorphism rounded-2xl p-6 mb-8 lg:hidden"
              >
                <h2 className="text-xl font-semibold mb-4 text-indigo-300">Quick Navigation</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {pythonTopics.map(topic => (
                    <a 
                      key={topic.id}
                      href={`#${topic.id}`} 
                      className="text-zinc-300 hover:text-indigo-400 transition-colors"
                    >
                      • {topic.title}
                    </a>
                  ))}
                </div>
              </motion.div>

              {filteredTopics.map((topic) => (
                <motion.div
                  key={topic.id}
                  id={topic.id}
                  ref={setRef(topic.id)}
                  initial="hidden"
                  animate={sectionRefs[topic.id]?.inView ? "visible" : "hidden"}
                  variants={fadeInUpVariants}
                  className="glassmorphism rounded-2xl p-8 mb-8"
                >
                  <h2 className="text-2xl font-semibold mb-2 text-indigo-300">{topic.title}</h2>
                  <p className="text-zinc-400 mb-4">{topic.description}</p>
                  <motion.ul 
                    className="space-y-4"
                    variants={staggerListVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {topic.points.map((point, idx) => (
                      <motion.div
                        key={idx}
                        variants={listItemVariants}
                      >
                        {renderPoint(point)}
                      </motion.div>
                    ))}
                  </motion.ul>
                </motion.div>
              ))}

              {filteredTopics.length === 0 && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUpVariants}
                  className="glassmorphism rounded-2xl p-8 mb-8 text-center"
                >
                  <h3 className="text-xl text-indigo-300 mb-2">No matching topics found</h3>
                  <p className="text-zinc-400">Try a different search term or clear the search.</p>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        <motion.button
          className={`fixed bottom-6 right-6 p-3 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition-all z-30 ${
            showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          initial={{ opacity: 0 }}
          animate={{ opacity: showScrollTop ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <HiChevronUp className="w-5 h-5" />
        </motion.button>
      </main>
      <Footer />
    </>
  );
} 