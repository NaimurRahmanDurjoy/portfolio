import { useProfile } from "@/hooks/useProfile";
import { useFeaturedProjects } from "@/hooks/useProjects";
import { useSkills } from "@/hooks/useSkills";
import { useStats } from "@/hooks/useStats";
import { useClientServices } from "@/hooks/useClientServices";
import { useExperience } from "@/hooks/useExperience";
import { SectionContainer, SectionHeading } from "@/components/common/SectionComponents";
import { AnimatedWrapper } from "@/components/common/AnimatedWrapper";
import { slideUp, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Loader2, Monitor, Briefcase, Link as LinkIcon, CheckCircle2 } from "lucide-react";

import { SEOHead } from "@/components/common/SEOHead";

export default function Home() {
  const { data: profile, isLoading: isProfileLoading } = useProfile();
  const { data: projects, isLoading: isProjectsLoading } = useFeaturedProjects();
  const { data: skills, isLoading: isSkillsLoading } = useSkills();
  const { data: services, isLoading: isServicesLoading } = useClientServices();
  const { data: experience, isLoading: isExperienceLoading } = useExperience();
  const { data: stats, isLoading: isStatsLoading } = useStats();

  if (isProfileLoading || isProjectsLoading || isSkillsLoading || isServicesLoading || isExperienceLoading || isStatsLoading) {
    return <div className="flex h-[50vh] justify-center items-center"><Loader2 className="animate-spin text-primary w-8 h-8" /></div>;
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
      <SectionContainer className="bg-surface/30 py-16 border-y border-border overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-r from-background via-transparent to-background"></div>
        <div className="flex w-full overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap min-w-full shrink-0 flex-nowrap items-center justify-around">
            {stats?.map((stat) => (
              <div key={stat.id} className="flex flex-col items-center justify-center px-8 md:px-16">
                <div className="text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
          {/* Duplicate for seamless infinite loop */}
          <div className="flex animate-marquee whitespace-nowrap min-w-full shrink-0 flex-nowrap items-center justify-around" aria-hidden="true">
            {stats?.map((stat) => (
              <div key={`dup-${stat.id}`} className="flex flex-col items-center justify-center px-8 md:px-16">
                <div className="text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Services Section */}
      <SectionContainer>
        <SectionHeading title="What I Do" subtitle="Services I offer for clients and companies." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services?.map((service) => {
            let Icon = Monitor;
            if (service.icon === 'Briefcase') Icon = Briefcase;
            if (service.icon === 'Link') Icon = LinkIcon;

            return (
              <AnimatedWrapper key={service.id} variants={slideUp}>
                <div className="p-8 glass rounded-xl border border-border h-full flex flex-col hover:border-primary/50 transition-colors">
                  <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="text-primary w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-1">{service.description}</p>
                  <ul className="space-y-3 mt-auto pt-6 border-t border-border">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedWrapper>
            );
          })}
        </div>
      </SectionContainer>

      {/* Skills Section */}
      <SectionContainer>
        <SectionHeading title="Technical Skills" subtitle="My engineering toolkit." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills?.map((skillGroup) => (
            <AnimatedWrapper key={skillGroup.id} variants={slideUp}>
              <div className="p-6 glass rounded-xl border border-border h-full hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-bold mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map(item => (
                    <Badge key={item} variant="outline" className="text-sm py-1.5 px-4 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 border-primary/20 shadow-sm">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </AnimatedWrapper>
          ))}
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

      {/* Experience Section */}
      <SectionContainer>
        <SectionHeading title="Experience" subtitle="My professional journey." />
        <div className="flex flex-col gap-0 relative mb-12 mt-4 overflow-hidden px-4 md:px-0">
          {experience?.slice(0, 3).map((exp) => (
            <AnimatedWrapper key={exp.id} variants={slideUp}>
              <div className="relative pl-8 group pb-8 last:pb-0">
                <div className="absolute left-[3px] top-0 bottom-[-2rem] w-px bg-border/50 group-last:hidden"></div>
                <div className="absolute left-[-2.5px] top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-background z-10 group-hover:scale-150 transition-transform duration-300"></div>
                
                <div className="glass p-6 rounded-xl border border-border hover:border-primary/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
                    <h3 className="text-xl font-bold">{exp.position}</h3>
                    <Badge variant="outline" className="w-fit text-primary border-primary/20 bg-primary/10">
                      {exp.duration.start} - {exp.duration.end}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground font-medium flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    {exp.company}
                  </p>
                </div>
              </div>
            </AnimatedWrapper>
          ))}
        </div>
        <div className="flex justify-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/experience">View Full Experience &rarr;</Link>
          </Button>
        </div>
      </SectionContainer>
    </div>
  )
}
