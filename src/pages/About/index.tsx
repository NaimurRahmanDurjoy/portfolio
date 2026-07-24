import { SectionContainer, SectionHeading } from "@/components/common/SectionComponents";
import { AnimatedWrapper } from "@/components/common/AnimatedWrapper";
import { useProfile } from "@/hooks/useProfile";
import { slideUp } from "@/lib/animations";
import { Loader2 } from "lucide-react";

import { SEOHead } from "@/components/common/SEOHead";

export default function About() {
  const { data: profile, isLoading, error } = useProfile();

  return (
    <SectionContainer>
      <SEOHead title="About" description={profile?.summary || "Read my developer story."} />
      <SectionHeading title="About Me" subtitle="My engineering story." />
      
      {isLoading ? (
        <div className="flex justify-center py-20"><Loader2 className="animate-spin h-8 w-8 text-primary" /></div>
      ) : error || !profile ? (
        <div className="text-center text-destructive py-20">Failed to load profile data.</div>
      ) : (
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <AnimatedWrapper variants={slideUp} className="md:w-1/3 w-full">
            <div className="w-full aspect-square rounded-2xl overflow-hidden glass border border-border shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 flex items-center justify-center">
                <span className="text-2xl font-bold">Photo</span>
              </div>
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
      )}
    </SectionContainer>
  )
}
