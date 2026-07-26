import { SectionContainer, SectionHeading } from "@/components/common/SectionComponents";
import { AnimatedWrapper } from "@/components/common/AnimatedWrapper";
import { useProfile } from "@/hooks/useProfile";
import { useEducation } from "@/hooks/useEducation";
import { useSkills } from "@/hooks/useSkills";
import { slideUp } from "@/lib/animations";
import { Loader2, GraduationCap, GitBranch } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { SEOHead } from "@/components/common/SEOHead";

export default function About() {
  const { data: profile, isLoading: isProfileLoading, error: profileError } = useProfile();
  const { data: education } = useEducation();
  const { data: skills } = useSkills();

  if (isProfileLoading) {
    return <div className="flex h-[50vh] justify-center items-center"><Loader2 className="animate-spin text-primary w-8 h-8" /></div>;
  }

  if (profileError || !profile) {
    return <div className="text-center text-destructive py-20">Failed to load profile data.</div>;
  }

  return (
    <div className="flex flex-col gap-12">
      <SEOHead title="About" description={profile.summary || "Read my developer story."} />

      {/* Background Section */}
      <SectionContainer>
        <SectionHeading title="About Me" subtitle="My engineering story." />
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <AnimatedWrapper variants={slideUp} className="md:w-1/3 w-full flex flex-col gap-8">
            <div className="w-full aspect-square rounded-2xl overflow-hidden glass border border-border shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 flex items-center justify-center">
                <span className="text-2xl font-bold">Photo</span>
              </div>
            </div>

            <div className="flex flex-col gap-6 items-center w-full">
              <div className="flex gap-4 justify-center w-full">
                {profile.socialLinks.github && (
                  <a href={profile.socialLinks.github} target="_blank" rel="noreferrer" className="bg-surface p-4 rounded-full hover:bg-primary/20 hover:text-primary transition-colors flex-1 flex justify-center border border-border">
                    <GitBranch className="w-6 h-6" />
                  </a>
                )}
                {profile.socialLinks.linkedin && (
                  <a href={profile.socialLinks.linkedin} target="_blank" rel="noreferrer" className="bg-surface p-4 rounded-full hover:bg-primary/20 hover:text-primary transition-colors flex-1 flex justify-center border border-border">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  </a>
                )}
              </div>
              <Button asChild size="lg" className="w-full h-12 text-md">
                <a href="/contact">Send me a message &rarr;</a>
              </Button>
            </div>
          </AnimatedWrapper>

          <AnimatedWrapper variants={slideUp} className="md:w-2/3 w-full flex flex-col gap-6">
            <h3 className="text-3xl font-bold tracking-tight">Background</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {profile.summary}
            </p>

            <h3 className="text-2xl font-bold tracking-tight mt-6">Development Philosophy</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in building software that is not only highly functional and scalable but also intuitive for end-users. My approach prioritizes clean code architecture, robust testing, and strict separation of concerns, ensuring that the applications I build can easily adapt to changing business requirements.
            </p>

            <h3 className="text-2xl font-bold tracking-tight mt-6">Career Goals</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My goal is to continue engineering enterprise-level software solutions that solve real-world problems at scale. I am actively pursuing opportunities to deepen my expertise in distributed systems, real-time architectures, and modern cloud deployments.
            </p>
          </AnimatedWrapper>
        </div>
      </SectionContainer>

      {/* Resume Split Section */}
      <SectionContainer className="bg-surface/30 border-y border-border">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left Side: Expertise Progress Bars */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Technical Expertise</h2>
              <p className="text-muted-foreground">My engineering toolkit and proficiency.</p>
            </div>

            <div className="flex flex-col gap-6">
              {skills?.map((skillGroup) => (
                <div key={skillGroup.id} className="glass p-6 rounded-xl border border-border hover:border-primary/50 transition-colors">
                  <h4 className="text-lg font-bold mb-4 text-foreground/90">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((item) => (
                      <AnimatedWrapper key={item} variants={slideUp}>
                        <Badge variant="outline" className="text-sm py-1.5 px-4 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 border-primary/20 shadow-sm">
                          {item}
                        </Badge>
                      </AnimatedWrapper>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Education Timeline */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Education Timeline</h2>
              <p className="text-muted-foreground">My academic background and qualifications.</p>
            </div>

            <div className="flex flex-col gap-0 relative overflow-hidden mt-4">
              {education?.map((edu) => (
                <AnimatedWrapper key={edu.id} variants={slideUp}>
                  <div className="relative pl-8 group pb-12">
                    <div className="absolute left-[3px] top-0 bottom-[-2rem] w-px bg-border/50"></div>
                    <div className="absolute left-[-2.5px] top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-background z-10 group-hover:scale-150 transition-transform duration-300"></div>

                    <div className="glass p-6 rounded-xl border border-border hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-primary/10 p-2.5 rounded-full text-primary">
                          <GraduationCap className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold leading-tight">{edu.degree}</h3>
                          <span className="text-primary font-medium text-sm">{edu.fieldOfStudy}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground font-medium mb-2">{edu.institution}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground bg-background/50 p-2 rounded-lg inline-flex border border-border/50">
                        <span>{edu.startDate} - {edu.endDate}</span>
                        {edu.grade && (
                          <>
                            <span className="w-1 h-1 rounded-full bg-border"></span>
                            <span className="font-semibold text-foreground/80">{edu.grade}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </AnimatedWrapper>
              ))}
            </div>
          </div>

        </div>
      </SectionContainer>
    </div>
  )
}
