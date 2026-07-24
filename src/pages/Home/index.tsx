import { useProfile } from "@/hooks/useProfile";
import { useFeaturedProjects } from "@/hooks/useProjects";
import { SectionContainer, SectionHeading } from "@/components/common/SectionComponents";
import { AnimatedWrapper } from "@/components/common/AnimatedWrapper";
import { slideUp, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";

import { SEOHead } from "@/components/common/SEOHead";

export default function Home() {
  const { data: profile, isLoading: isProfileLoading } = useProfile();
  const { data: projects, isLoading: isProjectsLoading } = useFeaturedProjects();

  if (isProfileLoading || isProjectsLoading) {
    return <div className="flex h-[50vh] justify-center items-center"><Loader2 className="animate-spin text-primary w-8 h-8"/></div>;
  }

  if (!profile) return null;

  return (
    <div className="flex flex-col gap-12">
      <SEOHead 
        title="Home" 
        description={profile.headline} 
      />
      {/* Hero Section */}
      <SectionContainer className="min-h-[80vh] flex flex-col justify-center">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8">
          <AnimatedWrapper variants={slideUp} className="flex-1 flex flex-col gap-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hello, I'm <span className="text-primary">{profile.name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium">
              {profile.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
              {profile.headline}
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
              <Button asChild size="lg">
                <Link to="/projects">View Projects</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">Download Resume</a>
              </Button>
            </div>
          </AnimatedWrapper>
          <AnimatedWrapper variants={fadeIn} className="flex-1 flex justify-center md:justify-end">
            <div className="w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-surface shadow-2xl bg-surface/50">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <span className="text-4xl">Avatar</span>
              </div>
            </div>
          </AnimatedWrapper>
        </div>
      </SectionContainer>

      {/* Stats Section */}
      <SectionContainer className="bg-surface/30 py-12 border-y border-border">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
           <AnimatedWrapper variants={slideUp}>
             <div className="text-4xl font-bold text-primary">1.5+</div>
             <div className="text-sm text-muted-foreground mt-2">Years Experience</div>
           </AnimatedWrapper>
           <AnimatedWrapper variants={slideUp}>
             <div className="text-4xl font-bold text-primary">3+</div>
             <div className="text-sm text-muted-foreground mt-2">Enterprise Projects</div>
           </AnimatedWrapper>
           <AnimatedWrapper variants={slideUp}>
             <div className="text-4xl font-bold text-primary">100K+</div>
             <div className="text-sm text-muted-foreground mt-2">Database Records</div>
           </AnimatedWrapper>
           <AnimatedWrapper variants={slideUp}>
             <div className="text-4xl font-bold text-primary">40+</div>
             <div className="text-sm text-muted-foreground mt-2">Critical Bugs Fixed</div>
           </AnimatedWrapper>
         </div>
      </SectionContainer>
      
      {/* Featured Projects */}
      <SectionContainer>
        <SectionHeading title="Featured Projects" subtitle="Some of my best work." />
        <div className="grid md:grid-cols-2 gap-8">
          {projects?.map((project) => (
             <div key={project.id} className="p-6 border border-border rounded-xl glass hover:border-primary/50 transition-colors">
               <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
               <p className="text-muted-foreground mb-4">{project.description}</p>
               <Button asChild variant="link" className="p-0">
                 <Link to={`/projects/${project.slug}`}>View Case Study &rarr;</Link>
               </Button>
             </div>
          ))}
        </div>
      </SectionContainer>
    </div>
  )
}
