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
    <div className="flex flex-col rounded-xl border border-border glass overflow-hidden transition-all hover:border-primary/50 group">
      <div className="relative aspect-video overflow-hidden bg-surface/50">
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="object-contain p-4 w-full h-full transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
            No Image
          </div>
        )}
        {project.featured && (
          <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground shadow-lg">
            Featured
          </Badge>
        )}
      </div>
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline" className="text-xs">{project.type}</Badge>
          <Badge variant="outline" className="text-xs">{project.category}</Badge>
        </div>
        <h3 className="text-2xl font-bold tracking-tight mb-2 group-hover:text-primary transition-colors">
          <Link to={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <p className="text-muted-foreground text-sm flex-1 mb-6 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="text-xs font-medium text-foreground bg-surface px-2 py-1 rounded-md border border-border">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-xs font-medium text-muted-foreground bg-surface px-2 py-1 rounded-md border border-border">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
        <div className="flex items-center gap-4 mt-auto">
          <Button asChild className="flex-1">
            <Link to={`/projects/${project.slug}`}>View Case Study</Link>
          </Button>
          {project.liveUrl && (
            <Button variant="outline" size="icon" asChild>
              <a href={project.liveUrl} target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4" /></a>
            </Button>
          )}
          {project.githubUrl && (
            <Button variant="outline" size="icon" asChild>
              <a href={project.githubUrl} target="_blank" rel="noreferrer"><GitBranch className="h-4 w-4" /></a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
