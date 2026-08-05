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
import { Loader2, Monitor, Briefcase, Link as LinkIcon, CheckCircle2, Mail, ArrowRight } from "lucide-react";

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
                    <div className="text-2xl font-black text-foreground">1.7+</div>
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
      <SectionContainer className="relative">
        <div className="flex flex-col lg:flex-row gap-12 items-start relative w-full">
          {/* Left Column (Sticky) */}
          <AnimatedWrapper variants={slideUp} className="w-full lg:w-1/3 lg:sticky lg:top-32 flex flex-col justify-center z-10">
            <SectionHeading
              title="Featured Work"
              subtitle="Production-ready applications built to solve real business problems and deliver measurable results."
              className="text-left"
            />
            <p className="text-muted-foreground mt-4 mb-8 leading-relaxed">
              Here is a curated selection of my latest engineering projects, focusing on scalable architecture, seamless user experiences, and modern tech stacks.
            </p>
            <Button asChild size="lg" className="w-fit rounded-xl shadow-lg shadow-primary/20">
              <Link to="/projects">View All Projects &rarr;</Link>
            </Button>
          </AnimatedWrapper>

          {/* Right Column (Bento Grid) */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

              {/* Hero Project (Spans 2 cols on md) */}
              {projects && projects.length > 0 && (
                <AnimatedWrapper variants={slideUp} className="md:col-span-2 group relative w-full glass border border-border rounded-3xl overflow-hidden hover:border-primary/50 hover:shadow-[0_0_40px_-15px_rgba(var(--primary),0.4)] transition-all duration-500">
                  <div className="flex flex-col">
                    {/* Image Section */}
                    <div className="relative w-full h-56 md:h-72 overflow-hidden bg-surface border-b border-border/50 shrink-0">
                      <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10" />
                      {projects[0].thumbnail ? (
                        <img
                          src={projects[0].thumbnail}
                          alt={projects[0].title}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-surface">No Image Provided</div>
                      )}
                      <div className="absolute top-6 left-6 z-20 flex gap-2">
                        <Badge variant="secondary" className="bg-background/80 backdrop-blur-md text-foreground border-border/50 shadow-sm text-sm px-3 py-1 rounded-full">
                          {projects[0].type}
                        </Badge>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 md:p-8 flex flex-col flex-1 relative z-20 bg-background/40">
                      <div className="mb-4">
                        <h3 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors mb-2">
                          {projects[0].title}
                        </h3>
                        <p className="text-base text-foreground font-semibold leading-snug">
                          {projects[0].subtitle || projects[0].description}
                        </p>
                      </div>

                      <p className="text-muted-foreground mb-6 line-clamp-2">
                        {projects[0].problemStatement || projects[0].description}
                      </p>

                      {/* Achievements */}
                      {projects[0].achievements && projects[0].achievements.length > 0 && (
                        <ul className="space-y-2 mb-6">
                          {projects[0].achievements.slice(0, 2).map((achievement, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm font-medium text-foreground/80">
                              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-border/50 mt-auto">
                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2">
                          {projects[0].technologies.slice(0, 3).map(tech => (
                            <Badge key={tech} variant="outline" className="py-1 px-3 bg-primary/5 text-primary border-primary/20 rounded-md">
                              {tech}
                            </Badge>
                          ))}
                          {projects[0].technologies.length > 3 && (
                            <Badge variant="outline" className="py-1 px-2 border-border text-muted-foreground">
                              +{projects[0].technologies.length - 3}
                            </Badge>
                          )}
                        </div>

                        <div className="flex items-center gap-2">
                          {projects[0].githubUrl && (
                            <Button variant="outline" size="icon" asChild className="rounded-xl border-border/50 glass hover:text-primary hover:border-primary/50">
                              <a href={projects[0].githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub Repository">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                              </a>
                            </Button>
                          )}
                          {projects[0].liveUrl && (
                            <Button variant="outline" size="icon" asChild className="rounded-xl border-border/50 glass hover:text-primary hover:border-primary/50">
                              <a href={projects[0].liveUrl} target="_blank" rel="noreferrer" aria-label="Live Site">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                              </a>
                            </Button>
                          )}
                          <Button asChild size="icon" className="rounded-xl shadow-lg shadow-primary/20">
                            <Link to={`/projects/${projects[0].slug}`}>
                              <ArrowRight className="w-5 h-5" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedWrapper>
              )}

              {/* Small Project Cards (Col span 1) */}
              {projects?.slice(1, 3).map((project) => (
                <AnimatedWrapper key={project.id} variants={slideUp} className="group col-span-1 flex flex-col glass border border-border rounded-3xl overflow-hidden hover:border-primary/50 hover:shadow-[0_0_30px_-15px_rgba(var(--primary),0.3)] transition-all duration-300">
                  {/* Project Image */}
                  <div className="relative w-full h-40 overflow-hidden bg-surface shrink-0 border-b border-border/50">
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
                    <div className="absolute top-4 left-4 z-20">
                      <Badge variant="secondary" className="bg-background/80 backdrop-blur-md text-foreground border-border/50 shadow-sm text-xs px-2.5 py-0.5 rounded-full">
                        {project.type}
                      </Badge>
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

                    <div className="pt-4 border-t border-border/50">
                      <Button asChild variant="ghost" className="w-full group/btn hover:bg-primary/10 hover:text-primary transition-colors rounded-xl">
                        <Link to={`/projects/${project.slug}`} className="flex items-center justify-center gap-2">
                          View Case Study
                          <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </AnimatedWrapper>
              ))}
            </div>

            {/* Mobile Only View All Button */}
            <div className="mt-8 flex justify-center lg:hidden">
              <Button asChild variant="outline" size="lg" className="rounded-xl border-border/50 glass hover:bg-surface text-foreground w-full sm:w-auto shadow-sm shadow-primary/5">
                <Link to="/projects">View All Projects &rarr;</Link>
              </Button>
            </div>
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

      {/* CTA Section */}
      <SectionContainer className="mb-20">
        <AnimatedWrapper variants={slideUp} className="relative overflow-hidden glass rounded-3xl p-10 md:p-16 border border-border/50 text-center shadow-2xl">
          {/* Background effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-foreground leading-[1.2] md:leading-[1.15]">
              Have a project in mind? <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Let's build it together.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              I'm always open to discussing product design work or partnership opportunities. Let's create an experience your users will love.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button asChild size="lg" className="h-14 px-8 text-lg rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
                <Link to="/contact">Get in Touch</Link>
              </Button>
              {profile.email && (
                <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg rounded-xl glass border-border hover:bg-surface">
                  <a href={`mailto:${profile.email}`}>Email Me Directly</a>
                </Button>
              )}
            </div>
          </div>
        </AnimatedWrapper>
      </SectionContainer>
    </div>
  )
}
