import { useParams, Link } from "react-router-dom";
import { SectionContainer } from "@/components/common/SectionComponents";
import { AnimatedWrapper } from "@/components/common/AnimatedWrapper";
import { useProjectDetails } from "@/hooks/useProjects";
import { slideUp, fadeIn } from "@/lib/animations";
import { Loader2, ArrowLeft, ExternalLink, GitBranch, CheckCircle2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { SEOHead } from "@/components/common/SEOHead";

export default function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();
  const { data: project, isLoading, error } = useProjectDetails(slug || "");

  if (isLoading) return <div className="flex justify-center py-32"><Loader2 className="animate-spin h-8 w-8 text-primary" /></div>;
  if (error || !project) return <div className="text-center text-destructive py-32">Project not found.</div>;

  return (
    <div className="w-full relative">
      <SEOHead
        title={`${project.title} - Case Study`}
        description={project.description}
        image={project.thumbnail}
        type="article"
      />

      {/* Hero Section */}
      <div className="relative w-full pt-6 md:pt-8 pb-8 md:pb-12 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

        <SectionContainer className="relative z-10">
          <Button variant="ghost" asChild className="mb-6 md:mb-8 rounded-full border border-border/50 glass hover:bg-surface text-muted-foreground hover:text-foreground transition-all w-fit">
            <Link to="/projects"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects</Link>
          </Button>

          <AnimatedWrapper variants={fadeIn} className="w-full max-w-4xl flex flex-col items-start text-left">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge variant="secondary" className="px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border-primary/20 shadow-sm shadow-primary/10">{project.type}</Badge>
              <Badge variant="outline" className="px-4 py-1.5 rounded-full text-sm text-muted-foreground bg-surface/50 border-border/50">{project.category}</Badge>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 text-foreground leading-[1.1]">
              {project.title}
            </h1>

            {project.subtitle && (
              <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                {project.subtitle}
              </h2>
            )}

            <div className="flex flex-wrap gap-4 mt-2">
              {project.liveUrl && (
                <Button asChild size="lg" className="rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 h-14 px-8 text-base">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">View Live Project <ExternalLink className="ml-2 h-4 w-4" /></a>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" size="lg" asChild className="rounded-xl glass border-border hover:bg-surface h-14 px-8 text-base">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer"><GitBranch className="mr-2 h-4 w-4" /> Source Code</a>
                </Button>
              )}
            </div>
          </AnimatedWrapper>
        </SectionContainer>
      </div>

      {/* Main Content Layout */}
      <SectionContainer className="py-16 md:py-24">

        {/* Full Width Thumbnail */}
        {project.thumbnail && (
          <AnimatedWrapper variants={slideUp} className="mb-16 md:mb-24 w-full">
            <div className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden glass border border-border/50 shadow-2xl group">
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors z-10" />
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover object-top border-4 border-surface/50 rounded-3xl"
              />
            </div>
          </AnimatedWrapper>
        )}

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* Left Column: Content */}
          <div className="w-full lg:w-2/3 flex flex-col gap-12">

            <AnimatedWrapper variants={slideUp} className="prose dark:prose-invert max-w-none">
              <h3 className="text-3xl font-bold mb-6 text-foreground">Overview</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>
            </AnimatedWrapper>

            {project.problemStatement && (
              <AnimatedWrapper variants={slideUp} className="glass p-8 md:p-10 rounded-3xl border border-border/50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-primary/50"></div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">The Challenge</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{project.problemStatement}</p>
              </AnimatedWrapper>
            )}

            {project.solution && (
              <AnimatedWrapper variants={slideUp} className="glass p-8 md:p-10 rounded-3xl border border-border/50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-accent/50"></div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">The Solution</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{project.solution}</p>
              </AnimatedWrapper>
            )}

            {project.architecture && (
              <AnimatedWrapper variants={slideUp} className="prose dark:prose-invert max-w-none">
                <h3 className="text-3xl font-bold mb-6 text-foreground">Architecture</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{project.architecture}</p>
              </AnimatedWrapper>
            )}

            {(project.features.length > 0 || (project.challenges && project.challenges.length > 0)) && (
              <div className="grid md:grid-cols-2 gap-8">
                {project.features.length > 0 && (
                  <AnimatedWrapper variants={slideUp} className="glass p-8 rounded-3xl border border-border/50">
                    <h3 className="text-xl font-bold mb-6 text-foreground flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary"><CheckCircle2 className="w-4 h-4" /></div>
                      Key Features
                    </h3>
                    <ul className="space-y-4">
                      {project.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </AnimatedWrapper>
                )}

                {project.challenges && project.challenges.length > 0 && (
                  <AnimatedWrapper variants={slideUp} className="glass p-8 rounded-3xl border border-border/50">
                    <h3 className="text-xl font-bold mb-6 text-foreground flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent"><GitBranch className="w-4 h-4" /></div>
                      Challenges
                    </h3>
                    <ul className="space-y-4">
                      {project.challenges.map((c, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <ChevronRight className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </AnimatedWrapper>
                )}
              </div>
            )}
          </div>

          {/* Right Column: Sticky Sidebar */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32 flex flex-col gap-8">

            {/* Tech Stack */}
            <AnimatedWrapper variants={fadeIn} className="glass p-8 rounded-3xl border border-border/50">
              <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-6">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <Badge key={tech} variant="secondary" className="px-3 py-1.5 text-sm bg-surface/80 hover:bg-surface border border-border/50 text-foreground">
                    {tech}
                  </Badge>
                ))}
              </div>
            </AnimatedWrapper>

            {/* Achievements / Impact */}
            {project.achievements && project.achievements.length > 0 && (
              <AnimatedWrapper variants={fadeIn} className="glass p-8 rounded-3xl border border-border/50 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors"></div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-6">Business Impact</h4>
                <ul className="space-y-5">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 border border-primary/20">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground font-medium text-sm leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedWrapper>
            )}

            {/* CTA Box */}
            <AnimatedWrapper variants={fadeIn} className="p-8 rounded-3xl border border-primary/20 bg-primary/5 text-center">
              <h4 className="font-bold text-foreground mb-2">Like this project?</h4>
              <p className="text-sm text-muted-foreground mb-6">I'm available to build similar solutions for your business.</p>
              <Button asChild className="w-full rounded-xl">
                <Link to="/contact">Let's Talk</Link>
              </Button>
            </AnimatedWrapper>

          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
