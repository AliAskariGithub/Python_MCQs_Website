"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundParticles from "@/components/BackgroundParticles";
import { useEffect, useState } from "react";
import { HiChevronUp } from "react-icons/hi";

export default function PrivacyPage() {
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

  const staggerChildrenVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const policyItems = [
    {
      title: "Information We Collect",
      content: [
        "We collect information you provide directly to us when you register for an account, create or modify your profile, set preferences, or make purchases through the Services.",
        "We collect information about you when you use our Services, including your access times, browser types and language, and Internet Protocol addresses.",
        "We collect information regarding your performance on quizzes, including answers submitted, scores, and completion rates.",
      ],
    },
    {
      title: "How We Use Your Information",
      content: [
        "To provide, maintain, and improve our Services, including to process transactions, develop new products and services, and manage the performance of our Services.",
        "To personalize your experience, including to provide content recommendations and tailor our Services to your interests.",
        "To communicate with you, including for technical notices, updates, security alerts, and to provide support and administrative messages.",
      ],
    },
    {
      title: "Information Sharing",
      content: [
        "We do not share your personal information with third parties except as described in this privacy policy.",
        "We may share anonymous or aggregated information with third parties to help us improve the Services.",
        "We may share information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.",
      ],
    },
    {
      title: "Security",
      content: [
        "PyQuizMaster takes reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.",
        "We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk.",
        "Despite our efforts, no security measures are impenetrable, and we cannot guarantee the security of your information.",
      ],
    },
    {
      title: "Your Choices",
      content: [
        "You may update or correct information about yourself at any time by logging into your account and modifying your profile.",
        "You may opt out of receiving promotional communications from us by following the instructions in those communications.",
        "You may request access to, or deletion of, the personal information we maintain about you by contacting us as described below.",
      ],
    },
    {
      title: "Cookies",
      content: [
        "PyQuizMaster uses cookies and similar technologies to provide functionality and to recognize you across different services and devices.",
        "You can control or reject cookies through your browser settings. However, some Services may not function properly if you disable cookies.",
        "We use both session cookies that expire after you close your browser and persistent cookies that stay on your device until you delete them.",
      ],
    },
    {
      title: "Changes to This Privacy Policy",
      content: [
        "We may change this privacy policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy.",
        "We encourage you to review the privacy policy whenever you access the Services to stay informed about our information practices.",
        "Your continued use of our Services after any changes to this privacy policy constitutes your acceptance of the changes.",
      ],
    },
    {
      title: "Contact Us",
      content: [
        "If you have any questions about this privacy policy or our information practices, please contact us at:",
        "Email: syedaliaskarizaidi1@gmail.com",
        "Mail: Ali Askari(Owner), 44 Street, Karachi, Landhi 36/B",
      ],
    },
  ];

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
              <span className="h1">Privacy Policy</span>
            </motion.h1>
            <motion.p
              className="text-lg text-zinc-300 max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={
                headerInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </motion.p>
          </motion.div>

          <motion.div
            ref={contentRef}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            variants={staggerChildrenVariants}
            className="glassmorphism rounded-2xl p-8"
          >
            <motion.p
              variants={fadeInUpVariants}
              className="mb-8 text-zinc-300"
            >
              PyQuizMaster (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
              is committed to protecting your privacy. This Privacy Policy
              explains how your personal information is collected, used, and
              disclosed by PyQuizMaster. This Privacy Policy applies to our
              website, and its associated subdomains (collectively, our
              &quot;Service&quot;) alongside our application, PyQuizMaster. By
              accessing or using our Service, you signify that you have read,
              understood, and agree to our collection, storage, use, and
              disclosure of your personal information as described in this
              Privacy Policy.
            </motion.p>

            {policyItems.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUpVariants}
                className="mb-8"
              >
                <h2 className="text-2xl font-semibold mb-4 text-indigo-300">
                  {item.title}
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  {item.content.map((paragraph, i) => (
                    <li key={i} className="text-zinc-300">
                      {paragraph}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
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
