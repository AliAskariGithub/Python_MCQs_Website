'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  
  // Navigation items
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Topics', href: '/topics' },
    { label: 'Points', href: '/points' },
    { label: 'Contact', href: '/contact' }
  ]
  
  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when navigating
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])
  
  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-4 bg-zinc-900/80 backdrop-blur-md shadow-md' 
          : 'py-6 bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center">
              <motion.div 
                className="text-2xl mr-2"
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, repeatDelay: 3 }}
              >
                <Image src={"/logo.png"} alt='logo' width={500} height={500} className='w-10 h-10' />
              </motion.div>
              <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-cyan-400">
                PyQuizMaster
              </h1>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <Link 
                    href={item.href}
                    className={`relative px-2 py-1 text-base transition-colors duration-300 ${
                      pathname === item.href 
                        ? 'nav' 
                        : 'text-zinc-300 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {pathname === item.href && (
                      <motion.span 
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-400"
                        layoutId="activeNavIndicator"
                      />
                    )}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Link 
                  href="/#start-quiz"
                  className="ml-2 px-4 py-2 text-sm bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white rounded-lg transition-all hover:shadow-glow"
                >
                  Start Quiz
                </Link>
              </motion.li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none z-50"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="w-6 flex flex-col items-end justify-center gap-1.5 relative">
              <motion.span 
                className="w-6 h-0.5 bg-white block"
                animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span 
                className="h-0.5 bg-white block" 
                initial={{ width: '75%' }}
                animate={isMenuOpen ? { width: '100%', opacity: 0 } : { width: '75%', opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span 
                className="h-0.5 bg-white block" 
                initial={{ width: '50%' }}
                animate={isMenuOpen ? { width: '100%', rotate: -45, y: -6 } : { width: '50%', rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-zinc-900/95 backdrop-blur-lg md:hidden z-40 flex flex-col"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="h-20"></div> {/* Space for header */}
            <nav className="flex flex-col items-center justify-center flex-grow">
              <ul className="flex flex-col items-center space-y-6 py-8">
                {navItems.map((item, index) => (
                  <motion.li 
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    <Link 
                      href={item.href}
                      className={`relative text-2xl font-medium transition-colors ${
                        pathname === item.href 
                          ? 'text-indigo-400' 
                          : 'text-zinc-200 hover:text-white'
                      }`}
                    >
                      {item.label}
                      {pathname === item.href && (
                        <motion.span 
                          className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-400"
                          layoutId="mobileActiveNavIndicator"
                        />
                      )}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  exit={{ opacity: 0 }}
                >
                  <Link 
                    href="/#start-quiz"
                    className="mt-4 px-6 py-3 text-base bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white rounded-lg inline-block"
                  >
                    Start Quiz
                  </Link>
                </motion.li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
