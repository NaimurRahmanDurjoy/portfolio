import type { Experience } from "@/types";
import { Badge } from "@/components/ui/badge";

interface ExperienceTimelineProps {
  experience: Experience;
}

export function ExperienceTimeline({ experience }: ExperienceTimelineProps) {
  return (
    <div className="relative pl-8 md:pl-0">
      <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-border"></div>
      <div className="md:hidden absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-primary"></div>
      
      <div className="grid md:grid-cols-4 gap-4 md:gap-8 p-6 border border-border glass rounded-xl hover:border-primary/50 transition-colors group">
        <div className="md:col-span-1 flex flex-col">
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{experience.company}</h3>
          <span className="text-primary font-medium">{experience.position}</span>
          <span className="text-sm text-muted-foreground mt-1">
            {experience.duration.start} - {experience.duration.end}
          </span>
        </div>
        
        <div className="md:col-span-3 flex flex-col gap-6">
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
