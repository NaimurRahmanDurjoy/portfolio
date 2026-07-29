import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/common/ThemeToggle"
import { Button } from "@/components/ui/button"
import { useProfile } from "@/hooks/useProfile"

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Articles", path: "/articles" },
  { name: "Contact", path: "/contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const { data: profile } = useProfile()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-surface/60 backdrop-blur-md border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tighter flex items-center gap-3 group">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary group-hover:scale-110 transition-transform">
            <rect x="2" y="2" width="28" height="28" rx="8" className="fill-primary/10 stroke-primary/30" strokeWidth="1.5" />
            <path d="M9 22V10L15 22V10" className="stroke-primary" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 22V10H20.5C22.5 10 23.5 11 23.5 13.5C23.5 16 22.5 17 20.5 17H17M19.5 17L23.5 22" className="stroke-primary" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">Naimur Rahman</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1.5 pl-4 relative">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "relative text-sm font-semibold px-4 py-2 transition-all duration-300 z-10",
                  isActive ? "text-primary dark:text-blue-400" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-full -z-10 shadow-[0_0_15px_rgba(37,99,235,0.1)] dark:shadow-[0_0_15px_rgba(59,130,246,0.25)] border border-primary/20 dark:border-primary/40"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {!isActive && (
                  <div className="absolute inset-0 hover:bg-surface/50 dark:hover:bg-white/5 rounded-full -z-10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          {profile?.resumeUrl && (
            <Button asChild className="hidden md:inline-flex rounded-lg px-6 hover:shadow-primary/20 hover:shadow-lg transition-all">
              <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">Resume</a>
            </Button>
          )}
          {/* Mobile Navigation Toggle could go here */}
        </div>
      </div>
    </header>
  )
}
