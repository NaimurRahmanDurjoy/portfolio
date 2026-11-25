import type { Project } from "@/types";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, GitBranch, Laptop } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex flex-col glass border border-border/50 rounded-3xl overflow-hidden hover:border-primary/50 hover:shadow-[0_0_30px_-15px_rgba(var(--primary),0.3)] transition-all duration-300 h-full">
      {/* Sleek macOS Window Mockup */}
      <div className="relative w-full h-52 sm:h-56 bg-surface/50 shrink-0 border-b border-border/50 flex flex-col overflow-hidden">
        {/* macOS Window Top Bar */}
        <div className="h-9 sm:h-10 px-3 sm:px-3.5 bg-background/90 backdrop-blur-md border-b border-border/40 flex items-center justify-between shrink-0 z-20 select-none">
          {/* Traffic light dots */}
          <div className="flex items-center gap-1.5 shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80 group-hover:bg-rose-500 transition-colors" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80 group-hover:bg-amber-500 transition-colors" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 group-hover:bg-emerald-500 transition-colors" />
          </div>

          {/* Clean Project Title Pill */}
          <div className="px-3 py-0.5 rounded-md bg-surface/80 border border-border/50 text-[11px] font-semibold text-foreground/80 max-w-[130px] sm:max-w-[160px] truncate text-center shadow-inner">
            {project.title}
          </div>

          {/* Badges on right side of header - Zero Overlap */}
          <div className="flex items-center gap-1.5 shrink-0">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-[10px] px-2 py-0 rounded-full font-semibold">
              {project.type}
            </Badge>
            {project.featured && (
              <Badge className="bg-primary text-primary-foreground text-[10px] px-2 py-0 rounded-full shadow-sm">
                Featured
              </Badge>
            )}
          </div>
        </div>

        {/* Browser Canvas / Image Viewport */}
        <div className="relative flex-1 w-full overflow-hidden bg-zinc-950 flex items-center justify-center">
          {project.thumbnail ? (
            <img 
              src={project.thumbnail} 
              alt={project.title} 
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-center p-4 bg-gradient-to-br from-zinc-950 via-zinc-900 to-background">
              <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-2 shadow-sm">
                <Laptop className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-foreground line-clamp-1">{project.title}</h4>
              <Badge variant="outline" className="mt-1 text-[9px] px-2 py-0 border-primary/30 text-primary bg-primary/5">
                {project.category}
              </Badge>
            </div>
          )}
          {/* Glass glare effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.06] pointer-events-none" />
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 flex flex-col flex-1 relative z-20 bg-background/40">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-1">
            {project.title}
          </h3>
        </div>
        
        <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
          {project.description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
          {project.technologies.slice(0, 3).map(tech => (
            <Badge key={tech} variant="outline" className="text-[10px] py-0.5 px-2 bg-primary/5 text-primary border-primary/20">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="outline" className="text-[10px] py-0.5 px-1.5 border-border text-muted-foreground">
              +{project.technologies.length - 3}
            </Badge>
          )}
        </div>

        <div className="pt-4 border-t border-border/50 flex items-center justify-between gap-2">
          <Button asChild variant="ghost" className="flex-1 group/btn hover:bg-primary/10 hover:text-primary transition-colors rounded-xl">
            <Link to={`/projects/${project.slug}`} className="flex items-center justify-center gap-2">
              View Case Study
              <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
          </Button>
          {project.liveUrl && (
            <Button variant="outline" size="icon" asChild className="shrink-0 rounded-xl border-border/50 glass hover:text-primary hover:border-primary/50">
              <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label="Live Site">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button variant="outline" size="icon" asChild className="shrink-0 rounded-xl border-border/50 glass hover:text-primary hover:border-primary/50">
              <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub Repository">
                <GitBranch className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
