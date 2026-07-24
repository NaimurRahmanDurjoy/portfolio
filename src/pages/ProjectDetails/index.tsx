import { useParams, Link } from "react-router-dom";
import { SectionContainer } from "@/components/common/SectionComponents";
import { AnimatedWrapper } from "@/components/common/AnimatedWrapper";
import { CaseStudySection } from "@/components/common/CaseStudySection";
import { useProjectDetails } from "@/hooks/useProjects";
import { slideUp, fadeIn } from "@/lib/animations";
import { Loader2, ArrowLeft, ExternalLink, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { SEOHead } from "@/components/common/SEOHead";

export default function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();
  const { data: project, isLoading, error } = useProjectDetails(slug || "");

  if (isLoading) return <div className="flex justify-center py-32"><Loader2 className="animate-spin h-8 w-8 text-primary" /></div>;
  if (error || !project) return <div className="text-center text-destructive py-32">Project not found.</div>;

  return (
    <SectionContainer className="max-w-4xl">
      <SEOHead 
        title={`${project.title} - Case Study`} 
        description={project.description} 
        image={project.thumbnail}
        type="article"
      />
      <AnimatedWrapper variants={fadeIn} className="mb-8">
        <Button variant="ghost" asChild className="-ml-4 mb-4">
          <Link to="/projects"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects</Link>
        </Button>
        <div className="flex items-center gap-2 mb-4">
          <Badge>{project.type}</Badge>
          <Badge variant="outline">{project.category}</Badge>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{project.title}</h1>
        {project.subtitle && <h2 className="text-2xl text-muted-foreground mb-6">{project.subtitle}</h2>}
        
        <div className="flex gap-4">
          {project.liveUrl && (
            <Button asChild>
              <a href={project.liveUrl} target="_blank" rel="noreferrer"><ExternalLink className="mr-2 h-4 w-4" /> Live Preview</a>
            </Button>
          )}
          {project.githubUrl && (
            <Button variant="outline" asChild>
              <a href={project.githubUrl} target="_blank" rel="noreferrer"><GitBranch className="mr-2 h-4 w-4" /> Source Code</a>
            </Button>
          )}
        </div>
      </AnimatedWrapper>

      {project.thumbnail && (
        <AnimatedWrapper variants={slideUp} className="mb-12 rounded-xl overflow-hidden border border-border shadow-2xl">
          <img src={project.thumbnail} alt={project.title} className="w-full object-cover aspect-video" />
        </AnimatedWrapper>
      )}

      <div className="glass p-8 rounded-xl border border-border">
        <CaseStudySection title="Overview">
          <p>{project.description}</p>
        </CaseStudySection>

        {project.problemStatement && (
          <CaseStudySection title="Business Problem">
            <p>{project.problemStatement}</p>
          </CaseStudySection>
        )}

        {project.solution && (
          <CaseStudySection title="Technical Solution">
            <p>{project.solution}</p>
          </CaseStudySection>
        )}

        {project.features.length > 0 && (
          <CaseStudySection title="Key Features">
            <ul className="list-disc pl-5 space-y-2">
              {project.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </CaseStudySection>
        )}

        <CaseStudySection title="Technology Stack">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(tech => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>
        </CaseStudySection>

        {project.architecture && (
          <CaseStudySection title="Architecture">
            <p>{project.architecture}</p>
          </CaseStudySection>
        )}

        {project.challenges && project.challenges.length > 0 && (
          <CaseStudySection title="Challenges Overcome">
            <ul className="list-disc pl-5 space-y-2">
              {project.challenges.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </CaseStudySection>
        )}
      </div>
    </SectionContainer>
  );
}
