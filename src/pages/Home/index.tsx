import { useProfile } from "@/hooks/useProfile";
import { useFeaturedProjects } from "@/hooks/useProjects";
import { useSkills } from "@/hooks/useSkills";
import { useStats } from "@/hooks/useStats";
import { useClientServices } from "@/hooks/useClientServices";
import { useExperience } from "@/hooks/useExperience";
import { SectionContainer, SectionHeading } from "@/components/common/SectionComponents";
import { AnimatedWrapper } from "@/components/common/AnimatedWrapper";
import { slideUp, fadeIn, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Loader2, Monitor, Briefcase, Link as LinkIcon, CheckCircle2, Mail } from "lucide-react";

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
    <div className="flex flex-col">
      <SEOHead
        title="Home"
        description={profile.headline}
      />
      {/* Hero Section */}
      <SectionContainer className="min-h-[85vh] flex flex-col justify-center relative overflow-visible pt-20 md:pt-32">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-primary/20 rounded-full blur-[100px] md:blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16 relative z-10">
          <AnimatedWrapper variants={slideUp} className="flex-1 flex flex-col gap-6 text-center md:text-left">
            <div className="inline-flex items-center gap-3 bg-surface/50 glass border border-border px-5 py-2.5 rounded-full w-fit mx-auto md:mx-0 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium tracking-wide">Available for new opportunities</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.8rem] font-black tracking-tight leading-[1.1] text-foreground">
              Software <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Engineer &</span> AI Enthuasiast.
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto md:mx-0 leading-relaxed pt-2">
              Hello, I'm <span className="text-foreground font-medium">{profile.name}</span>. {profile.headline}
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-6">
              <Button asChild size="lg" className="h-14 px-8 text-lg shadow-primary/25 shadow-xl hover:shadow-primary/40 transition-shadow rounded-xl">
                <Link to="/projects">Explore My Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg glass border-border hover:bg-surface transition-colors rounded-xl">
                <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">Download Resume</a>
              </Button>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4 pt-4 mt-2">
              {profile.socialLinks?.github && (
                <a href={profile.socialLinks.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors border border-border/50 hover:border-primary/30 glass" aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                </a>
              )}
              {profile.socialLinks?.linkedin && (
                <a href={profile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors border border-border/50 hover:border-primary/30 glass" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                </a>
              )}
              {profile.email && (
                <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors border border-border/50 hover:border-primary/30 glass" aria-label="Email">
                  <Mail className="w-6 h-6" />
                </a>
              )}
            </div>
          </AnimatedWrapper>

          <AnimatedWrapper variants={fadeIn} className="flex-1 flex justify-center md:justify-end relative">
            <div className="relative group">
              {/* Hover bloom behind avatar */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-accent blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>

              <div className="w-64 h-64 md:w-[24rem] md:h-[24rem] rounded-full overflow-hidden border-4 border-surface shadow-2xl relative z-10 bg-surface/80 glass ring-1 ring-border/50 transition-transform duration-700 group-hover:scale-105">
                {profile.avatar ? (
                  <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-primary/10 flex items-center justify-center text-6xl text-primary font-bold">
                    {profile.name.charAt(0)}
                  </div>
                )}
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute bottom-8 -left-4 md:-left-12 glass px-6 py-4 rounded-2xl border border-border/50 shadow-xl z-20 hover:-translate-y-2 transition-transform duration-300">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/20 w-12 h-12 rounded-xl flex items-center justify-center text-primary shadow-inner">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-foreground">1.5+</div>
                    <div className="text-xs text-muted-foreground font-bold uppercase tracking-widest mt-0.5">Years Exp</div>
                  </div>
                </div>
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
        <AnimatedWrapper variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services?.map((service) => {
            let Icon = Monitor;
            if (service.icon === 'Briefcase') Icon = Briefcase;
            if (service.icon === 'Link') Icon = LinkIcon;

            return (
              <motion.div key={service.id} variants={slideUp} className="p-8 glass rounded-xl border border-border h-full flex flex-col hover:border-primary/50 transition-colors">
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
              </motion.div>
            );
          })}
        </AnimatedWrapper>
      </SectionContainer>

      {/* Skills Section */}
      <SectionContainer>
        <SectionHeading title="Technical Skills" subtitle="My engineering toolkit." />
        <AnimatedWrapper variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills?.map((skillGroup) => (
            <motion.div key={skillGroup.id} variants={slideUp} className="p-6 glass rounded-xl border border-border h-full hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map(item => (
                  <Badge key={item} variant="outline" className="text-sm py-1.5 px-4 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 border-primary/20 shadow-sm">
                    {item}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatedWrapper>
      </SectionContainer>

      {/* Featured Projects */}
      <SectionContainer className="overflow-hidden relative">
        <SectionHeading title="Featured Projects" subtitle="Some of my best work." className="relative z-20" />

        {/* Gradients for smooth fading edges */}
        <div className="absolute inset-y-0 left-0 w-8 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none mt-24"></div>
        <div className="absolute inset-y-0 right-0 w-8 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none mt-24"></div>

        <div className="flex w-full overflow-hidden group">
          <div className="flex animate-marquee min-w-full shrink-0 flex-nowrap items-stretch gap-6 mr-6 group-hover:[animation-play-state:paused]">
            {projects?.map((project) => (
              <div key={project.id} className="w-[65vw] md:w-[280px] lg:w-[320px] whitespace-normal shrink-0 p-4 border border-border rounded-xl glass hover:border-primary/50 transition-colors flex flex-col relative z-20 group/card">
                <div className="relative w-full aspect-video rounded-md overflow-hidden mb-3 bg-muted/20 border border-border">
                  {project.thumbnail ? (
                    <img src={project.thumbnail} alt={project.title} className="w-full h-full object-contain p-4 group-hover/card:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/40 font-medium tracking-widest text-[10px] uppercase">No Preview</div>
                  )}
                </div>
                <h3 className="text-lg font-bold mb-1.5 leading-tight">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-1 text-[13px] leading-snug line-clamp-2">{project.description}</p>
                <div className="mt-auto">
                  <Button asChild size="sm" className="w-full">
                    <Link to={`/projects/${project.slug}`}>View Case Study</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Duplicate loop to create seamless visual loop */}
          <div className="flex animate-marquee min-w-full shrink-0 flex-nowrap items-stretch gap-6 mr-6 group-hover:[animation-play-state:paused]" aria-hidden="true">
            {projects?.map((project) => (
              <div key={`dup-${project.id}`} className="w-[65vw] md:w-[280px] lg:w-[320px] whitespace-normal shrink-0 p-4 border border-border rounded-xl glass hover:border-primary/50 transition-colors flex flex-col relative z-20 group/card">
                <div className="relative w-full aspect-video rounded-md overflow-hidden mb-3 bg-muted/20 border border-border">
                  {project.thumbnail ? (
                    <img src={project.thumbnail} alt={project.title} className="w-full h-full object-contain p-4 group-hover/card:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/40 font-medium tracking-widest text-[10px] uppercase">No Preview</div>
                  )}
                </div>
                <h3 className="text-lg font-bold mb-1.5 leading-tight">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-1 text-[13px] leading-snug line-clamp-2">{project.description}</p>
                <div className="mt-auto">
                  <Button asChild size="sm" className="w-full">
                    <Link to={`/projects/${project.slug}`}>View Case Study</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
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
                  <p className="text-muted-foreground font-medium flex items-center gap-2 mb-3">
                    <Briefcase className="w-4 h-4" />
                    {exp.company}
                  </p>
                  {exp.metrics && exp.metrics.length > 0 && (
                    <div className="text-sm text-foreground/80 bg-background/50 p-3 rounded-lg border border-border/50">
                      🚀 {exp.metrics[0]}
                    </div>
                  )}
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
