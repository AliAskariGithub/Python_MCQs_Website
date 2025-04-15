'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { mcqs } from '@/lib/data';
import { AnswerData, Level, Topic } from '@/types';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export default function ResultPage() {
  const [data, setData] = useState<AnswerData | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [tableRef, tableInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const storedData = localStorage.getItem('userAnswers');
    if (storedData) {
      setTimeout(() => {
      const parsed = JSON.parse(storedData) as AnswerData;
      setData(parsed);
        setLoading(false);
      }, 800);
    } else {
      router.push('/');
    }
  }, [router]);

  const generatePDF = () => {
    if (!data) return;
    
    const doc = new jsPDF();
    
    // Add logo at the top
    const logoWidth = 20;
    const logoHeight = 20;
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    
    // Add logo in the top right corner
    doc.addImage('/logo.png', 'PNG', pageWidth - logoWidth - 10, 10, logoWidth, logoHeight);

    doc.setFontSize(20);
    doc.text("Python Quiz Results", 14, 22);
    
    // Add metadata
    doc.setFontSize(12);
    doc.text(`Topic: ${data.topic.toUpperCase()}`, 14, 32);
    doc.text(`Level: ${data.level.toUpperCase()}`, 14, 39);
    doc.text(`Score: ${correctCount}/${total} (${percentage.toFixed(2)}%)`, 14, 46);
    
    autoTable(doc, {
      head: [['#', 'Question', 'Your Answer', 'Correct Answer', 'Result']],
      body: data.questions.map((q, i) => [
        i + 1,
        q.question,
        q.userAnswer || 'Not Answered',
        correctAnswers[i].answer,
        q.userAnswer === correctAnswers[i].answer ? '✓' : '✗'
      ]),
      startY: 55,
      theme: 'grid',
      styles: { fontSize: 8, cellPadding: 2 },
      headStyles: { fillColor: [79, 70, 229] },
      margin: { bottom: 20 } // Add margin at the bottom for copyright
    });
    
    // Add copyright at the bottom of the page
    doc.setFontSize(8);
    doc.setTextColor(100, 100, 100);
    const copyrightText = `© ${new Date().getFullYear()} PyQuizMaster. All rights reserved.`;
    doc.text(copyrightText, pageWidth / 2, pageHeight - 10, { align: 'center' });
    
    doc.save(`python-quiz-${data.level}.pdf`);
  };

  if (loading) {
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
            Calculating your results...
          </motion.p>
        </div>
      </div>
    );
  }

  if (!data) return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-black flex items-center justify-center">
      <p className="text-zinc-300">No results found. Please take a quiz first.</p>
    </div>
  );

  const topic = data.topic as Topic;
  const level = data.level as Level;

  const correctAnswers = mcqs[topic]?.[level] || [];

  const total = correctAnswers.length;
  const correctCount = data.questions.filter((q, i) => {
    return q.userAnswer === correctAnswers[i].answer;
  }).length;

  const percentage = (correctCount / total) * 100;

  // Determine result message and color
  let resultMessage = '';
  let resultColor = '';
  
  if (percentage >= 90) {
    resultMessage = 'Outstanding! You\'re a Python master!';
    resultColor = 'from-indigo-600 to-purple-600';
  } else if (percentage >= 75) {
    resultMessage = 'Great job! You have solid Python knowledge!';
    resultColor = 'from-blue-600 to-indigo-600';
  } else if (percentage >= 60) {
    resultMessage = 'Good effort! Keep practicing to improve!';
    resultColor = 'from-cyan-500 to-blue-500';
  } else if (percentage >= 40) {
    resultMessage = 'Not bad! Review the topics you missed.';
    resultColor = 'from-yellow-500 to-orange-500';
  } else {
    resultMessage = 'Keep studying! You\'ll get better with practice.';
    resultColor = 'from-red-500 to-pink-500';
  }

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

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scoreVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { 
        type: "spring", 
        stiffness: 80, 
        delay: 0.2 
      } 
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={fadeInUpVariants}
          className="text-center mb-12"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={headerInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400">
              Your Quiz Results
            </span>
          </motion.h1>
          <motion.p
            className="text-lg text-zinc-300"
            initial={{ y: 20, opacity: 0 }}
            animate={headerInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className={`bg-gradient-to-r ${resultColor} bg-clip-text text-transparent font-semibold`}>
              {resultMessage}
            </span>
          </motion.p>
        </motion.div>

        <motion.div
          ref={statsRef}
          className="glassmorphism rounded-2xl p-8 mb-10"
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
          variants={staggerContainerVariants}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div variants={fadeInUpVariants} className="text-center">
              <div className="text-zinc-400 text-sm mb-1">Topic</div>
              <div className="text-xl font-semibold">{topic.toUpperCase()}</div>
            </motion.div>
            
            <motion.div variants={fadeInUpVariants} className="text-center">
              <div className="text-zinc-400 text-sm mb-1">Level</div>
              <div className="text-xl font-semibold">{level.toUpperCase()}</div>
            </motion.div>
            
            <motion.div variants={fadeInUpVariants} className="text-center">
              <div className="text-zinc-400 text-sm mb-1">Score</div>
              <div className="text-xl font-semibold">{correctCount} / {total}</div>
            </motion.div>
            
            <motion.div variants={fadeInUpVariants} className="text-center">
              <div className="text-zinc-400 text-sm mb-1">Accuracy</div>
              <div className="text-xl font-semibold">{percentage.toFixed(1)}%</div>
            </motion.div>
      </div>

          <motion.div
            className="mt-8 flex justify-center"
            variants={scoreVariants}
          >
            <div className="relative h-40 w-40">
              <svg className="h-full w-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#1f1f29"
                  strokeWidth="10"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray="283"
                  strokeDashoffset={283 - (283 * percentage) / 100}
                  initial={{ strokeDashoffset: 283 }}
                  animate={{ strokeDashoffset: 283 - (283 * percentage) / 100 }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4f46e5" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="text-3xl font-bold"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, type: "spring", stiffness: 80 }}
                >
                  {percentage.toFixed(0)}%
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="mt-8 flex justify-center"
            variants={fadeInUpVariants}
          >
            <motion.button
              onClick={generatePDF}
              className="py-2 px-4 bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-lg flex items-center"
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 0 15px rgba(79, 70, 229, 0.5)"
              }}
              whileTap={{ scale: 0.97 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Results (PDF)
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          ref={tableRef}
          className="mt-8"
          initial="hidden"
          animate={tableInView ? "visible" : "hidden"}
          variants={fadeInUpVariants}
        >
          <h2 className="text-2xl font-bold mb-4 neon-text">Question Details</h2>
          
          <div className="overflow-x-auto glassmorphism rounded-xl">
            <table className="w-full text-sm">
              <thead className="border-b border-zinc-700 bg-zinc-800/50">
                <tr>
                  <th className="px-4 py-3 text-left">#</th>
                  <th className="px-4 py-3 text-left">Question</th>
                  <th className="px-4 py-3 text-left">Your Answer</th>
                  <th className="px-4 py-3 text-left">Correct Answer</th>
                  <th className="px-4 py-3 text-center">Result</th>
            </tr>
          </thead>
          <tbody>
                {data.questions.map((q, i) => {
                  const isCorrect = q.userAnswer === correctAnswers[i].answer;
                  return (
                    <motion.tr
                key={i}
                      className={`border-t border-zinc-700/50`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.03 }}
                    >
                      <td className="px-4 py-3 font-semibold">{i + 1}</td>
                      <td className="px-4 py-3">{q.question}</td>
                      <td className={`px-4 py-3 ${!q.userAnswer ? 'text-zinc-500 italic' : ''}`}>
                        {q.userAnswer || 'Not Answered'}
                      </td>
                      <td className="px-4 py-3">{correctAnswers[i].answer}</td>
                      <td className="px-4 py-3">
                        <div className="flex justify-center">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            isCorrect 
                              ? 'bg-green-900/30 text-green-500 border border-green-500' 
                              : 'bg-red-900/30 text-red-500 border border-red-500'
                          }`}>
                            {isCorrect ? '✓' : '✗'}
                          </div>
                        </div>
                      </td>
                    </motion.tr>
                  );
                })}
          </tbody>
        </table>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <motion.button
              onClick={() => router.push('/')}
              className="py-3 px-6 glassmorphism rounded-lg flex items-center"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </motion.button>
            
            <motion.button
              onClick={() => router.push(`/quiz?topic=${topic}&level=${level}`)}
              className="py-3 px-6 bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-lg flex items-center"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 15px rgba(79, 70, 229, 0.5)"
              }}
              whileTap={{ scale: 0.97 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Retry Quiz
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
