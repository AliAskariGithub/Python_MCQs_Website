'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsPage() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [contentRef, contentInView] = useInView({
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
      }
    }
  };

  const staggerChildrenVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const termsItems = [
    {
      title: "Acceptance of Terms",
      content: [
        "By accessing or using the PyQuizMaster platform, you agree to be bound by these Terms of Service and all applicable laws and regulations.",
        "If you do not agree with any of these terms, you are prohibited from using or accessing this site.",
        "The materials contained in this website are protected by applicable copyright and trademark law."
      ]
    },
    {
      title: "Use License",
      content: [
        "Permission is granted to temporarily access the materials on PyQuizMaster's website for personal, non-commercial use only.",
        "This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose; attempt to decompile or reverse engineer any software contained on PyQuizMaster's website; remove any copyright or other proprietary notations from the materials; or transfer the materials to another person or 'mirror' the materials on any other server.",
        "This license shall automatically terminate if you violate any of these restrictions and may be terminated by PyQuizMaster at any time."
      ]
    },
    {
      title: "User Accounts",
      content: [
        "To access certain features of the platform, you may be required to create an account. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer.",
        "You agree to accept responsibility for all activities that occur under your account or password. PyQuizMaster reserves the right to refuse service, terminate accounts, remove or edit content, or cancel orders at its sole discretion.",
        "You must provide accurate, current, and complete information when creating an account and keep this information up-to-date."
      ]
    },
    {
      title: "Content",
      content: [
        "All content provided on PyQuizMaster is for informational and educational purposes only. The quiz questions, answers, and related content are the property of PyQuizMaster or its content suppliers and are protected by international copyright laws.",
        "You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without our prior written consent.",
        "Any user-contributed content remains the intellectual property of the user, but by submitting content to PyQuizMaster, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute your content in any existing or future media."
      ]
    },
    {
      title: "Disclaimer",
      content: [
        "The materials on PyQuizMaster's website are provided on an 'as is' basis. PyQuizMaster makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
        "Further, PyQuizMaster does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.",
        "While we strive to provide accurate information, we cannot guarantee that all quiz questions and answers are error-free or up-to-date."
      ]
    },
    {
      title: "Limitations",
      content: [
        "In no event shall PyQuizMaster or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on PyQuizMaster's website, even if PyQuizMaster or a PyQuizMaster authorized representative has been notified orally or in writing of the possibility of such damage.",
        "Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.",
        "You agree to indemnify, defend, and hold harmless PyQuizMaster, its officers, directors, employees, agents, licensors, and suppliers from and against all losses, expenses, damages and costs, including reasonable attorneys' fees, resulting from any violation of these Terms of Service or any activity related to your account."
      ]
    },
    {
      title: "Revisions and Errata",
      content: [
        "The materials appearing on PyQuizMaster's website could include technical, typographical, or photographic errors. PyQuizMaster does not warrant that any of the materials on its website are accurate, complete or current.",
        "PyQuizMaster may make changes to the materials contained on its website at any time without notice. PyQuizMaster does not, however, make any commitment to update the materials.",
        "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect."
      ]
    },
    {
      title: "Governing Law",
      content: [
        "These Terms of Service shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.",
        "Any dispute arising under or relating to these Terms of Service shall be resolved exclusively in the federal or state courts located in San Francisco, California.",
        "You agree to submit to the personal jurisdiction of the courts located within San Francisco, California for the purpose of litigating all such claims."
      ]
    },
    {
      title: "Contact Information",
      content: [
        "If you have any questions about these Terms of Service, please contact us at:",
        "Email: terms@pyquizmaster.com",
        "Mail: PyQuizMaster, 123 Python Street, San Francisco, CA 94107"
      ]
    }
  ];

  return (
    <>
      <Navbar />
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
              animate={headerInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400">
                Terms of Service
              </span>
            </motion.h1>
            <motion.p
              className="text-lg text-zinc-300 max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={headerInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </motion.p>
          </motion.div>

          <motion.div
            ref={contentRef}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            variants={staggerChildrenVariants}
            className="glassmorphism rounded-2xl p-8"
          >
            <motion.p variants={fadeInUpVariants} className="mb-8 text-zinc-300">
              Please read these Terms of Service carefully before using the PyQuizMaster website and services operated by PyQuizMaster.
              Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms.
              These Terms apply to all visitors, users and others who access or use the Service.
            </motion.p>

            {termsItems.map((item, index) => (
              <motion.div key={index} variants={fadeInUpVariants} className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-indigo-300">{item.title}</h2>
                <ul className="list-disc pl-6 space-y-2">
                  {item.content.map((paragraph, i) => (
                    <li key={i} className="text-zinc-300">{paragraph}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
} 