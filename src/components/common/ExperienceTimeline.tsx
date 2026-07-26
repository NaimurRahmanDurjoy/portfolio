import type { Experience } from "@/types";
import { Badge } from "@/components/ui/badge";

interface ExperienceTimelineProps {
  experience: Experience;
}

export function ExperienceTimeline({ experience }: ExperienceTimelineProps) {
  return (
    <div className="relative pl-8 md:pl-0 group">
      {/* Mobile line & dot */}
      <div className="md:hidden absolute left-0 top-0 bottom-[-2rem] w-px bg-border/50"></div>
      <div className="md:hidden absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-primary ring-4 ring-background"></div>
      
      <div className="grid md:grid-cols-4 md:gap-12">
        {/* Left Side: Company & Date */}
        <div className="md:col-span-1 flex flex-col md:text-right relative">
          {/* Desktop line & dot attached to the right edge of the left column */}
          <div className="hidden md:block absolute right-[-1.5rem] top-0 bottom-[-3rem] w-px bg-border/50"></div>
          <div className="hidden md:block absolute right-[-1.5rem] top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-background translate-x-[5px] z-10 group-hover:scale-150 transition-transform duration-300"></div>

          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{experience.company}</h3>
          <span className="text-primary font-medium">{experience.position}</span>
          <span className="text-sm text-muted-foreground mt-1">
            {experience.duration.start} - {experience.duration.end}
          </span>
        </div>
        
        {/* Right Side: Details */}
        <div className="md:col-span-3 flex flex-col gap-6 pb-12">
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Responsibilities</h4>
            <ul className="list-disc pl-5 space-y-1 text-foreground/90">
              {experience.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Key Achievements</h4>
            <ul className="list-disc pl-5 space-y-1 text-accent">
              {experience.achievements.map((ach, i) => (
                <li key={i}>{ach}</li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-wrap gap-2 pt-2">
            {experience.technologies.map(tech => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
