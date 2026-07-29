import type { HTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"
import { AnimatedWrapper } from "./AnimatedWrapper"
import { slideUp } from "@/lib/animations"

interface SectionContainerProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  id?: string
}

export function SectionContainer({ children, className, id, ...props }: SectionContainerProps) {
  return (
    <section id={id} className={cn("py-10 md:py-12", className)} {...props}>
      <div className="container px-4 md:px-6 mx-auto">
        {children}
      </div>
    </section>
  )
}

interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
}

export function SectionHeading({ title, subtitle, className, ...props }: SectionHeadingProps) {
  return (
    <AnimatedWrapper variants={slideUp} className={cn("flex flex-col items-center text-center gap-2 mb-12 max-w-3xl mx-auto", className)} {...props}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">{title}</h2>
      {subtitle && <p className="text-muted-foreground text-lg">{subtitle}</p>}
    </AnimatedWrapper>
  )
}
