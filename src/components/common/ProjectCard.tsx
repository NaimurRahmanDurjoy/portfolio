import type { Project } from "@/types";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, GitBranch, } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex flex-col glass border border-border/50 rounded-3xl overflow-hidden hover:border-primary/50 hover:shadow-[0_0_30px_-15px_rgba(var(--primary),0.3)] transition-all duration-300 h-full">
      {/* Project Image */}
      <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-surface shrink-0 border-b border-border/50">
        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10" />
        {project.thumbnail ? (
          <img 
            src={project.thumbnail} 
            alt={project.title} 
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-surface">No Image Provided</div>
        )}
        <div className="absolute top-4 left-4 z-20 flex gap-2">
          <Badge variant="secondary" className="bg-background/80 backdrop-blur-md text-foreground border-border/50 shadow-sm text-xs px-2.5 py-0.5 rounded-full">
            {project.type}
          </Badge>
          {project.featured && (
            <Badge className="bg-primary text-primary-foreground shadow-lg text-xs px-2.5 py-0.5 rounded-full">
              Featured
            </Badge>
          )}
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
