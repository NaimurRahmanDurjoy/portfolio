import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/common/ThemeToggle"
import { Button } from "@/components/ui/button"

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
        <Link to="/" className="text-xl font-bold tracking-tighter">
          Naimur Rahman
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === link.path
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button className="hidden md:inline-flex">Resume</Button>
          {/* Mobile Navigation Toggle could go here */}
        </div>
      </div>
    </header>
  )
}
