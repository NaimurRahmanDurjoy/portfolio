import type { ReactNode } from "react"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { AnimatePresence, motion } from "framer-motion"
import { useLocation } from "react-router-dom"

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col relative bg-background">
      <div className="fixed inset-0 z-[-1] bg-grid-pattern opacity-[0.03] dark:opacity-[0.02]" />
      
      <Navbar />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="flex-1 pt-16"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      
      <Footer />
    </div>
  )
}
