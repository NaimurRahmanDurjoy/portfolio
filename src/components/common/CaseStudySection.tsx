import type { ReactNode } from "react";
import { AnimatedWrapper } from "@/components/common/AnimatedWrapper";
import { slideUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface CaseStudySectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function CaseStudySection({ title, children, className }: CaseStudySectionProps) {
  return (
    <AnimatedWrapper variants={slideUp} className={cn("py-8 border-b border-border last:border-0", className)}>
      <h3 className="text-2xl font-bold mb-4 text-foreground">{title}</h3>
      <div className="prose dark:prose-invert max-w-none text-muted-foreground">
        {children}
      </div>
    </AnimatedWrapper>
  );
}
