import { SectionContainer, SectionHeading } from "@/components/common/SectionComponents";
import { AnimatedWrapper } from "@/components/common/AnimatedWrapper";
import { useExperience } from "@/hooks/useExperience";
import { ExperienceTimeline } from "@/components/common/ExperienceTimeline";
import { slideUp } from "@/lib/animations";
import { Loader2 } from "lucide-react";

export default function Experience() {
  const { data: experience, isLoading, error } = useExperience();

  return (
    <SectionContainer>
      <SectionHeading title="Experience" subtitle="My professional journey and impact." />
      
      {isLoading ? (
        <div className="flex justify-center py-20"><Loader2 className="animate-spin h-8 w-8 text-primary" /></div>
      ) : error ? (
        <div className="text-center text-destructive py-20">Failed to load experience data.</div>
      ) : (
        <div className="flex flex-col gap-0 relative overflow-hidden px-4 md:px-0 mt-8">
          {experience?.map((exp) => (
            <AnimatedWrapper key={exp.id} variants={slideUp}>
              <ExperienceTimeline experience={exp} />
            </AnimatedWrapper>
          ))}
        </div>
      )}
    </SectionContainer>
  )
}
