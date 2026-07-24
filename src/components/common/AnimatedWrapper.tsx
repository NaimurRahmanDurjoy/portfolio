import type { ReactNode } from "react"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { fadeIn } from "@/lib/animations"

interface AnimatedWrapperProps {
  children: ReactNode
  variants?: Variants
  className?: string
  once?: boolean
}

export function AnimatedWrapper({ 
  children, 
  variants = fadeIn, 
  className,
  once = true
}: AnimatedWrapperProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-10%" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
