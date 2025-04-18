'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Swal from "sweetalert2";
import BackgroundParticles from '@/components/BackgroundParticles';
import Link from 'next/link';
import { FiLink } from 'react-icons/fi';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "7b876683-f37a-49de-b89e-5fb893c34edd",
          name: formData.get("name"),
          email: formData.get("email"),
          telno: formData.get("telno"),
          message: formData.get("message"),
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        Swal.fire({
          title: "Success!",
          text: "Message has been sent successfully! You will be contacted soon.",
          icon: "success",
        });
      } else {
        throw new Error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error!",
        text: "Failed to send your message. Please try again later.",
        icon: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
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

  return (
    <>
      <Navbar />
      
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
              animate={headerInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="h1">
                Contact Us
              </span>
            </motion.h1>
            <motion.p
              className="text-lg text-zinc-300 max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={headerInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Have questions or feedback? We&apos;d love to hear from you!
            </motion.p>
          </motion.div>

          <motion.div
            ref={contactRef}
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="glassmorphism rounded-2xl p-8">
              <h2 className="text-2xl font-semibold mb-6 text-indigo-300">Send Us a Message</h2>
              
              {submitStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-900/30 border border-green-500 rounded-lg p-4 text-center"
                >
                  <div className="text-3xl mb-2">✓</div>
                  <h3 className="text-xl font-semibold mb-1">Message Sent!</h3>
                  <p className="text-zinc-300">We&apos;ll get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-zinc-300 mb-1">Name</label>
                    <input
                       type="text"
                       placeholder="Your Name"
                       name="name"
                       required
                      className="w-full bg-zinc-800/60 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-zinc-300 mb-1">Email</label>
                    <input
                      type="email"
                      placeholder="Your Email"
                      name="email"
                      required
                      className="w-full bg-zinc-800/60 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-zinc-300 mb-1">Subject</label>
                    <select
                       name="telno"
                       required
                      className="w-full bg-zinc-800/60 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">Web Developement</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-zinc-300 mb-1">Message</label>
                    <textarea
                       placeholder="Your Message"
                       name="message"
                       rows={6}
                       required
                      className="w-full bg-zinc-800/60 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold rounded-lg shadow-md transition-all relative overflow-hidden group"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 0 15px rgba(79, 70, 229, 0.5)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <motion.span 
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                        />
                        Sending...
                      </span>
                    ) : 'Send Message'}
                  </motion.button>
                </form>
              )}
            </div>
            
            <div className="space-y-8">
              <div className="glassmorphism rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-indigo-300">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mr-3 text-indigo-400 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Email</h3>
                      <Link href={"mailto:syedaliaskarizaidi1@gmail.com"} className="text-zinc-300">syedaliaskarizaidi1@gmail.com</Link>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 text-indigo-400 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Phone</h3>
                      <p className="text-zinc-300">+92 319 2046516</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 text-indigo-400 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Location</h3>
                      <p className="text-zinc-300">Landhi 36/B Street 44<br />Karachi, Pakistan</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glassmorphism rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-indigo-300">Connect With Us</h2>
                <div className="flex space-x-4">
                  <a href="https://x.com/Syed_Ali_Askari?t=88dxwRm8tvBnkWDEVmZhWg&s=09" target="_blank" rel="noreferrer" className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-zinc-300 hover:bg-indigo-600 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="https://github.com/AliAskariGithub" target="_blank" rel="noreferrer" className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-zinc-300 hover:bg-indigo-600 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/ali-askari-355257308/" target="_blank" rel="noreferrer" className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-zinc-300 hover:bg-indigo-600 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                href="https://alis-x-portfolio.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-zinc-300 hover:bg-indigo-600 hover:text-white transition-colors"
              >
                <FiLink size={20}/>
              </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
} 